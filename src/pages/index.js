import React from 'react';
import { observer } from 'mobx-react';
import isBrowser from 'is-browser';
import Layout from '../components/layout';
import { initStore } from '../models';

@observer
class Home extends React.Component {
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
      <Layout UserStore={this.store.UserStore} >
        <div>
          <h1>We are at home now...</h1>
        </div>
      </Layout>
    );
  }
}

export default Home;
