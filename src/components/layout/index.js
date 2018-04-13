import React, { Component } from 'react';
import { observer } from 'mobx-react';
// import DevTools from 'mobx-react-devtools';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router, { withRouter } from 'next/router';
import isBrowser from 'is-browser';
import { ThemeProvider } from 'styled-components';
import withRoot from '../../lib/withRoot';
import themeStyles from '../../themeStyles';
import globalStyles from '../../globalStyles';
import InnerAppLayout from '../InnerAppLayout';

NProgress.configure({ showSpinner: false });
NProgress.configure({ trickleSpeed: 100 });

if (isBrowser) {
  Router.onRouteChangeStart = () => {
    NProgress.start();
  };

  Router.onRouteChangeComplete = () => NProgress.done();
  Router.onRouteChangeError = () => NProgress.done();
}

@observer
class Layout extends Component {
  render() {
    const { pathname } = this.props.router;
    const { isLoggedIn, logoutUser: logout } = this.props.UserStore;
    const isApp = pathname.startsWith('/app');
    const logoutUser = () => {
      const { error } = logout();
      if (error) {
        // TODO: add user notification of an logout error
        console.log(error);
        return;
      }
      Router.pushRoute('home');
    };

    return (
      <div>
        <Head>
          <title>{this.props.title ? this.props.title : 'Real Estate App'}</title>
          {/* Import CSS for nprogress */}
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
          <link href="https://fonts.googleapis.com/css?family=Alegreya|Alegreya+Sans" rel="stylesheet" />

          {/* render material ui specific fonts on app pages */}
          {isApp ? <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" /> : null}
          {isApp ? <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> : null}

          <style dangerouslySetInnerHTML={{ __html: globalStyles }}></style>
        </Head>
        {/* <DevTools position={{ top: 0, left: 30 }} /> */}
        <ThemeProvider theme={themeStyles}>
          <InnerAppLayout logoutUser={logoutUser}>
            {this.props.children}
          </InnerAppLayout>
        </ThemeProvider>
      </div>
    );
  }
}

export default withRouter(withRoot(Layout));
