import React, { Component } from 'react';
import { observer } from 'mobx-react';
// import DevTools from 'mobx-react-devtools';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router, { withRouter } from 'next/router';
import isBrowser from 'is-browser';
import { ThemeProvider } from 'styled-components';
import HeaderNav from '../../containers/Header';
import SideNav from '../../containers/SideNav';
import AppContentWrapper from '../../sharedStyledComponents/AppContentWrapper';
import themeStyles from '../../themeStyles';
import globalStyles from '../../globalStyles';
import { Container, HeaderAndAppContentWrapper } from './styledComponents';

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
  renderNav(willRenderSideNav) {
    const { isLoggedIn, logoutUser } = this.props.UserStore;

    return willRenderSideNav ? <SideNav /> : <HeaderNav isLoggedIn={isLoggedIn} logoutUser={logoutUser} />;
  }

  render() {
    const { pathname } = this.props.router;
    const { isLoggedIn, logoutUser } = this.props.UserStore;
    const isApp = pathname.startsWith('/app');

    return (
      <div>
        <Head>
          <title>{this.props.title ? this.props.title : 'Real Estate App'}</title>
          {/* Import CSS for nprogress */}
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        </Head>
        {/* <DevTools position={{ top: 0, left: 30 }} /> */}
        <ThemeProvider theme={themeStyles}>
          <Container isApp={isApp}>
            {isApp ? <SideNav /> : null}
            <HeaderAndAppContentWrapper>
              <HeaderNav isLoggedIn={isLoggedIn} logoutUser={logoutUser} isApp={isApp} />
              <AppContentWrapper isApp={isApp}>
                {this.props.children}
              </AppContentWrapper>
            </HeaderAndAppContentWrapper>
          </Container>
        </ThemeProvider>
        <style jsx global>{`
          body { 
            ${this.props.backgroundColor ? 'background-color: ' + this.props.backgroundColor + ';' : null}
            ${this.props.backgroundImage ? 'background-image: ' + this.props.backgroundImage + ';' : null}
          }
        `}</style>
        <style jsx global>{globalStyles}</style>
      </div>
    );
  }
}

export default withRouter(Layout);
