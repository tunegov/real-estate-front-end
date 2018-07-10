import React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from 'material-ui/styles';
import { darken } from 'polished';
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

const styles = theme => ({
  signUpLink: {
    display: 'flex',
    height: '100%',
    padding: '5px',
    color: '#fff',
    backgroundColor: '#D0021B',
    borderRadius: '2px',
    transition: 'background-color .2s ease-in-out',
    '&:hover': {
      backgroundColor: darken(0.05, '#D0021B'),
    },
  },
  anchor: {
    textDecoration: 'none',
  },
  loginWrapper: {
    display: 'flex',
    marginRight: '5px',
  },
});

@observer
@withStyles(styles)
class HeaderNav extends React.Component {
  renderLinks = () => {
    const { classes, isAdmin } = this.props;
    if (this.props.isLoggedIn) {
      return (
        <LeftHeaderLinkWrapper>
          <HeaderNavLink
            route={isAdmin ? 'admin-dashboard' : 'dashboard'}
            prefetch
          >
            <NavAnchor>Dashboard</NavAnchor>
          </HeaderNavLink>
          <NavAnchor onClick={this.props.onLogout}>Log Out</NavAnchor>
        </LeftHeaderLinkWrapper>
      );
    }

    return (
      <LeftHeaderLinkWrapper>
        <span className={classes.loginWrapper}>
          <HeaderNavLink route="log-in" href="/log-in" prefetch>
            <NavAnchor>Log In</NavAnchor>
          </HeaderNavLink>
        </span>
        {/*<Link route="sign-up" href="/sign-up" prefetch>
          <a className={classes.anchor}>
            <span className={classes.signUpLink}>Sign Up</span>
          </a>
          </Link>*/}
      </LeftHeaderLinkWrapper>
    );
  };

  renderMiddleLinks = () => (
    <MiddleHeaderLinkWrapper>
      <HeaderNavLink route="listings" href="/listings" prefetch>
        <NavAnchor>Listings</NavAnchor>
      </HeaderNavLink>
      <HeaderNavLink route="listings" href="/listings" prefetch>
        <NavAnchor>New Developments</NavAnchor>
      </HeaderNavLink>
      <HeaderNavLink route="about" href="/about" prefetch>
        <NavAnchor>About</NavAnchor>
      </HeaderNavLink>
    </MiddleHeaderLinkWrapper>
  );

  render() {
    const { headerBoxShadowOff } = this.props;
    return (
      <HeaderWrapper id="header-wrapper" headerBoxShadowOff>
        {
          <Logo>
            <Link route="home" prefetch>
              <LogoAnchor>Real Estate App Logo</LogoAnchor>
            </Link>
          </Logo>
        }
        {/*this.renderMiddleLinks()*/}
        {this.renderLinks()}
      </HeaderWrapper>
    );
  }
}

export default HeaderNav;
