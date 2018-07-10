import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import { observer } from 'mobx-react';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { DotLoader } from 'react-spinners';
import SubmitInvoiceDialogBox from '../components/SubmitInvoiceDialogBox';
import InvoicesTableContainer from './InvoicesTable';
import ViewInvoiceDialogBox from '../components/ViewInvoiceDialogBox';
import deleteInvoice from '../effects/invoices/deleteInvoice';

const Loader = DotLoader;

const invoicesQuery = gql`
  query invoicesByAgentID($uuid: String!) {
    invoicesByAgentID(uuid: $uuid) {
      invoiceID
      date
      invoiceType
      clientName
      clientPhoneNumber
      propertyAddress
      city
      state
      managementOrCobrokeCompany
      price
      total
      status
    }
  }
`;

const styles = theme => ({
  submitInvoiceBtn: {},
  wrapper: {
    position: 'relative',
  },
  buttonsWrapper: {
    display: 'flex',
    marginBottom: '25px',
    justifyContent: 'center',
  },
  snackBar: {
    marginTop: 30,
  },
});

@observer
class Invoices extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitInvoiceDialogOpen: false,
      snackbarOpen: false,
      snackbarText: '',
      snackbarUndoFunction: null,
      addedInvoices: [],
      invoicesViewDialogBoxOpen: false,
      viewingInvoiceID: '',
      viewingInvoiceStatus: '',
      deletedInvoiceIDS: [],
      userUUID: this.props.userUUID,
    };
  }

  toggleDialogBoxOpen = () => {
    this.setState({
      submitInvoiceDialogOpen: !this.state.submitInvoiceDialogOpen,
    });
  };

  setInvoiceSuccessfullySubmitted = invoice => {
    this.setState({
      submitInvoiceDialogOpen: false,
      snackbarOpen: true,
      snackbarText: 'Invoice submitted successfully',
      addedInvoices: [...this.state.addedInvoices, invoice],
    });
  };

  setInvoiceSuccessfullyEditted = newInvoice => {
    const addedInvoices = this.state.addedInvoices.filter(
      invoice => invoice.invoiceID !== newInvoice.invoiceID
    );
    this.setState({
      invoicesViewDialogBoxOpen: false,
      snackbarOpen: true,
      snackbarText: 'Invoice updated successfully',
      addedInvoices: [...addedInvoices, newInvoice],
    });
  };

  handleCloseSnackbar = invoice => {
    this.setState({
      snackbarOpen: false,
      snackbarUndoFunction: null,
    });
  };

  openInvoicesViewDialogBox = (invoiceID, status) => {
    this.setState({
      invoicesViewDialogBoxOpen: true,
      viewingInvoiceID: invoiceID,
      viewingInvoiceStatus: status,
    });
  };

  closeInvoicesViewDialogBox = () => {
    this.setState({
      invoicesViewDialogBoxOpen: false,
      viewingInvoiceID: '',
      viewingInvoiceStatus: '',
    });
  };

  deleteInvoice = invoiceID => {
    deleteInvoice(invoiceID)
      .then(res => {
        if (res.error) {
          console.log(res.error);
          return;
        } else if (res.userErrors.length) {
          res.userErrors.forEach(error => console.log(error));
          return;
        }

        this.setState({
          snackbarOpen: true,
          snackbarText: 'Invoice deleted successfully!',
          invoicesViewDialogBoxOpen: false,
          deletedInvoiceIDS: [...this.state.deletedInvoiceIDS, invoiceID],
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { classes, userUUID, userRole } = this.props;
    const {
      submitInvoiceDialogOpen,
      invoicesSummaryDialogBoxOpen,
      invoicesViewDialogBoxOpen,
      viewingInvoiceID,
      viewingInvoiceStatus,
    } = this.state;
    const {
      toggleAddInvoiceDialogBox,
      toggleInvoicesSummaryDialogBox,
      openInvoicesViewDialogBox,
      closeInvoicesViewDialogBox,
    } = this;

    return (
      <Query
        query={invoicesQuery}
        variables={{ uuid: userUUID || this.state.userUUID }}
        ssr={false}
      >
        {({ loading, error, data }) => {
          if (loading)
            return (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 'calc(100vh - 110px)',
                  boxShadow:
                    '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
                }}
              >
                <Loader color="#f44336" loading />
              </div>
            );
          // TODO: change the error message to a generic
          // 'error connecting to server' message
          if (error) return `Error!: ${error}`;

          const intInvoices = {};

          if (error) return `Error!: ${error}`;

          const allInvoices = [
            ...data.invoicesByAgentID,
            ...this.state.addedInvoices,
          ];

          allInvoices.forEach(invoice => {
            intInvoices[invoice.invoiceID] = invoice;
          });

          let uniqueInvoices = [];

          Object.keys(intInvoices).forEach(key => {
            uniqueInvoices.push(intInvoices[key]);
          });

          uniqueInvoices = uniqueInvoices.filter(
            invoice => !this.state.deletedInvoiceIDS.includes(invoice.invoiceID)
          );

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
                  toggleSnackbarOpen={this.toggleSnackbarOpen}
                  setInvoiceSuccessfullySubmitted={
                    this.setInvoiceSuccessfullySubmitted
                  }
                  userRole={userRole}
                />
              </div>

              <ViewInvoiceDialogBox
                invoicesViewDialogBoxOpen={invoicesViewDialogBoxOpen}
                closeInvoicesViewDialogBox={closeInvoicesViewDialogBox}
                userUUID={userUUID}
                viewingInvoiceID={viewingInvoiceID}
                viewingInvoiceStatus={viewingInvoiceStatus}
                toggleSnackbarOpen={this.toggleSnackbarOpen}
                setInvoiceSuccessfullySubmitted={
                  this.setInvoiceSuccessfullyEditted
                }
                userRole={this.props.userRole}
                deleteInvoice={this.deleteInvoice}
              />

              <InvoicesTableContainer
                invoices={uniqueInvoices}
                openInvoicesViewDialogBox={openInvoicesViewDialogBox}
              />

              <Snackbar
                classes={{ root: classes.snackBar }}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                open={this.state.snackbarOpen}
                autoHideDuration={4000}
                onClose={this.handleCloseSnackbar}
                message={
                  <span id="snackbar-id">{this.state.snackbarText}</span>
                }
                action={[
                  this.snackbarUndoFunction ? (
                    <Button
                      key="undo"
                      color="secondary"
                      size="small"
                      onClick={() => {
                        this.handleCloseSnackbar();
                        if (
                          this.state.snackbarUndoFunction &&
                          typeof snackbarUndoFunction === 'function'
                        ) {
                          this.snackbarUndoFunction();
                        }
                      }}
                    >
                      UNDO
                    </Button>
                  ) : (
                    undefined
                  ),
                  <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    className={classes.close}
                    onClick={this.handleCloseSnackbar}
                  >
                    <CloseIcon />
                  </IconButton>,
                ]}
              />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default withStyles(styles)(Invoices);
