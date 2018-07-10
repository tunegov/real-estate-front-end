import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
  withMobileDialog,
} from 'material-ui/Dialog';
import { Icon } from 'antd';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import EditAdminPasswordForm from '../../containers/EditAdminPasswordForm';

const styles = theme => ({
  paper: {
    width: '600px',
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  saveDraftBtn: {
    marginRight: 'auto',
    color: theme.custom.submitBlue.main,
    '&:hover': {
      backgroundColor: theme.custom.submitBlue.transparentLightBackground,
    },
  },
});

@observer
class EditAdminPasswordDialogBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formApi: null,
      submittingForm: false,
      formSubmitted: false,
    };
  }

  setFormSubmitted = (bool = true) => {
    this.setState({
      formSubmitted: bool,
      submittingForm: !bool,
    });
  };

  render() {
    const {
      fullScreen,
      classes,
      closeEditAdminDialogBox,
      closeEditAdminPasswordDialogBox,
      open,
      submitProfilePicEditForm,
      finishedSubmittingForm,
      submittingEditAdminPasswordForm,
      editProfilePicFormSubmitted,
      setFormSubmitted,
      setFinishedSubmittingForm,
    } = this.props;

    return (
      <Dialog
        open={open}
        onClose={closeEditAdminPasswordDialogBox}
        classes={{ paper: classes.paper }}
        fullScreen={fullScreen}
      >
        <DialogTitle id="editPassword" classes={{ root: classes.formTitle }}>
          Change Password
        </DialogTitle>
        <Divider />
        <DialogContent
          classes={{ root: classes.dialogContent }}
          id="editPasswordFormDialog"
        >
          <EditAdminPasswordForm
            viewingAdminUUID={this.props.viewingAdminUUID}
            getFormApi={formApi => this.setState({ formApi })}
            setFormSubmitted={this.setFormSubmitted}
            formSubmittedSuccessfully={
              this.props.editPasswordFormSubmittedSuccessfully
            }
          />
        </DialogContent>
        {!submittingEditAdminPasswordForm ? (
          <DialogActions classes={{ root: classes.dialogActions }}>
            <Button onClick={closeEditAdminPasswordDialogBox} color="primary">
              Cancel
            </Button>
            {!editProfilePicFormSubmitted ? (
              <Button
                onClick={() => this.state.formApi.submitForm()}
                color="primary"
              >
                Submit{' '}
              </Button>
            ) : null}
          </DialogActions>
        ) : null}
      </Dialog>
    );
  }
}

export default withMobileDialog()(
  withStyles(styles)(EditAdminPasswordDialogBox)
);
