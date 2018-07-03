import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog,
} from 'material-ui/Dialog';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Menu from 'material-ui/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ViewInvoiceForm from '../../containers/ViewInvoiceForm';
import { agent, admin, superAdmin } from '../../constants/userTypes';

const styles = theme => ({
  paper: {
    width: '800px',
    maxWidth: '800px',
  },
  dialogActions: {
    margin: '8px 0',
  },
  formTitle: {
    padding: 'theme.spacing.unit theme.spacing.unit * 3',
    textAlign: 'center',
  },
  formSubheader: {
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 6,
    marginTop: theme.spacing.unit * 2,
    textAlign: 'center',
  },
  dialogContent: {
    paddingTop: '32px',
  },
  snackBar: {
    marginBottom: '60px',
    '@media (max-height: 500px)': {
      marginBottom: '50px',
    },
    '@media (max-height: 390px)': {
      marginBottom: '30px',
    },
  },
  editInvoiceBtn: {
    color: theme.custom.submitBlue.main,
    '&:hover': {
      backgroundColor: theme.custom.submitBlue.transparentLightBackground,
    },
  },
  popupMenuTitle: {
    outline: 'none',
    padding: '12px 16px',
    width: 'auto',
    color: 'rgba(0, 0, 0, 0.87)',
    height: '24px',
    overflow: 'hidden',
    fontSize: '1rem',
    boxSizing: 'content-box',
    fontWeight: '400',
    lineHeight: '1.5em',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    whiteSpace: 'nowrap',
    paddingLeft: '16px',
    textOverflow: 'ellipsis',
    paddingRight: '16px',
    borderBottom: '1px solid rgba(0,0,0,.1)',
    pointerEvents: 'none',
  },
  menuItem: {
    display: 'flex !important',
    justifyContent: 'center !important',
  },
  menuItemDelete: {
    display: 'flex !important',
    justifyContent: 'center !important',
    transition:
      'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important',
    '&:hover': {
      backgroundColor: `${theme.palette.secondary.light} !important`,
      color: '#fff !important',
    },
  },
  menuItemAccept: {
    display: 'flex !important',
    justifyContent: 'center !important',
    transition:
      'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important',
    '&:hover': {
      backgroundColor: `${theme.custom.submitBlue.light} !important`,
      color: '#fff !important',
    },
  },
});

