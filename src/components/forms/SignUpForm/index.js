import React from 'react';
import { observer } from 'mobx-react';
import { Form, FormField } from 'react-form';
import * as emailValidator from 'email-validator';
import CustomTextFieldWrapper from '../../CustomTextFieldWrapper';
import FormWrapper from '../../../sharedStyledComponents/FormWrapper';
import PrimaryButton from '../../../sharedStyledComponents/PrimaryButton';
import LoginSignUpFormTitle from '../../../sharedStyledComponents/LoginSignUpFormTitle';
import ServerErrorMessage from '../../../sharedStyledComponents/ServerErrorMessage';

const CustomTextField = FormField(CustomTextFieldWrapper);

@observer
class SignUpForm extends React.Component {
  preValidate = (values, formApi) => {
    Object.keys(values).forEach(property => {
      const val = values[property];
      if (typeof val === 'string' && property !== 'password') {
        values[property] = val.trim();
      }
    });
    return values;
  };

  errorValidator = values => ({
    fullName:
      !values.fullName ||
        values.fullName.length < 3 ||
        values.fullName.length > 30
        ? 'Between 3 and 30 characters'
        : null,
    email:
      !values.email ||
        !emailValidator.validate(values.email) ||
        values.email.length > 40
        ? 'Please provide a valid email address that is less than 40 characters'
        : null,
    password:
      !values.password ||
        values.password.length < 6 ||
        values.password.length > 20
        ? 'Your password must be between 6 and 20 characters long'
        : null,
    passwordConfirmation:
      !values.password ||
        values.password.length < 6 ||
        values.password.length > 20 ||
        values.password !== values.passwordConfirmation
        ? 'Your passwords do not match or are not valid'
        : null,
  });

  renderServerErrorMessage = () => (
    <ServerErrorMessage>{`Error: ${
      this.state.errorsFromServer
      }`}</ServerErrorMessage>
  );

  render() {
    return (
      <FormWrapper>
        <LoginSignUpFormTitle>Sign Up</LoginSignUpFormTitle>
        <Form
          dontValidateOnMount
          preValidate={this.preValidate}
          onSubmit={this.props.onSubmit}
          onSubmitFailure={this.props.onSubmitFailure}
          validateError={this.errorValidator}
        >
          {formApi => (
            <form onSubmit={formApi.submitForm} id="form1">
              <CustomTextField
                field="fullName"
                id="full-name"
                placeholder="Full Name"
              />
              <CustomTextField
                type="email"
                field="email"
                id="email"
                placeholder="Email"
              />
              <CustomTextField
                type="password"
                field="password"
                id="password"
                placeholder="Password"
              />
              <CustomTextField
                type="password"
                field="passwordConfirmation"
                id="passwordConfirmation"
                placeholder="Password Confirmation"
              />
              <PrimaryButton type="submit" width={100}>Submit</PrimaryButton>
            </form>
          )}
        </Form>
      </FormWrapper>

    );
  }
}

export default SignUpForm;
