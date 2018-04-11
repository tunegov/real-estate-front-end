import React from 'react';
import { observer } from 'mobx-react';
import isBrowser from 'is-browser';
import { withStyles } from 'material-ui/styles';
import Layout from '../../components/Layout';
import { initStore } from '../../models';
import withData from '../../lib/withData';
import { Router, Link } from '../../routes';
import MainBtnAnchor from '../../sharedStyledComponents/MainBtnAnchor';

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
      <Layout UserStore={this.store.UserStore}>
        <Link route="submit-a-deal">
          <MainBtnAnchor>Submit A Deal</MainBtnAnchor>
        </Link>
        <h1>We are at the deals page now!</h1>
      </Layout>
    );
  }
}

export default withData(Deals);
