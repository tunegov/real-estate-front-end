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
import MenuDialogBox from '../MenuDialogBox';
import { admin, superAdmin } from '../../constants/userTypes';

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
    display: 'flex',
    justifyContent: 'center',
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
  snackBar: {
    marginTop: 25,
  },
});

class InnerAppLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navDrawerOpen: false,
      settingsDrawerOpen: false,
      managementModalOpen: false,
      managementModalCurrentRoute: null,
      managementModalCurrentType: null,
      menuDialogBoxOpen: false,
      menuDialogBoxTitle: null,
      menuDialogBoxLinkItems: null,
    };

    const { userRole } = this.props;
    this.isAdmin = userRole === admin || userRole === superAdmin;
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

  renderSideNav = () => {
    const { logoutUser, userRole } = this.props;
    const currentPath = this.props.router.pathname;

    if (this.isAdmin) {
      return (
        <AdminSideNav
          currentPath={currentPath}
          drawerOpen={this.state.navDrawerOpen}
          toggleDrawer={this.toggleNavDrawer}
          logoutUser={logoutUser}
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
        toggleMenuDialogBoxOpen={this.toggleMenuDialogBoxOpen}
      />
    );
  };

  render() {
    const {
      classes,
      logoutUser,
      userRole,
      toggleFullScreenLoader,
      createAgent,
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
            isAdmin={isAdmin}
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
                toggleDrawer={this.toggleSettingsDrawer}
                toggleNavDrawer={this.toggleNavDrawer}
                drawerOpen={this.state.settingsDrawerOpen}
                navDrawerOpen={this.state.navDrawerOpen}
                toggleFullScreenLoader={toggleFullScreenLoader}
                managementModalCurrentType={
                  this.state.managementModalCurrentType
                }
              />
            </div>
          </main>
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

export default withRouter(withStyles(styles)(InnerAppLayout));
