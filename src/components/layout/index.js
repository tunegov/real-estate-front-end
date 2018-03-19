import React, { Component } from 'react';
import { observer } from 'mobx-react';
// import DevTools from 'mobx-react-devtools';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Header from '../../containers/Header';
import AppContentWrapper from '../../sharedStyledComponents/AppContentWrapper';
import themeStyles from '../../themeStyles';
import globalStyles from '../../globalStyles';

@observer
class Layout extends Component {
  render() {
    const { isLoggedIn, logoutUser } = this.props.UserStore;

    return (
      <div>
        <Head>
          <title>{this.props.title ? this.props.title : 'Real Estate App'}</title>
          {/* Import CSS for nprogress */}
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
          <style>{globalStyles}</style>
        </Head>
        {/* <DevTools position={{ top: 0, left: 30 }} /> */}
        <ThemeProvider theme={themeStyles}>
          <div>
            <Header currentPath={this.props.currentPath} isLoggedIn={isLoggedIn} logoutUser={logoutUser} />
            <AppContentWrapper>
              {this.props.children}
            </AppContentWrapper>
          </div>
        </ThemeProvider>
        <style jsx global>{`
          body { 
            ${this.props.backgroundColor ? 'background-color: ' + this.props.backgroundColor + ';' : null}
            ${this.props.backgroundImage ? 'background-image: ' + this.props.backgroundImage + ';' : null}
          }
        `}</style>
      </div>
    );
  }
}

export default Layout;
