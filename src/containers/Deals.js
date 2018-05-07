import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import GraphIcon from '@material-ui/icons/Equalizer';
import { observer } from 'mobx-react';
import SubmitDealDialogBox from '../components/SubmitDealDialogBox';
import DealsTableContainer from './DealsTable';
import DealsSummaryDealDialogBox from '../components/DealsSummaryDealDialogBox';

const styles = theme => ({
  addDealBtn: {
  },
  dealsSummaryBtn: {
    marginLeft: '25px',
    backgroundColor: '#2995F3',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#2380D1',
    },
  },
  wrapper: {
    position: 'relative',
  },
  buttonsWrapper: {
    display: 'flex',
    marginBottom: '25px',
    justifyContent: 'center',
  },
});

@observer
class Deals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitDealDialogOpen: false,
      dealsSummaryDialogBoxOpen: false,
    };
  }

  toggleAddDealDialogBox = () => {
    this.setState({ submitDealDialogOpen: !this.state.submitDealDialogOpen });
  };

  toggleDealsSummaryDialogBox = () => {
    this.setState({ dealsSummaryDialogBoxOpen: !this.state.dealsSummaryDialogBoxOpen });
  };

  render() {
    const { classes, userUUID } = this.props;
    const { submitDealDialogOpen, dealsSummaryDialogBoxOpen } = this.state;
    const { toggleAddDealDialogBox, toggleDealsSummaryDialogBox } = this;


    return (
      <div className={classes.wrapper}>
        <div>
          <div className={classes.buttonsWrapper}>
            <Button
              variant="raised"
              color="secondary"
              aria-label="add"
              onClick={toggleAddDealDialogBox}
              classes={{ root: classes.addDealBtn }}
            >
              <AddIcon />
              Add a Deal
            </Button>
            <Button
              variant="raised"
              onClick={toggleDealsSummaryDialogBox}
              classes={{ root: classes.dealsSummaryBtn }}
            >
              <GraphIcon />
              Deals Summary
            </Button>
          </div>
          <SubmitDealDialogBox
            submitDealDialogOpen={submitDealDialogOpen}
            toggleDialogBoxOpen={toggleAddDealDialogBox}
            userUUID={userUUID}
          />
        </div>
        <DealsTableContainer />
        <DealsSummaryDealDialogBox
          toggleDealsSummaryDialogBox={toggleDealsSummaryDialogBox}
          dealsSummaryDialogBoxOpen={dealsSummaryDialogBoxOpen}
          userUUID={userUUID}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Deals);
