import React from 'react';
import { observer } from 'mobx-react';
import isBrowser from 'is-browser';
import Layout from '../../components/layout';
import { initStore } from '../../models';
import withData from '../../lib/withData';

@observer
class Dashboard extends React.Component {
  static getInitialProps({ req }) {
    const isServer = !!req;
    return { cookieJWTData: req && req.cookies ? req.cookies.jwtData : null, isServer };
  }

  constructor(props) {
    super(props);
    this.store = initStore(props.isServer, props.cookieJWTData);

    // for debugging only!!!
    if (isBrowser && !window._appStore) window._appStore = this.store;
  }

  render() {
    return (
      <Layout UserStore={this.store.UserStore}>
        <div>
          <h1>We are at the dashboard now...</h1>
        </div>
      </Layout>
    );
  }
}

export default withData(Dashboard);
