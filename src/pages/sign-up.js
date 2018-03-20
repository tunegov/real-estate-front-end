import React from 'react';
import { observer } from 'mobx-react';
import isBrowser from 'is-browser';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { fadesUp } from '../components/TransitionHOC';
import { initStore } from '../models';
import SignUpForm from '../components/forms/SignUpForm';
import Layout from '../components/layout';

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

    // for debugging only!!!
    if (isBrowser && !window._appStore) window._appStore = this.store;
  }

  render() {
    return (
      <Layout UserStore={this.store.UserStore}>
        <TransitionGroup>
          <Form signUpUser={this.store.UserStore.signUpUser} />
        </TransitionGroup>
      </Layout>
    );
  }
}

export default SignUp;
