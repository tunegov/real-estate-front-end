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
import FullScreenLoader from '../FullScreenLoader';
import { initStore } from '../../models';
import { admin, superAdmin } from '../../constants/userTypes';
import { AppProvider } from '../../AppGlobalStateProvider';

const store = initStore();
const { UIStore } = store;

NProgress.configure({ showSpinner: false });
NProgress.configure({ trickleSpeed: 100 });

if (isBrowser) {
  Router.onRouteChangeStart = () => {
    NProgress.start();
  };

  Router.onRouteChangeComplete = () => {
    if (UIStore.fullScreenLoaderOn) {
      UIStore.toggleFullScreenLoader(false);
    }
    NProgress.done();
  };
  Router.onRouteChangeError = () => NProgress.done();
}

@observer
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { UIStore, UserStore } = this.props;

    const { logoutUser: logout, userRole } = UserStore;
    const isAdmin = userRole === admin || userRole === superAdmin;
    const {
      fullScreenLoaderOn,
      fullScreenLoaderText,
      toggleFullScreenLoader,
    } = UIStore;
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
          <title>
            {this.props.title ? this.props.title : 'Real Estate App'}
          </title>
          {/* Import CSS for nprogress */}
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/vendor/nprogress.css"
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />

          <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
        </Head>
        {/* <DevTools position={{ top: 0, left: 30 }} /> */}
        <AppProvider UserStore={UserStore} UIStore={UIStore}>
          <ThemeProvider theme={themeStyles}>
            <InnerAppLayout
              logoutUser={logoutUser}
              userRole={userRole}
              toggleFullScreenLoader={toggleFullScreenLoader}
              isAdmin={isAdmin}
            >
              {this.props.children}
            </InnerAppLayout>
          </ThemeProvider>
          <FullScreenLoader
            open={fullScreenLoaderOn}
            text={fullScreenLoaderText}
          />
        </AppProvider>
      </div>
    );
  }
}

export default withRouter(withRoot(Layout));
