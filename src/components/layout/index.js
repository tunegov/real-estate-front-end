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
    const { logoutUser: logout, userRoles } = this.props.UserStore;
    const { isAdminMode, toggleAdminMode } = this.props.UIStore;
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
      <div style={{ top: 0, bottom: 0, left: 0, right: 0 }}>
        <Head>
          <title>{this.props.title ? this.props.title : 'Real Estate App'}</title>
          {/* Import CSS for nprogress */}
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
          <link href="https://fonts.googleapis.com/css?family=Alegreya|Alegreya+Sans" rel="stylesheet" />

          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

          <style dangerouslySetInnerHTML={{ __html: globalStyles }}></style>
        </Head>
        {/* <DevTools position={{ top: 0, left: 30 }} /> */}
        <ThemeProvider theme={themeStyles}>
          <InnerAppLayout
            logoutUser={logoutUser}
            userRoles={userRoles}
            isAdminMode={isAdminMode}
            toggleAdminMode={toggleAdminMode}
          >
            {this.props.children}
          </InnerAppLayout>
        </ThemeProvider>
      </div>
    );
  }
}

export default withRouter(withRoot(Layout));
