import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import GraphIcon from '@material-ui/icons/Equalizer';
import { observer } from 'mobx-react';
import AdminAreaDealsTableContainer from './AdminAreaDealsTableContainer';
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
class AdminAreaDealsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dealsSummaryDialogBoxOpen: false,
    };
  }

  toggleDealsSummaryDialogBox = () => {
    this.setState({ dealsSummaryDialogBoxOpen: !this.state.dealsSummaryDialogBoxOpen });
  };

  render() {
    const { classes } = this.props;
    const { dealsSummaryDialogBoxOpen } = this.state;
    const { toggleDealsSummaryDialogBox } = this;


    return (
      <div className={classes.wrapper}>
        <div>
          <div className={classes.buttonsWrapper}>
            <Button
              variant="raised"
              onClick={toggleDealsSummaryDialogBox}
              classes={{ root: classes.dealsSummaryBtn }}
            >
              <GraphIcon />
              Deals Summary
            </Button>
          </div>
        </div>
        <AdminAreaDealsTableContainer />
        <DealsSummaryDealDialogBox
          toggleDealsSummaryDialogBox={toggleDealsSummaryDialogBox}
          dealsSummaryDialogBoxOpen={dealsSummaryDialogBoxOpen}
        />
      </div>
    );
  }
}

export default withStyles(styles)(AdminAreaDealsContainer);