@observer
class SubmitInvoiceDialogBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formApi: null,
      formSubmitted: false,
      snackbarOpen: false,
      snackbarText: '',
      snackbarUndoFunction: null,
      isEditingInvoice: false,
      cancelAnchorEl: null,
      acceptAnchorEl: null,
    };
  }

  setFormSubmitted = (bool = true) => {
    this.setState({ formSubmitted: bool, isEditingInvoice: false });
  };

  toggleSnackbarOpen = text => {
    this.setState({
      snackbarOpen: true,
      snackbarText: text,
    });
  };

  handleCloseSnackbar = () => {
    this.setState({
      snackbarOpen: false,
      snackbarUndoFunction: null,
    });
  };

  toggleEditingInvoice = bool => {
    this.setState({
      isEditingInvoice:
        typeof bool === 'boolean' ? bool : !this.state.isEditingInvoice,
    });
  };

  handleCancelMenuClick = event => {
    this.setState({ cancelAnchorEl: event.currentTarget });
  };

  handleCancelMenuClose = () => {
    this.setState({ cancelAnchorEl: null });
  };

  handleAcceptMenuClick = event => {
    this.setState({ acceptAnchorEl: event.currentTarget });
  };

  handleAcceptMenuClose = () => {
    this.setState({ acceptAnchorEl: null });
  };

  render() {
    const {
      fullScreen,
      classes,
      closeInvoicesViewDialogBox,
      invoicesViewDialogBoxOpen,
      setInvoiceSuccessfullySubmitted,
      viewingInvoiceID,
      viewingInvoiceStatus,
      deleteInvoice,
      acceptInvoice,
    } = this.props;

    const { isEditingInvoice, cancelAnchorEl, acceptAnchorEl } = this.state;

    return (
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={invoicesViewDialogBoxOpen}
        classes={{ paper: classes.paper }}
        fullScreen={fullScreen}
      >
        <DialogTitle
          id="form-dialog-title"
          classes={{ root: classes.formTitle }}
        >
          View Invoice
        </DialogTitle>
        <Divider />
        <DialogContent classes={{ root: classes.dialogContent }}>
          <ViewInvoiceForm
            getFormApi={formApi => this.setState({ formApi })}
            setFormSubmitted={this.setFormSubmitted}
            setInvoiceSuccessfullySubmitted={setInvoiceSuccessfullySubmitted}
            invoiceID={viewingInvoiceID}
            isEditingInvoice={isEditingInvoice}
            isViewType
          />
          <Snackbar
            classes={{ root: classes.snackBar }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={this.state.snackbarOpen}
            autoHideDuration={4000}
            onClose={this.handleCloseSnackbar}
            message={<span id="snackbar-id">{this.state.snackbarText}</span>}
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
        </DialogContent>
        {!this.state.formSubmitted ? (
          <DialogActions classes={{ root: classes.dialogActions }}>
            <Button
              disabled={this.state.formSubmitted}
              onClick={() => {
                this.toggleEditingInvoice(false);
                closeInvoicesViewDialogBox();
              }}
              color="primary"
            >
              Cancel
            </Button>
            {(this.props.userRole === agent &&
              viewingInvoiceStatus === 'pending') ||
            this.props.userRole === superAdmin ||
            this.props.userRole === admin ? (
              <Button
                disabled={this.state.formSubmitted}
                onClick={this.handleCancelMenuClick}
                color="secondary"
              >
                Delete
              </Button>
            ) : null}
            <Menu
              id="simple-menu"
              anchorEl={cancelAnchorEl}
              open={Boolean(cancelAnchorEl)}
              onClose={this.handleCancelMenuClose}
            >
              <div className={classes.popupMenuTitle}>Are you sure?</div>

              <MenuItem
                classes={{ root: classes.menuItemDelete }}
                onClick={() => {
                  this.handleCancelMenuClose();
                  deleteInvoice(viewingInvoiceID);
                }}
              >
                Yes
              </MenuItem>
              <MenuItem
                classes={{ root: classes.menuItem }}
                onClick={this.handleCancelMenuClose}
              >
                No
              </MenuItem>
            </Menu>
            {!isEditingInvoice &&
            this.props.userRole === agent &&
            viewingInvoiceStatus === 'pending' ? (
              <Button
                className={classes.editInvoiceBtn}
                disabled={this.state.formSubmitted}
                onClick={() => this.toggleEditingInvoice(true)}
                color="primary"
              >
                Edit
              </Button>
            ) : null}
            {(this.props.userRole === admin ||
              this.props.userRole === superAdmin) &&
            viewingInvoiceStatus === 'pending' ? (
              <Button
                className={classes.editInvoiceBtn}
                disabled={this.state.formSubmitted}
                onClick={this.handleAcceptMenuClick}
                color="primary"
              >
                Accept Invoice
              </Button>
            ) : null}
            <Menu
              id="simple-menu"
              anchorEl={acceptAnchorEl}
              open={Boolean(acceptAnchorEl)}
              onClose={this.handleAcceptMenuClose}
            >
              <div className={classes.popupMenuTitle}>Are you sure?</div>
              <MenuItem
                classes={{ root: classes.menuItemAccept }}
                onClick={() => {
                  this.handleAcceptMenuClose();
                  acceptInvoice(viewingInvoiceID);
                }}
              >
                Yes
              </MenuItem>
              <MenuItem
                classes={{ root: classes.menuItem }}
                onClick={this.handleAcceptMenuClose}
              >
                No
              </MenuItem>
            </Menu>
            {isEditingInvoice ? (
              <Button
                disabled={this.state.formSubmitted}
                onClick={() => {
                  const errors = this.state.formApi.getError();
                  let errorCount;
                  console.log(this.state.formApi.getError());
                  if (errors) {
                    errorCount = Object.keys(this.state.formApi.getError())
                      .length;
                  }

                  if (errorCount) {
                    this.toggleSnackbarOpen(
                      `Please correct ${errorCount} form error${
                        errorCount > 1 ? 's' : ''
                      }`
                    );
                  }

                  this.state.formApi.submitForm();
                }}
                color="primary"
              >
                Submit
              </Button>
            ) : null}
          </DialogActions>
        ) : null}
      </Dialog>
    );
  }
}

export default withMobileDialog()(withStyles(styles)(SubmitInvoiceDialogBox));
