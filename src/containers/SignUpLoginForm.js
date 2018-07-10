import React, { Children } from 'react';
import { observer } from 'mobx-react';
import debounce from 'debounce';
import { Router } from '../routes';
import ServerErrorMessage from '../sharedStyledComponents/ServerErrorMessage';

@observer
class SignUpLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorsFromServer: '',
    };
    this.child = Children.only(props.children);
  }

  onSubmitFailure(errs, onSubmitError) {
    console.log(onSubmitError);
  }

  onSubmit = async (values, event) => {
    const formSubmitFuncName =
      this.props.formType === 'sign-up' ? 'signUpCustomer' : 'loginUser';
    let res;

    try {
      res = await this.props[formSubmitFuncName](values);
    } catch (err) {
      console.log(err);
    }

    if (res.error) {
      this.setState({
        ...this.state,
        errorsFromServer: res.error,
      });
      return;
    }

    if (this.state.errorsFromServer) {
      this.setState({
        ...this.state,
        errorsFromServer: '',
      });
    }

    Router.pushRoute('home');
  };

  renderServerErrorMessage = () => (
    <ServerErrorMessage>{`Error: ${
      this.state.errorsFromServer
    }`}</ServerErrorMessage>
  );

  render() {
    return (
      <div style={{ padding: '0 20px' }}>
        {this.state.errorsFromServer ? this.renderServerErrorMessage() : null}
        {React.cloneElement(this.child, {
          ...this.props,
          onSubmit: this.onSubmit,
          onSubmitFailure: this.onSubmitFailure,
        })}
      </div>
    );
  }
}

export default SignUpLoginForm;
