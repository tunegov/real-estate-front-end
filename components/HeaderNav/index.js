import React from 'react';
import { observer } from 'mobx-react';
import Link from 'next/link';
import NProgress from 'nprogress';
import Router from 'next/router';
import {
  HeaderWrapper,
  HeaderLink,
  HeaderLinkWrapper,
  Logo,
} from './styledComponents';

NProgress.configure({ showSpinner: false });
NProgress.configure({ trickleSpeed: 100 });
NProgress.configure({ parent: '#header-wrapper' });

Router.onRouteChangeStart = url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

@observer
class HeaderNav extends React.Component {
  renderLinks = () => {
    if (this.props.isLoggedIn) {
      return (
        <HeaderLinkWrapper>
          <Link href="/app/dashboard" prefetch>
            <HeaderLink>Dashboard</HeaderLink>
          </Link>
          <HeaderLink onClick={this.props.onLogout}>Log Out</HeaderLink>
        </HeaderLinkWrapper>
      );
    }

    switch (this.props.currentPath) {
      case '/sign-up':
        return (
          <HeaderLinkWrapper>
            <Link href="/log-in" prefetch>
              <HeaderLink>Log In</HeaderLink>
            </Link>
          </HeaderLinkWrapper>
        );
      case '/log-in':
        return (
          <HeaderLinkWrapper>
            <Link href="/sign-up" prefetch>
              <HeaderLink>Sign Up</HeaderLink>
            </Link>
          </HeaderLinkWrapper>
        );
      default:
        return (
          <HeaderLinkWrapper>
            <Link href="/sign-up" prefetch>
              <HeaderLink>Sign Up</HeaderLink>
            </Link>
            <Link href="/log-in" prefetch>
              <HeaderLink>Log In</HeaderLink>
            </Link>
          </HeaderLinkWrapper>
        );
    }
  };

  render() {
    return (
      <HeaderWrapper id="header-wrapper">
        <Logo>
          <Link href="/" prefetch>
            <HeaderLink>Real Estate App Logo</HeaderLink>
          </Link>
        </Logo>
        {this.renderLinks()}
      </HeaderWrapper>
    );
  }
}

export default HeaderNav;
