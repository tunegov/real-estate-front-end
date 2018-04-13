import React from 'react';
import { observer } from 'mobx-react';
import isBrowser from 'is-browser';
import Layout from '../../components/Layout';
import { initStore } from '../../models';
import withData from '../../lib/withData';
import { Router } from '../../routes';
import DealsContainer from '../../containers/Deals';

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

    this.state = {
      submitDealDialogOpen: false,
    };
  }

  toggleDialogBoxOpen = () => {
    this.setState({ ...this.state, submitDealDialogOpen: !this.state.submitDealDialogOpen });
  };

  render() {
    const { submitDealDialogOpen } = this.state;

    return (
      <Layout UserStore={this.store.UserStore}>
        <DealsContainer submitDealDialogOpen={submitDealDialogOpen} toggleDialogBoxOpen={this.toggleDialogBoxOpen} userUUID={this.store.UserStore.uuid} />
      </Layout>
    );
  }
}

export default withData(Deals);
