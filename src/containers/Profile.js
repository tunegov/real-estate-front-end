import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Profile from '../components/Profile';
import faker from 'faker';
import ProfilePicDialogBox from '../components/EditProfilePicDialogBox';

@observer
class ProfileContainer extends Component {
  constructor(props) {
    super(props);

    const { agent } = this.props;

    this.state = {
      user: agent,
      isEditing: false,
      tempUser: agent,
      previousSavedUser: agent,
      profilePicEditorDialogBoxOpen: false,
      submittingEditProfilePicForm: false,
      editProfilePicFormSubmitted: false,
    };
  }

  enterEditingMode = () => {
    this.setState({
      isEditing: true,
    });
  };

  cancelEditingMode = () => {
    this.setState({
      isEditing: false,
      tempUser: {
        ...this.state.user,
      },
    });
  };

  setDescription = profileDescription => {
    this.setState({
      tempUser: {
        ...this.state.tempUser,
        agent: {
          ...this.state.tempUser.agent,
          profileDescription,
        },
      },
    });
  };

  setMobileNumber = ({ target: { value } }) => {
    this.setState({
      tempUser: {
        ...this.state.tempUser,
        agent: {
          ...this.state.tempUser.agent,
          mobileNumber: value,
        },
      },
    });
  };

  saveUser = () => {
    const phoneNumberIsValid =
      this.state.tempUser.agent.mobileNumber.length === 14;
    this.setState({
      isEditing: false,
      user: {
        ...this.state.tempUser,
        agent: {
          ...this.state.tempUser.agent,
          mobileNumber: phoneNumberIsValid
            ? this.state.tempUser.agent.mobileNumber
            : this.state.user.agent.mobileNumber,
        },
      },
      previousSavedUser: {
        ...this.state.user,
      },
    });
  };

  undoSave = () => {
    this.setState({
      user: {
        ...this.state.previousSavedUser,
      },
      tempUser: {
        ...this.state.previousSavedUser,
      },
    });
  };

  openProfilePicEditor = () => {
    this.setState({
      profilePicEditorDialogBoxOpen: true,
    });
  };

  closeProfilePicEditor = () => {
    this.setState({
      profilePicEditorDialogBoxOpen: false,
      editProfilePicFormSubmitted: false,
    });
  };

  confirmProfilePicSubmitted = () => {
    this.setState({
      profilePicEditorDialogBoxOpen: false,
    });
  };

  setFinishedSubmittingForm = url => {
    this.setState({
      profilePicEditorDialogBoxOpen: false,
      submittingEditProfilePicForm: false,
      editProfilePicFormSubmitted: false,
    });
    const picEl = document.getElementById('agentProfilePic');

    if (picEl) {
      picEl.src = `${url}?cache=${faker.random.uuid()}`;
    }
  };

  toggleSubmittingEditProfilePicForm = bool => {
    this.setState({
      submittingEditProfilePicForm:
        typeof bool === 'boolean'
          ? bool
          : !this.state.submittingEditProfilePicForm,
    });
  };

  setFormSubmitted = () => {
    this.setState({
      editProfilePicFormSubmitted: true,
    });
  };

  render() {
    const {
      isEditing,
      profileEdited,
      profilePicEditorDialogBoxOpen,
      submittingEditProfilePicForm,
      editProfilePicFormSubmitted,
    } = this.state;
    const {
      toggleEditingMode,
      toggleProfileEdited,
      setMobileNumber,
      setDescription,
      enterEditingMode,
      cancelEditingMode,
      saveUser,
      openProfilePicEditor,
      closeProfilePicEditor,
      undoSave,
    } = this;
    return (
      <div>
        <Profile
          agent={this.state.user}
          isEditing={isEditing}
          enterEditingMode={enterEditingMode}
          cancelEditingMode={cancelEditingMode}
          profileEdited={profileEdited}
          toggleProfileEdited={toggleProfileEdited}
          setMobileNumber={setMobileNumber}
          setDescription={setDescription}
          saveUser={saveUser}
          undoSave={undoSave}
          openProfilePicEditor={openProfilePicEditor}
          currentUserRole={this.props.currentUserRole}
          currentUserUUID={this.props.currentUserUUID}
          uuid={this.props.uuid}
        />

        <ProfilePicDialogBox
          submitProfilePicEditForm={this.submitProfilePicEditForm}
          closeProfilePicEditor={closeProfilePicEditor}
          open={profilePicEditorDialogBoxOpen}
          confirmProfilePicSubmitted={this.confirmProfilePicSubmitted}
          setFinishedSubmittingForm={this.setFinishedSubmittingForm}
          submittingEditProfilePicForm={submittingEditProfilePicForm}
          editProfilePicFormSubmitted={editProfilePicFormSubmitted}
          setFormSubmitted={this.setFormSubmitted}
          toggleSubmittingEditProfilePicForm={
            this.toggleSubmittingEditProfilePicForm
          }
          uuid={this.props.uuid}
        />
      </div>
    );
  }
}

export default ProfileContainer;
