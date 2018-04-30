import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
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
    width: '100%)',
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
  },
  icon: {
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,.1)',
    },
  },
  leftTopNavIconWrapper: {
    //marginRight: 'auto',
  },
  iconGroupWrapper: {
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
    const { classes, currentPath, adminMenuOn } = this.props;
    const pathArray = currentPath.split('/');
    const path = pathArray[pathArray.length - 1];

    return (
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar className={classes.topToolbar}>
          <div className={classes.leftTopNavIconWrapper}>
            <div className={classNames(!adminMenuOn && classes.menuHiddenWrapper)}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                className={classes.menuIcon}
                onClick={this.props.toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            </div>

          </div>
          <Typography variant="title" color="inherit" noWrap>
            {capitalize(unhyphenate(path))}
          </Typography>
          <div className={classes.iconGroupWrapper}>
            <Tooltip id="tooltip-icon" title="Home" enterDelay={200} leaveDelay={200} placement="bottom" PopperProps={{ style: { minWidth: '30px' } }}>
              <IconButton
                color="inherit"
                className={classes.icon}
                onClick={() => Router.pushRoute('home')}
              >
                <HomeIcon />
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(AppTopNav);
