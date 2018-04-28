import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Hidden from 'material-ui/Hidden';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import NotificationIcon from '@material-ui/icons/Notifications';
import { withStyles } from 'material-ui/styles';
import SideNavLinkItem from '../SideNavLinkItem';
import navLinks from './navItems';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    position: 'relative',
    height: '100%',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    zIndex: 1,
  },
  tempDrawer: {
    minWidth: '240px',
    width: '240px',
  },
  toolbar: theme.mixins.toolbar,
  topToolbar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '5px',
  },
  list: {
    paddingTop: 0,
  },
  notificationIcon: {
    position: 'absolute',
    left: '5px',
    bottom: '5px',
  },
  arrowBackBtn: {
    marginLeft: 'auto',
    marginRight: '10px',
    height: '30px',
    width: '30px',
  },
});

@observer
class SideNav extends Component {
  constructor(props) {
    super(props);
    this.renderSideLinkComponents = this.renderSideLinkComponents.bind(this);
  }

  renderSideLinkComponents = currentPath => (
    navLinks.map(item => {
      return (
        <SideNavLinkItem
          key={item.route || item.name}
          name={item.name}
          route={item.route}
          icon={item.icon}
          iconFontSize={item.iconFontSize}
          currentPath={currentPath}
          isActionItem={item.id === 'logout'}
          onClick={() => {
            if (this.props.drawerOpen) this.props.toggleDrawer(false);
            if (item.id === 'logout') this.props.logoutUser;
          }}
        />
      );
    })
  );

  render() {
    const { classes, currentPath, drawerOpen, toggleDrawer } = this.props;

    return (
      <div className={classes.root}>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            className={classes.tempDrawer}
            classes={{
              paper: classes.drawerPaper,
            }}
            open={drawerOpen}
            anchor="left"
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            onClose={toggleDrawer}
          >
            <div className={`${classes.toolbar} ${classes.topToolbar}`}>
              <Tooltip id="tooltip-icon" title="Close Sidebar" enterDelay={400} leaveDelay={200} placement="bottom" PopperProps={{ style: { minWidth: '30px' } }}>
                <IconButton
                  color="primary"
                  className={`${classes.icon} ${classes.arrowBackBtn}`}
                  onClick={toggleDrawer}
                >
                  <ArrowBackIcon style={{ fontSize: '24px' }} />
                </IconButton>
              </Tooltip>
            </div>
            <Divider />
            <List>{this.renderSideLinkComponents(currentPath)}</List>
            <div className={classes.notificationIcon}>
              <Tooltip id="tooltip-icon" title="Notifications" enterDelay={200} leaveDelay={200} placement="bottom" PopperProps={{ style: { minWidth: '30px' } }}>
                <IconButton
                  color="primary"
                  className={classes.icon}
                >
                  <NotificationIcon />
                </IconButton>
              </Tooltip>
            </div>
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            <List>{this.renderSideLinkComponents(currentPath)}</List>
            <div className={classes.notificationIcon}>
              <Tooltip id="tooltip-icon" title="Notifications" enterDelay={200} leaveDelay={200} placement="bottom" PopperProps={{ style: { minWidth: '30px' } }}>
                <IconButton
                  color="primary"
                  className={classes.icon}
                >
                  <NotificationIcon />
                </IconButton>
              </Tooltip>
            </div>
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

export default withStyles(styles)(SideNav);
