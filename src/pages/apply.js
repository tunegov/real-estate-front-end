import React from 'react';
import { observer } from 'mobx-react';
import isBrowser from 'is-browser';
import { Elements, StripeProvider } from 'react-stripe-elements';
import Layout from '../frontEndComponents/FrontEndLayout';
import { initStore } from '../models';
import withData from '../lib/withData';
import ApplicationContainer from '../frontEndContainers/Application';

@observer
class Apply extends React.Component {
  static getInitialProps({ req, query }) {
    const isServer = !!req;
    return {
      cookieJWTData: req && req.cookies ? req.cookies.jwtData : null,
      isServer,
      listingID: query.listingID,
    };
  }

  constructor(props) {
    super(props);
    this.store = initStore(props.isServer, props.cookieJWTData);

    // for debugging only!!!
    if (isBrowser && !window._appStore) window._appStore = this.store;

    this.state = { stripe: null };
  }

  componentDidMount() {
    // Create Stripe instance in componentDidMount
    // (componentDidMount only fires in browser/DOM environment)

    if (window.Stripe) {
      this.setState({
        stripe: window.Stripe('pk_test_xCYvxzjkWdoHBCMKdJ3aYv4Y'),
      });
    } else {
      document.getElementById('stripe-js').addEventListener('load', () => {
        // Create Stripe instance once Stripe.js loads
        this.setState({
          stripe: window.Stripe('pk_test_xCYvxzjkWdoHBCMKdJ3aYv4Y'),
        });
      });
    }
  }

  render() {
    const { listingID } = this.props;

    return (
      <StripeProvider stripe={this.state.stripe}>
        <Layout UserStore={this.store.UserStore}>
          <Elements>
            <ApplicationContainer listingID={listingID} />
          </Elements>
        </Layout>
      </StripeProvider>
    );
  }
}

export default withData(Apply);
