import React from 'react';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'next/router';
import SettingsIcon from '@material-ui/icons/Settings';
import SideNav from '../SideNav';
import AdminSideNav from '../AdminSideNav';
import AppTopNav from '../AppTopNav';
import SettingsDrawer from '../SettingsDrawer';
import { includesAny, includesAll } from '../../utils/arrayUtils';

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

    this.state = { navDrawerOpen: false, settingsDrawerOpen: false };
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

  renderSideNav = () => {
    const { logoutUser, userRoles, isAdminMode } = this.props;
    const currentPath = this.props.router.pathname;
    const { onlyRoleIsAdmin } = this;
    if (isAdminMode || onlyRoleIsAdmin) {
      return (
        <AdminSideNav
          currentPath={currentPath}
          drawerOpen={this.state.navDrawerOpen}
          toggleDrawer={this.toggleNavDrawer}
          logoutUser={logoutUser}
          userRoles={userRoles}
          isAdminMode={isAdminMode}
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
        isAdminMode={isAdminMode}
      />
    );
  }

  render() {
    const { classes, logoutUser, userRoles, isAdminMode, toggleAdminMode } = this.props;
    const currentPath = this.props.router.pathname;
    const { isAdmin } = this;

    return (
      <div className={classes.root}>
        <AppTopNav
          currentPath={currentPath}
          logoutUser={logoutUser}
          toggleDrawer={this.toggleNavDrawer}
          isAdminMode={isAdminMode}
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
              isAdminMode={isAdminMode}
              toggleDrawer={this.toggleSettingsDrawer}
              toggleNavDrawer={this.toggleNavDrawer}
              drawerOpen={this.state.settingsDrawerOpen}
              toggleAdminMode={toggleAdminMode}
              navDrawerOpen={this.state.navDrawerOpen}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(ClippedDrawer));
