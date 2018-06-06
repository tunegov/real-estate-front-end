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
  submitInvoiceBtn: {

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
        <div>
          <div className={classes.buttonsWrapper}>
            <Button
              variant="raised"
              color="secondary"
              aria-label="add"
              onClick={this.toggleDialogBoxOpen}
              classes={{ root: classes.submitInvoiceBtn }}
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
