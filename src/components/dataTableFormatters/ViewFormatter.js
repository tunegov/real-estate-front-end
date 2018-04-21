import React from 'react';
import { withStyles } from 'material-ui/styles';
import { observer } from 'mobx-react';
import EyeIcon from '@material-ui/icons/RemoveRedEye';

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
    const email = this.props.value;
    const { classes } = this.props;

    return (

      <div className={classes.wrapper}>
        <EyeIcon />
      </div>
    );
  }
}

export default withStyles(styles)(VeiwFormatter);
