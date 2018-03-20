import React from 'react';
import { observer } from 'mobx-react';
import NProgress from 'nprogress';
import Router from 'next/router';
import {
  HeaderLink as LogoAnchor,
  HeaderWrapper,
  HeaderLinkWrapper,
  Logo,
} from './styledComponents';
import { Link } from '../../routes';
import NavLink from '../NavLink';
import { HeaderLink as NavAnchor } from '../NavLink/styledComponents';

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
          <NavLink route="dashboard" prefetch>
            <NavAnchor>Dashboard</NavAnchor>
          </NavLink>
          <NavAnchor onClick={this.props.onLogout}>Log Out</NavAnchor>
        </HeaderLinkWrapper>
      );
    }

    return (
      <HeaderLinkWrapper>
        <NavLink route="sign-up" href="/sign-up" prefetch>
          <NavAnchor>Sign Up</NavAnchor>
        </NavLink>
        <NavLink route="log-in" href="/log-in" prefetch>
          <NavAnchor>Log In</NavAnchor>
        </NavLink>
      </HeaderLinkWrapper>
    );
  };

  render() {
    return (
      <HeaderWrapper id="header-wrapper">
        <Logo>
          <Link route="home" prefetch>
            <LogoAnchor>Real Estate App Logo</LogoAnchor>
          </Link>
        </Logo>
        {this.renderLinks()}
      </HeaderWrapper>
    );
  }
}

export default HeaderNav;
