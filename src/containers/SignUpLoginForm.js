import React, { Children } from 'react';
import { observer } from 'mobx-react';
import debounce from 'debounce';
import { Router } from '../routes';
import ServerErrorMessage from '../sharedStyledComponents/ServerErrorMessage';

@observer
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorsFromServer: '',
    };
    this.onSubmit = debounce(this.onSubmit, 500, true);
    this.child = Children.only(props.children);
  }

  onSubmitFailure(errs, onSubmitError) {
    console.log(onSubmitError);
  }

  onSubmit = async (values, event) => {
    const { email, password } = values;
    let res;

    try {
      res = await this.props.loginUser({ email, password });
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
        {React.cloneElement(this.child, { ...this.props, onSubmit: this.onSubmit, onSubmitFailure: this.onSubmitFailure })}
      </div>
    );
  }
}

export default LoginForm;
