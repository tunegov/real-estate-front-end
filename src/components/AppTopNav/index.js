import React, { Component } from 'react';
import Hidden from 'material-ui/Hidden';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationIcon from '@material-ui/icons/Notifications';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { observer } from 'mobx-react';
import { Router } from '../../routes';
import { capitalize, unhyphenate } from '../../utils/stringUtils';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignContent: 'center',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  },
  [theme.breakpoints.down(theme.breakpoints.values.md)]: {
    appBar: {
      width: '100%',
    },
  },
  content: {
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
  menuIcon: {
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,.1)',
    },
  },
  leftTopNavIconWrapper: {
    marginRight: 'auto',
  },
  notificationIcon: {
    marginLeft: 'auto',
  },
  menuHiddenWrapper: {
    display: 'inline',
  },
  [theme.breakpoints.up(theme.breakpoints.values.md)]: {
    menuHiddenWrapper: {
      display: 'none',
    },
  },
});

@observer
class AppTopNav extends Component {
  render() {
    const { classes, currentPath } = this.props;
    const pathArray = currentPath.split('/');
    const path = pathArray[pathArray.length - 1];

    const logoutUser = () => {
      const { error } = this.props.logoutUser();
      if (error) {
        // TODO: add user notification of an logout error
        console.log(error);
        return;
      }
      Router.pushRoute('home');
    };

    return (
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar className={classes.topToolbar}>
          <div className={classes.leftTopNavIconWrapper}>
            <div className={classes.menuHiddenWrapper}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                className={classes.menuIcon}
                onClick={this.props.toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            </div>
            <Tooltip id="tooltip-icon" title="Notifications" enterDelay={200} leaveDelay={200} placement="bottom" PopperProps={{ style: { minWidth: '30px' } }}>
              <IconButton
                color="inherit"
                className={classes.menuIcon}
              >
                <NotificationIcon />
              </IconButton>
            </Tooltip>

          </div>
          <Typography align="center" variant="title" color="inherit" noWrap>
            {capitalize(unhyphenate(path))}
          </Typography>
          <div className={classes.notificationIcon}>
            <Tooltip id="tooltip-icon" title="Home" enterDelay={200} leaveDelay={200} placement="bottom" PopperProps={{ style: { minWidth: '30px' } }}>
              <IconButton
                color="inherit"
                className={classes.menuIcon}
                onClick={() => Router.pushRoute('home')}
              >
                <HomeIcon />
              </IconButton>
            </Tooltip>
            <Tooltip id="tooltip-icon" title="Log Out" enterDelay={200} leaveDelay={200} placement="bottom" PopperProps={{ style: { minWidth: '30px' } }}>
              <IconButton
                color="inherit"
                className={classes.menuIcon}
                onClick={logoutUser}
              >
                <ExitToAppIcon />
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(AppTopNav);
