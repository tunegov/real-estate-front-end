import React from 'react';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'next/router';
import SideNav from '../SideNav';
import AppTopNav from '../AppTopNav';

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
});

class ClippedDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { drawerOpen: false };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({ ...this.sate, drawerOpen: !this.state.drawerOpen });
  }

  render() {
    const { classes, logoutUser, userRoles } = this.props;
    const currentPath = this.props.router.pathname;

    return (
      <div className={classes.root}>
        <AppTopNav currentPath={currentPath} logoutUser={logoutUser} toggleDrawer={this.toggleDrawer} />
        <SideNav
          currentPath={currentPath}
          drawerOpen={this.state.drawerOpen}
          toggleDrawer={this.toggleDrawer}
          logoutUser={logoutUser}
          userRoles={userRoles}
        />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
      </div >
    );
  }
}

export default withRouter(withStyles(styles)(ClippedDrawer));
