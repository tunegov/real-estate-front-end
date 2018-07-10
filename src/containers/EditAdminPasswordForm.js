import React, { Component } from 'react';
import { observer } from 'mobx-react';
import EditAdminPasswordForm from '../components/forms/EditAgentPasswordForm';
import editAdminPassword from '../effects/users/editAdminPassword';

@observer
class EditAdminPasswordFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitedSuccessfully: false,
    };
  }

  onSubmit = (values, e, formApi) => {
    this.props.setFormSubmitted();

    console.log(values);

    const returnValues = {
      uuid: this.props.viewingAdminUUID,
      newPassword: values.password,
    };

    console.log(returnValues);

    editAdminPassword(returnValues)
      .then(res => {
        if (res.error) {
          console.log(res.error);
          this.props.setFormSubmitted(false);
          return;
        }

        this.props.setFormSubmitted(false);
        this.props.formSubmittedSuccessfully();
      })
      .catch(err => {
        this.props.setFormSubmitted(false);
        console.log(err);
      });
  };

  onSubmitFailure = (errs, onSubmitError) => {
    console.log(errs);
    console.log(onSubmitError);
    this.props.setFormSubmitted(false);
  };

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div style={{ width: '100%' }}>
        <EditAdminPasswordForm
          onSubmit={this.onSubmit}
          onSubmitFailure={this.onSubmitFailure}
          formSubmitedSuccessfully={this.state.formSubmitedSuccessfully}
          getFormApi={this.props.getFormApi}
          {...rest}
        />
      </div>
    );
  }
}

export default EditAdminPasswordFormContainer;
