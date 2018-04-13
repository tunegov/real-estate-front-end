import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import { observer } from 'mobx-react';
import SubmitDealDialogBox from '../components/SubmitDealDialogBox';

const styles = theme => ({
  addDealBtn: {
    position: 'absolute',
    left: '20px',
    bottom: '20px',
  },
});

@observer
class Deals extends Component {
  render() {
    const { classes, submitDealDialogOpen, toggleDialogBoxOpen } = this.props;

    return (
      <div className={classes.addDealBtn}>
        <Button
          variant="raised"
          color="secondary"
          aria-label="add"
          onClick={toggleDialogBoxOpen}
        >
          <AddIcon />
          Add a Deal
        </Button>
        <SubmitDealDialogBox submitDealDialogOpen={submitDealDialogOpen} toggleDialogBoxOpen={toggleDialogBoxOpen} userUUID={this.props.userUUID} />
      </div>
    );
  }
}

export default withStyles(styles)(Deals);
