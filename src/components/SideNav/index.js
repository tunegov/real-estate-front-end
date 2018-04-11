import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Divider from 'material-ui/Divider';
import Hidden from 'material-ui/Hidden';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import {
  MdDashboard as DashboardIcon,
  MdPerson as PersonIcon,
} from 'react-icons/lib/md';
import {
  FaCreditCard as DealsIcon,
  FaClipboard as InvoicesIcon,
  FaSlideshare as LeadsIcon,
} from 'react-icons/lib/fa';
import ClientCenterIcon from 'react-icons/lib/ti/group';
import SideNavLinkItem from '../SideNavLinkItem';

const drawerWidth = 240;

const sideLinks = [
  { name: 'Dashboard', route: 'dashboard', icon: DashboardIcon },
  { name: 'Profile', route: 'profile', icon: PersonIcon, iconFontSize: 28 },
  { name: 'Deals', route: 'deals', icon: DealsIcon },
  { name: 'Leads', route: 'leads', icon: LeadsIcon },
  { name: 'Invoices', route: 'invoices', icon: InvoicesIcon, iconFontSize: 20 },
  { name: 'Client Center', route: 'client-center', icon: ClientCenterIcon, iconFontSize: 24 },
];

const renderSideLinkComponents = currentPath => (
  sideLinks.map(item => (
    <SideNavLinkItem
      key={item.route}
      name={item.name}
      route={item.route}
      icon={item.icon}
      iconFontSize={item.iconFontSize}
      currentPath={currentPath}
    />
  ))
);

const styles = theme => ({
  root: {
    height: '100%',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    zIndex: 1400,
  },
  tempDrawer: {
    minWidth: '240px',
    width: '240px',
  },
  toolbar: theme.mixins.toolbar,
  topToolbar: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

@observer
class SideNav extends Component {
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
            <div className={classes.toolbar} />
            <Divider />
            <List>{renderSideLinkComponents(currentPath)}</List>
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
            <Divider />
            <List>{renderSideLinkComponents(currentPath)}</List>
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

export default withStyles(styles)(SideNav);
