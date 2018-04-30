import React from 'react';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'next/router';
import SettingsIcon from '@material-ui/icons/Settings';
import SideNav from '../SideNav';
import AdminSideNav from '../AdminSideNav';
import AppTopNav from '../AppTopNav';
import SettingsDrawer from '../SettingsDrawer';
import { includesAny, includesAll } from '../../utils/arrayUtils';
import AdminCRUDManagementDialog from '../AdminCRUDManagementDialog';
import CreateAgentDialogBox from '../CreateAgentDialogBox';

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignContent: 'center',
  },
  content: {
    position: 'relative',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
    overflow: 'auto',
  },
  toolbar: theme.mixins.toolbar,
  topToolbar: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  settingsBtn: {
    position: 'absolute',
    bottom: '10px',
    right: '0',
    height: '40px',
    width: '40px',
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,.6)',
    color: '#fff',
    border: 'none',
    borderRadius: '5px 0 0 5px',
    outline: 'none',
    boxShadow: theme.shadows[6],
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

class ClippedDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navDrawerOpen: false,
      settingsDrawerOpen: false,
      managementModalOpen: false,
      managementModalCurrentRoute: null,
      createAgentModalOpen: false,
    };
    this.isAdmin = includesAny(this.props.userRoles, ['admin', 'super-admin']);
    this.onlyRoleIsAdmin = includesAll(['admin', 'super-admin'], this.props.userRoles);
  }

  toggleNavDrawer = state => {
    this.setState({
      navDrawerOpen: typeof state === 'boolean' ? state : !this.state.navDrawerOpen,
    });
  }

  toggleSettingsDrawer = state => {
    this.setState({
      settingsDrawerOpen: typeof state === 'boolean' ? state : !this.state.settingsDrawerOpen,
    });
  }

  toggleManagementModal = routeBase => {
    const { managementModalOpen } = this.state;
    this.setState({
      managementModalOpen: !managementModalOpen,
      managementModalCurrentRoute: !managementModalOpen ? routeBase : null,
    });
  }

  toggleCreateAgentModal = state => {
    const { createAgentModalOpen } = this.state;
    this.setState({
      createAgentModalOpen: typeof state === 'boolean' ? state : !createAgentModalOpen,
    });
  }

  renderSideNav = () => {
    const { logoutUser, userRoles, adminMenuOn } = this.props;
    const currentPath = this.props.router.pathname;
    const { onlyRoleIsAdmin } = this;
    if (adminMenuOn || onlyRoleIsAdmin) {
      return (
        <AdminSideNav
          currentPath={currentPath}
          drawerOpen={this.state.navDrawerOpen}
          toggleDrawer={this.toggleNavDrawer}
          logoutUser={logoutUser}
          userRoles={userRoles}
          adminMenuOn={adminMenuOn}
          toggleManagementModal={this.toggleManagementModal}
        />
      );
    }
    return (
      <SideNav
        currentPath={currentPath}
        drawerOpen={this.state.navDrawerOpen}
        toggleDrawer={this.toggleNavDrawer}
        logoutUser={logoutUser}
        userRoles={userRoles}
        adminMenuOn={adminMenuOn}
      />
    );
  }

  render() {
    const {
      classes,
      logoutUser,
      userRoles,
      adminMenuOn,
      toggleAdminMenu,
      toggleFullScreenLoader,
    } = this.props;
    const currentPath = this.props.router.pathname;
    const { isAdmin } = this;
    const { managementModalCurrentRoute, managementModalOpen, createAgentModalOpen } = this.state;
    const managementModalType = managementModalCurrentRoute ?
      managementModalCurrentRoute.split('-').pop() : null;

    return (
      <div className={classes.root}>
        <AppTopNav
          currentPath={currentPath}
          logoutUser={logoutUser}
          toggleDrawer={this.toggleNavDrawer}
          adminMenuOn={adminMenuOn}
        />
        {this.renderSideNav()}
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
          <div className={classes.drawerWrapper}>
            <button className={classes.settingsBtn} onClick={this.toggleSettingsDrawer}>
              <SettingsIcon />
            </button>
            <SettingsDrawer
              isAdmin={isAdmin}
              onlyRoleIsAdmin={this.onlyRoleIsAdmin}
              adminMenuOn={adminMenuOn}
              toggleDrawer={this.toggleSettingsDrawer}
              toggleNavDrawer={this.toggleNavDrawer}
              drawerOpen={this.state.settingsDrawerOpen}
              toggleAdminMenu={toggleAdminMenu}
              navDrawerOpen={this.state.navDrawerOpen}
              toggleFullScreenLoader={toggleFullScreenLoader}
            />
          </div>
        </main>
        <AdminCRUDManagementDialog
          open={managementModalOpen}
          managementModalCurrentRoute={managementModalCurrentRoute}
          managementModalType={managementModalType}
          toggleManagementModal={this.toggleManagementModal}
          toggleCreateAgentModal={this.toggleCreateAgentModal}
        />
        <CreateAgentDialogBox
          open={createAgentModalOpen}
          toggleCreateAgentModal={this.toggleCreateAgentModal}
        />
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(ClippedDrawer));
