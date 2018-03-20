import React from 'react';
import { observer } from 'mobx-react';
import NProgress from 'nprogress';
import Router from 'next/router';
import {
  HeaderLink as NormalHeaderLink,
  HeaderWrapper,
  HeaderLinkWrapper,
  Logo,
} from './styledComponents';
import NavLink from '../NavLink';
import { HeaderLink } from '../NavLink/styledComponents';

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
          <NavLink href="/app/dashboard" prefetch>
            <HeaderLink>Dashboard</HeaderLink>
          </NavLink>
          <NavLink>
            <HeaderLink onClick={this.props.onLogout}>Log Out</HeaderLink>
          </NavLink>
        </HeaderLinkWrapper>
      );
    }

    return (
      <HeaderLinkWrapper>
        <NavLink href="/sign-up" prefetch>
          <HeaderLink>Sign Up</HeaderLink>
        </NavLink>
        <NavLink href="/log-in" prefetch>
          <HeaderLink>Log In</HeaderLink>
        </NavLink>
      </HeaderLinkWrapper>
    );
  };

  render() {
    return (
      <HeaderWrapper id="header-wrapper">
        <Logo>
          <NavLink href="/" prefetch>
            <NormalHeaderLink>Real Estate App Logo</NormalHeaderLink>
          </NavLink>
        </Logo>
        {this.renderLinks()}
      </HeaderWrapper>
    );
  }
}

export default HeaderNav;
