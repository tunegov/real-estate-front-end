import React from 'react';
import { observer } from 'mobx-react';
import isBrowser from 'is-browser';
import Layout from '../../components/Layout';
import { initStore } from '../../models';
import withData from '../../lib/withData';
import { Router } from '../../routes';
import ProfileContainer from '../../containers/Profile';

@observer
class Profile extends React.Component {
  static getInitialProps({ req, query }) {
    const isServer = !!req;
    return {
      cookieJWTData: req && req.cookies ? req.cookies.jwtData : null,
      isServer,
      profileID: query.id,
    };
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
    const { profileID } = this.props;
    return (
      <Layout UserStore={this.store.UserStore} UIStore={this.store.UIStore}>
        <ProfileContainer UUID={profileID || this.store.UserStore.uuid} />
      </Layout>
    );
  }
}

export default withData(Profile);
