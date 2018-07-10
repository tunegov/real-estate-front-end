import React, { Component } from 'react';
import { observer } from 'mobx-react';
import createAdmin from '../effects/users/createAdmin';
import CreateAdminForm from '../components/forms/CreateAdminForm';
import { capitalize } from '../utils/stringUtils';

@observer
class CreateAdminContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitedSuccessfully: false,
    };
  }

  onSubmit = (values, e, formApi) => {
    const returnValues = {
      ...values,
      firstName: capitalize(values.firstName),
      lastName: capitalize(values.lastName),
    };

    delete returnValues.profilePicture;

    this.props.setFormSubmitted();

    createAdmin(returnValues).then(result => {
      const { error, admin } = result;

      if (error) {
        if (error.field === 'email') {
          const formElement = document.getElementById('formDialog');
          formApi.setError(error.field, error.message);
          formElement.scrollTop = formElement.scrollHeight;
        }
        this.props.setFormSubmitted(false);
        return;
      }

      this.props.confirmAdminCreated(admin);
    });
  };

  onSubmitFailure(errs, onSubmitError) {
    console.log(errs);
    console.log(onSubmitError);
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div style={{ width: '100%' }}>
        <CreateAdminForm
          onSubmit={this.onSubmit}
          onSubmitFailure={this.onSubmitFailure}
          setImageFile={this.setImageFile}
          imageFile={this.state.imageFile}
          imageScale={this.state.imageScale}
          setImageScale={this.setImageScale}
          adjustedImageScale={this.state.adjustedImageScale}
          getFileUploadInput={this.getFileUploadInput}
          clearImageFile={this.clearImageFile}
          getProfilePicEditor={this.getProfilePicEditor}
          imageFileConfirmed={this.state.imageFileConfirmed}
          confirmImageFile={this.confirmImageFile}
          confirmedImageDataURL={this.state.confirmedImageDataURL}
          loadingSetImg={this.state.loadingSetImg}
          setFinishedLoadingImg={this.setFinishedLoadingImg}
          uplodingImageProgress={this.state.uplodingImageProgress}
          formSubmitedSuccessfully={this.state.formSubmitedSuccessfully}
          isUploadingImage={this.state.isUploadingImage}
          getFormApi={formApi => {
            console.log(formApi);
            this._formApi = formApi;
          }}
          {...rest}
        />
      </div>
    );
  }
}

export default CreateAdminContainer;
