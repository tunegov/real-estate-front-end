import React from 'react';
import { withStyles } from 'material-ui/styles';
import { observer } from 'mobx-react';
import EyeIcon from '@material-ui/icons/RemoveRedEye';
import Tooltip from 'material-ui/Tooltip';
import { Link } from '../../routes';

const styles = theme => ({
  wrapper: {
    width: '90%',
    height: '90%',
    boxSizing: 'border-box',
    textAlign: 'center',
    color: '#00C853',
    cursor: 'pointer',
  },
});

@observer
class VeiwFormatter extends React.Component {
  render() {
    const { classes } = this.props;
    const { id, route, onClick, type } = this.props.value;

    if (type === 'action' && onClick) {
      return (
        <Tooltip title="Click to view" enterDelay={400} leaveDelay={100}>
          <div className={classes.wrapper}>
            <EyeIcon onClick={onClick} />
          </div>
        </Tooltip>
      );
    }

    return (
      <Tooltip title="Click to view" enterDelay={400} leaveDelay={100}>
        <Link route={route} params={{ id }}>
          <a>
            <div className={classes.wrapper}>
              <EyeIcon />
            </div>
          </a>
        </Link>
      </Tooltip>
    );
  }
}

export default withStyles(styles)(VeiwFormatter);
