import React from 'react';
import { observer } from 'mobx-react';
import debounce from 'debounce';
import { withRouter } from 'next/router';
import { Router } from '../routes';
import HeaderNav from '../components/HeaderNav';
import AppHeaderNav from '../components/AppHeaderNav';

@observer
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorsFromServer: '',
      appTopBurgerMenuOpen: false,
    };
    this.onLogout = debounce(this.onLogout, 500, true);
    this.renderTopNav = this.renderTopNav.bind(this);
    this.onClickBurgerMenu = this.onClickBurgerMenu.bind(this);
  }

  onClickBurgerMenu() {
    this.setState({
      ...this.state,
      appTopBurgerMenuOpen: !this.state.appTopBurgerMenuOpen,
    });
  }

  onLogout = async () => {
    const res = await this.props.logoutUser();

    if (res.error) {
      this.setState({
        ...this.state,
        errorsFromServer: res.error,
      });
      return;
    }
    if (this.state.errorsFromServer) {
      this.setState({
        ...this.state,
        errorsFromServer: '',
      });
    }

    Router.pushRoute('home');
  };

  renderTopNav() {
    if (this.props.isApp) {
      return (
        <AppHeaderNav
          appTopBurgerMenuOpen={this.state.appTopBurgerMenuOpen}
          onClickBurgerMenu={this.onClickBurgerMenu}
          currentPath={this.props.router.pathname}
          isApp={this.props.isApp}
          isLoggedIn={this.props.isLoggedIn}
          onLogout={this.onLogout}
        />
      );
    }

    return (
      <HeaderNav
        isApp={this.props.isApp}
        isLoggedIn={this.props.isLoggedIn}
        onLogout={this.onLogout}
      />
    );
  }

  render() {
    return this.renderTopNav();
  }
}

// use HOC to access router object inside of component
// useful for accessing props.router.pathname
export default withRouter(Header);
