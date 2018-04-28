import React from 'react';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'next/router';
import SettingsIcon from '@material-ui/icons/Settings';
import SideNav from '../SideNav';
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
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

class ClippedDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { drawerOpen: false, settingsDrawerOpen: false };
    this.isAdmin = includesAny(this.props.userRoles, ['admin', 'super-admin']);
    this.onlyRoleIsAdmin = includesAll(['admin', 'super-admin'], this.props.userRoles);
  }

  toggleDrawer = state => {
    this.setState({
      drawerOpen: typeof state === 'boolean' ? state : !this.state.drawerOpen,
    });
  }

  toggleSettingsDrawer = state => {
    this.setState({
      settingsDrawerOpen: typeof state === 'boolean' ? state : !this.state.settingsDrawerOpen,
    });
  }

  render() {
    const { classes, logoutUser, userRoles, isAdminMode, toggleAdminMode } = this.props;
    const currentPath = this.props.router.pathname;
    const { isAdmin } = this;

    return (
      <div className={classes.root}>
        <AppTopNav currentPath={currentPath} logoutUser={logoutUser} toggleDrawer={this.toggleDrawer} />
        <SideNav
          currentPath={currentPath}
          drawerOpen={this.state.drawerOpen}
          toggleDrawer={this.toggleDrawer}
          logoutUser={logoutUser}
          userRoles={userRoles}
          toggleDrawer={this.toggleDrawer}
          drawerOpen={this.state.drawerOpen}
          isAdminMode={isAdminMode}
        />
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
              drawerOpen={this.state.settingsDrawerOpen}
              toggleAdminMode={toggleAdminMode}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(ClippedDrawer));
