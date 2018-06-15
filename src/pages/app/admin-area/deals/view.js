import React from 'react';
import { observer } from 'mobx-react';
import isBrowser from 'is-browser';
import 'react-dates/initialize';
import Layout from '../../../../components/Layout';
import { initStore } from '../../../../models';
import withData from '../../../../lib/withData';
import { Router } from '../../../../routes';
import AdminAreaDealsContainer from '../../../../containers/AdminAreaDealsContainer';

@observer
class Deals extends React.Component {
  static getInitialProps({ req }) {
    const isServer = !!req;
    return { cookieJWTData: req && req.cookies ? req.cookies.jwtData : null, isServer };
  }

  constructor(props) {
    super(props);
    this.store = initStore(props.isServer, props.cookieJWTData);

    if (isBrowser && !this.store.UserStore.isLoggedIn) {
      Router.pushRoute('home');
    }

    // for debugging only!!!
    if (isBrowser && !window._appStore) window._appStore = this.store;
  }

  render() {
    return (
      <Layout UserStore={this.store.UserStore} UIStore={this.store.UIStore}>
        <AdminAreaDealsContainer userUUID={this.store.UserStore.uuid} />
      </Layout>
    );
  }
}

export default withData(Deals);