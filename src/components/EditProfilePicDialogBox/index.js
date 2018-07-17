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
import EditProfilePicForm from '../../containers/EditProfilePicForm';
import { AppContext } from '../../AppGlobalStateProvider';

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
class CreateAgentDialogBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formApi: null,
      submittingForm: false,
    };
  }

  setFormSubmitted = (bool = true) => {
    this.setState({
      formSubmitted: bool,
    });
  };

  render() {
    const {
      fullScreen,
      classes,
      closeProfilePicEditor,
      open,
      submitProfilePicEditForm,
      finishedSubmittingForm,
      submittingEditProfilePicForm,
      toggleSubmittingEditProfilePicForm,
      editProfilePicFormSubmitted,
      setFormSubmitted,
      setFinishedSubmittingForm,
    } = this.props;

    return (
      <Dialog
        open={open}
        onClose={closeProfilePicEditor}
        classes={{ paper: classes.paper }}
        fullScreen={fullScreen}
      >
        <DialogTitle
          id="form-dialog-title"
          classes={{ root: classes.formTitle }}
        >
          Edit Profile Picture
        </DialogTitle>
        <Divider />
        <DialogContent
          classes={{ root: classes.dialogContent }}
          id="formDialog"
        >
          <AppContext.Consumer>
            {context => (
              <EditProfilePicForm
                userUUID={this.props.userUUID}
                setIsSubmittingForm={this.setIsSubmittingForm}
                finishedSubmittingForm={finishedSubmittingForm}
                getFormApi={formApi => this.setState({ formApi })}
                createAgent={context.UserStore.createAgent}
                setAgentProfilePic={context.UserStore.setAgentProfilePic}
                submitProfilePicEditForm={submitProfilePicEditForm}
                setFormSubmitted={setFormSubmitted}
                setFinishedSubmittingForm={setFinishedSubmittingForm}
                editProfilePicFormSubmitted={editProfilePicFormSubmitted}
                toggleSubmittingEditProfilePicForm={
                  toggleSubmittingEditProfilePicForm
                }
                uuid={this.props.uuid}
              />
            )}
          </AppContext.Consumer>
        </DialogContent>
        {!submittingEditProfilePicForm ? (
          <DialogActions classes={{ root: classes.dialogActions }}>
            <Button onClick={closeProfilePicEditor} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => this.state.formApi.submitForm()}
              color="primary"
            >
              Submit{' '}
            </Button>
          </DialogActions>
        ) : null}
      </Dialog>
    );
  }
}

export default withMobileDialog()(withStyles(styles)(CreateAgentDialogBox));
