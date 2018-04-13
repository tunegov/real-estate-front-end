import React from 'react';
import { observer } from 'mobx-react';
import {
  HeaderLink as LogoAnchor,
  HeaderWrapper,
  LeftHeaderLinkWrapper,
  MiddleHeaderLinkWrapper,
  Logo,
} from '../../sharedStyledComponents/headerStyles';
import { Link } from '../../routes';
import HeaderNavLink from '../HeaderNavLink';
import { HeaderLink as NavAnchor } from '../HeaderNavLink/styledComponents';

@observer
class HeaderNav extends React.Component {
  renderLinks = () => {
    if (this.props.isLoggedIn) {
      return (
        <LeftHeaderLinkWrapper>
          <HeaderNavLink route="dashboard" prefetch>
            <NavAnchor>Dashboard</NavAnchor>
          </HeaderNavLink>
          <NavAnchor onClick={this.props.onLogout}>Log Out</NavAnchor>
        </LeftHeaderLinkWrapper>
      );
    }

    return (
      <LeftHeaderLinkWrapper>
        <HeaderNavLink route="sign-up" href="/sign-up" prefetch>
          <NavAnchor>Sign Up</NavAnchor>
        </HeaderNavLink>
        <HeaderNavLink route="log-in" href="/log-in" prefetch>
          <NavAnchor>Log In</NavAnchor>
        </HeaderNavLink>
      </LeftHeaderLinkWrapper>
    );
  };

  renderMiddleLinks = () => (
    <MiddleHeaderLinkWrapper>
      <HeaderNavLink route="listings" href="/listings" prefetch>
        <NavAnchor>Listings</NavAnchor>
      </HeaderNavLink>
      <HeaderNavLink route="new-developments" href="/new-developments" prefetch>
        <NavAnchor>New Developments</NavAnchor>
      </HeaderNavLink>
      <HeaderNavLink route="roommates" href="/roommates" prefetch>
        <NavAnchor>Roommates</NavAnchor>
      </HeaderNavLink>
      <HeaderNavLink route="about" href="/about" prefetch>
        <NavAnchor>About</NavAnchor>
      </HeaderNavLink>
    </MiddleHeaderLinkWrapper>
  );

  render() {
    return (
      <HeaderWrapper id="header-wrapper" isApp={this.props.isApp}>
        <Logo>
          <Link route="home" prefetch>
            <LogoAnchor>Real Estate App Logo</LogoAnchor>
          </Link>
        </Logo>
        {this.renderMiddleLinks()}
        {this.renderLinks()}
      </HeaderWrapper>
    );
  }
}

export default HeaderNav;
