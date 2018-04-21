import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import GraphIcon from '@material-ui/icons/Equalizer';
import { observer } from 'mobx-react';
import SubmitDealDialogBox from '../components/SubmitDealDialogBox';
import DealsTableContainer from './DealsTable';

const styles = theme => ({
  addDealBtn: {
    marginLeft: '25px',
  },
  dealsSummaryBtn: {
    marginLeft: '25px',
    backgroundColor: '#2995F3',
    '&:hover': {
      backgroundColor: '#2380D1',
    }
  },
  wrapper: {
    position: 'relative',
  },
  buttonsWrapper: {
    display: 'flex',
    marginBottom: '25px',
  },
});

@observer
class Deals extends Component {
  render() {
    const { classes, submitDealDialogOpen, toggleDialogBoxOpen } = this.props;

    return (
      <div className={classes.wrapper}>
        <div className={classes.addDealBtn}>
          <div className={classes.buttonsWrapper}>
            <Button
              variant="raised"
              color="secondary"
              aria-label="add"
              onClick={toggleDialogBoxOpen}
              classes={{ root: classes.addDealBtn }}
            >
              <AddIcon />
              Add a Deal
            </Button>
            <Button
              variant="raised"
              color="secondary"
              onClick={() => console.log("deals summary button clicked")}
              classes={{ root: classes.dealsSummaryBtn }}
            >
              <GraphIcon />
              Deals Summary
            </Button>
          </div>
          <SubmitDealDialogBox
            submitDealDialogOpen={submitDealDialogOpen}
            toggleDialogBoxOpen={toggleDialogBoxOpen}
            userUUID={this.props.userUUID}
          />
        </div>
        <DealsTableContainer />
      </div>
    );
  }
}

export default withStyles(styles)(Deals);
