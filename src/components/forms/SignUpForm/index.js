import React from 'react';
import debounce from 'debounce';
import Router from 'next/router';
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
  constructor(props) {
    super(props);
    this.state = {
      errorsFromServer: '',
    };
    this.onSubmit = debounce(this.onSubmit, 500, true);
  }

  onSubmit = async (values, event, formApi) => {
    let response;
    let error;
    try {
      const res = await this.props.signUpUser(values);
      response = res.response;
      error = res.error
    } catch (err) {
      console.log(err);
    }

    if (error) {
      this.setState({
        ...this.state,
        errorsFromServer: error,
      });
    } else {
      if (this.state.errorsFromServer) {
        this.setState({
          ...this.state,
          errorsFromServer: '',
        });
      }
      Router.push('/app/dashboard');
    }
  };

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
      <div style={{ padding: '0 20px' }}>
        {this.state.errorsFromServer ? this.renderServerErrorMessage() : null}
        <FormWrapper>
          <LoginSignUpFormTitle>Sign Up</LoginSignUpFormTitle>
          <Form
            dontValidateOnMount
            preValidate={this.preValidate}
            onSubmit={this.onSubmit}
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
      </div>
    );
  }
}

export default SignUpForm;
