import React from 'react';
import { observer } from 'mobx-react';
import isBrowser from 'is-browser';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { fadesUp } from '../components/TransitionHOC';
import { initStore } from '../models';
import Layout from '../components/layout';
import { Router } from '../routes';
import SignUpLoginForm from '../containers/SignUpLoginForm';
import SignUpForm from '../components/forms/SignUpForm';

// use higher-order-component for mount animation
const Form = fadesUp(SignUpForm);

@observer
class SignUp extends React.Component {
  static getInitialProps({ req }) {
    const isServer = !!req;
    return { cookies: req ? req.cookies : null, isServer };
  }

  constructor(props) {
    super(props);
    this.store = initStore(props.isServer, props.cookies);

    if (this.store.UserStore.isLoggedIn) {
      Router.pushRoute('home');
    }

    // for debugging only!!!
    if (isBrowser && !window._appStore) window._appStore = this.store;
  }

  render() {
    return (
      <Layout UserStore={this.store.UserStore}>
        <TransitionGroup>
          <Form loginUser={this.store.UserStore.loginUser}>
            <SignUpForm />
          </Form>
        </TransitionGroup>
      </Layout>
    );
  }
}

export default SignUp;
