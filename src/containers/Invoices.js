import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import GraphIcon from '@material-ui/icons/Equalizer';
import { observer } from 'mobx-react';
import SubmitInvoiceDialogBox from '../components/SubmitInvoiceDialogBox';
import InvoicesTableContainer from './InvoicesTable';

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
class Invoices extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitInvoiceDialogOpen: false,
    };
  }

  toggleDialogBoxOpen = () => {
    this.setState({ submitInvoiceDialogOpen: !this.state.submitInvoiceDialogOpen });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <div className={classes.addDealBtn}>
          <div className={classes.buttonsWrapper}>
            <Button
              variant="raised"
              color="secondary"
              aria-label="add"
              onClick={this.toggleDialogBoxOpen}
              classes={{ root: classes.addDealBtn }}
            >
              <AddIcon />
              Submit an Invoice
            </Button>
          </div>
          <SubmitInvoiceDialogBox
            submitInvoiceDialogOpen={this.state.submitInvoiceDialogOpen}
            toggleDialogBoxOpen={this.toggleDialogBoxOpen}
            userUUID={this.props.userUUID}
          />
        </div>
        <InvoicesTableContainer />
      </div>
    );
  }
}

export default withStyles(styles)(Invoices);
