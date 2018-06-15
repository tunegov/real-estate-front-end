import React, { Component } from 'react';
import { observer } from 'mobx-react';
// import DevTools from 'mobx-react-devtools';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router, { withRouter } from 'next/router';
import isBrowser from 'is-browser';
import { ThemeProvider } from 'styled-components';
import withRoot from '../../lib/withRoot';
import HeaderNav from '../../frontEndContainers/Header';
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
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { pathname } = this.props.router;
    const { isLoggedIn, logoutUser } = this.props.UserStore;
    const isApp = pathname.startsWith('/app');

    return (
      <div>
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
            href="https://fonts.googleapis.com/css?family=Alegreya|Alegreya+Sans"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display|Raleway"
            rel="stylesheet"
          />
          <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
        </Head>
        {/* <DevTools position={{ top: 0, left: 30 }} /> */}
        <ThemeProvider theme={themeStyles}>
          <Container isApp={isApp}>
            <HeaderAndAppContentWrapper>
              <HeaderNav
                isLoggedIn={isLoggedIn}
                logoutUser={logoutUser}
                headerBoxShadowOff={this.props.headerBoxShadowOff}
              />
              <AppContentWrapper isApp={isApp}>
                {this.props.children}
              </AppContentWrapper>
            </HeaderAndAppContentWrapper>
          </Container>
        </ThemeProvider>
      </div>
    );
  }
}

export default withRouter(withRoot(Layout));
