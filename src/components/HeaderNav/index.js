import React from 'react';
import { observer } from 'mobx-react';
import {
  HeaderLink as LogoAnchor,
  HeaderWrapper,
  HeaderLinkWrapper,
  Logo,
} from './styledComponents';
import { Link } from '../../routes';
import HeaderNavLink from '../HeaderNavLink';
import { HeaderLink as NavAnchor } from '../HeaderNavLink/styledComponents';

@observer
class HeaderNav extends React.Component {
  renderLinks = () => {
    if (this.props.isLoggedIn) {
      return (
        <HeaderLinkWrapper>
          <HeaderNavLink route="dashboard" prefetch>
            <NavAnchor>Dashboard</NavAnchor>
          </HeaderNavLink>
          <NavAnchor onClick={this.props.onLogout}>Log Out</NavAnchor>
        </HeaderLinkWrapper>
      );
    }

    return (
      <HeaderLinkWrapper>
        <HeaderNavLink route="sign-up" href="/sign-up" prefetch>
          <NavAnchor>Sign Up</NavAnchor>
        </HeaderNavLink>
        <HeaderNavLink route="log-in" href="/log-in" prefetch>
          <NavAnchor>Log In</NavAnchor>
        </HeaderNavLink>
      </HeaderLinkWrapper>
    );
  };

  render() {
    return (
      <HeaderWrapper id="header-wrapper" isApp={this.props.isApp}>
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
