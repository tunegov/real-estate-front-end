import React from 'react';
import { observer } from 'mobx-react';
import axios from 'axios';
import debounce from 'debounce';
import Router from 'next/router';
import HeaderNav from '../components/HeaderNav';

@observer
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorsFromServer: '',
    };
    this.onLogout = debounce(this.onLogout, 500, true);
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

    Router.push('/');
  };

  render() {
    return (
      <HeaderNav
        isLoggedIn={this.props.isLoggedIn}
        currentPath={this.props.currentPath}
        onLogout={this.onLogout}
      />
    );
  }
}

export default Header;
