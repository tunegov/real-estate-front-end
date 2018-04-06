import React, { Component } from 'react';
import { observer } from 'mobx-react';
import MenuIcon from 'react-icons/lib/md/menu';
import BellIcon from 'react-icons/lib/md/notifications';
import {
  HeaderWrapper,
  AppHeaderTitle,
  AppHeaderMenuIconWrapper,
  AppHeaderBellIconWrapper,
} from '../../sharedStyledComponents/headerStyles';
import PopupMenu from '../PopupMenu';
import { capitalize, unhyphenate } from '../../utils/stringUtils';

@observer
class AppHeaderNav extends Component {
  render() {
    const pathArray = this.props.currentPath.split('/');
    const path = pathArray[pathArray.length - 1];

    return (
      <HeaderWrapper isApp={this.props.isApp}>
        <AppHeaderMenuIconWrapper onClick={this.props.onClickBurgerMenu}>
          <MenuIcon color="rgba(35,25,25,.58)" size={38} />
          {this.props.appTopBurgerMenuOpen ? <PopupMenu onLogout={this.props.onLogout} /> : null}
        </AppHeaderMenuIconWrapper>
        <AppHeaderTitle>{capitalize(unhyphenate(path))}</AppHeaderTitle>
        <AppHeaderBellIconWrapper>
          <BellIcon color="rgba(35,25,25,.58)" size={36} />
        </AppHeaderBellIconWrapper>
      </HeaderWrapper>
    );
  }
}

export default AppHeaderNav;
