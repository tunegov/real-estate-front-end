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
    const { classes, profileURL } = this.props;

    return (
      <Tooltip
        title="Click to view"
        enterDelay={400}
        leaveDelay={100}
      >
        <Link route={profileURL || '#'}>
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
