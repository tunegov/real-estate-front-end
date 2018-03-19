import React from 'react';
import { observer } from 'mobx-react';
import isBrowser from 'is-browser';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { fadesDown } from '../components/TransitionHOC';
import { initStore } from '../models';
import LoginForm from '../components/forms/LoginForm';
import Layout from '../components/layout';

const Form = fadesDown(LoginForm);

@observer
class LogIn extends React.Component {
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
      <Layout currentPath={this.props.url.pathname} UserStore={this.store.UserStore}>
        <TransitionGroup>
          <Form loginUser={this.store.UserStore.loginUser} />
        </TransitionGroup>
      </Layout>
    );
  }
}

export default LogIn;
