import React, { Component } from 'react';
import { observer } from 'mobx-react';
import EditAgentPasswordForm from '../components/forms/EditAgentPasswordForm';
import editAgentPassword from '../effects/users/editAgentPassword';

@observer
class EditAgentPasswordFormContainer extends Component {
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
      uuid: this.props.viewingAgentUUID,
      newPassword: values.password,
    };

    console.log(returnValues);

    editAgentPassword(returnValues)
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
        <EditAgentPasswordForm
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

export default EditAgentPasswordFormContainer;
