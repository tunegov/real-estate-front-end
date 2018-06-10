import React from 'react';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'next/router';
import SettingsIcon from '@material-ui/icons/Settings';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import SideNav from '../SideNav';
import AdminSideNav from '../AdminSideNav';
import AppTopNav from '../AppTopNav';
import SettingsDrawer from '../SettingsDrawer';
import { includesAny, includesAll } from '../../utils/arrayUtils';
import AdminCRUDManagementDialog from '../AdminCRUDManagementDialog';
import CreateAgentDialogBox from '../CreateAgentDialogBox';
import MenuDialogBox from '../MenuDialogBox';

const styles = theme => ({
  root: {
    maxHeight: '100%',
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignContent: 'center',
    fontFamily: theme.typography.fontFamily,
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
    position: 'fixed',
    bottom: '10px',
    right: '0',
    height: '40px',
    width: '40px',
    zIndex: 10,
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
      managementModalCurrentType: null,
      createAgentModalOpen: false,
      menuDialogBoxOpen: false,
      menuDialogBoxTitle: null,
      menuDialogBoxLinkItems: null,
    };
    this.isAdmin = includesAny(this.props.userRoles, ['admin', 'super-admin']);
    this.onlyRoleIsAdmin = includesAll(
      ['admin', 'super-admin'],
      this.props.userRoles
    );
  }

  toggleNavDrawer = state => {
    this.setState({
      navDrawerOpen:
        typeof state === 'boolean' ? state : !this.state.navDrawerOpen,
    });
  };

  toggleMenuDialogBoxOpen = (title, linkItems) => {
    this.setState({
      menuDialogBoxOpen: true,
      menuDialogBoxTitle: title,
      menuDialogBoxLinkItems: linkItems,
    });
  };

  toggleMenuDialogBoxClosed = () => {
    this.setState({
      menuDialogBoxOpen: false,
      menuDialogBoxTitle: null,
      menuDialogBoxLinkItems: null,
    });
  };

  toggleSettingsDrawer = state => {
    this.setState({
      settingsDrawerOpen:
        typeof state === 'boolean' ? state : !this.state.settingsDrawerOpen,
    });
  };

  toggleManagementModal = (routeBase, subtype) => {
    const { managementModalOpen } = this.state;
    this.setState({
      managementModalOpen: !managementModalOpen,
      managementModalCurrentRoute: !managementModalOpen ? routeBase : null,
      managementModalCurrentType: !managementModalOpen ? subtype : null,
    });
  };

  toggleCreateAgentModal = state => {
    const { createAgentModalOpen } = this.state;
    this.setState({
      createAgentModalOpen:
        typeof state === 'boolean' ? state : !createAgentModalOpen,
    });
  };

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
          toggleMenuDialogBoxOpen={this.toggleMenuDialogBoxOpen}
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
        toggleMenuDialogBoxOpen={this.toggleMenuDialogBoxOpen}
      />
    );
  };

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
    const {
      managementModalCurrentRoute,
      managementModalOpen,
      createAgentModalOpen,
      managementModalCurrentType,
      menuDialogBoxOpen,
      menuDialogBoxTitle,
      menuDialogBoxLinkItems,
    } = this.state;
    const managementModalType = managementModalCurrentRoute
      ? managementModalCurrentRoute.split('-').pop()
      : null;

    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <div className={classes.root}>
          <AppTopNav
            currentPath={currentPath}
            logoutUser={logoutUser}
            toggleDrawer={this.toggleNavDrawer}
            adminMenuOn={adminMenuOn}
          />
          {this.renderSideNav()}
          <main className={classes.content} id="inner-app-content">
            <div className={classes.toolbar} />
            {this.props.children}
            <div className={classes.drawerWrapper}>
              <button
                className={classes.settingsBtn}
                onClick={this.toggleSettingsDrawer}
              >
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
                managementModalCurrentType={
                  this.state.managementModalCurrentType
                }
              />
            </div>
          </main>
          <AdminCRUDManagementDialog
            open={managementModalOpen}
            managementModalCurrentRoute={managementModalCurrentRoute}
            managementModalType={managementModalType}
            toggleManagementModal={this.toggleManagementModal}
            toggleCreateAgentModal={this.toggleCreateAgentModal}
            managementModalCurrentType={managementModalCurrentType}
          />
          <CreateAgentDialogBox
            open={createAgentModalOpen}
            toggleCreateAgentModal={this.toggleCreateAgentModal}
          />
          <MenuDialogBox
            open={menuDialogBoxOpen}
            title={menuDialogBoxTitle}
            toggleSideNavModal={this.toggleMenuDialogBoxOpen}
            linkItems={menuDialogBoxLinkItems}
            toggleSideNavModalClosed={this.toggleMenuDialogBoxClosed}
          />
        </div>
      </MuiPickersUtilsProvider>
    );
  }
}

export default withRouter(withStyles(styles)(ClippedDrawer));
