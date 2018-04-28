import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Link } from '../../routes';
import { SideNavLinkItemWrapper, SideNavLinkItemAnchor, IconWrapper, SideNavLinkItemDiv } from './styledComponents';

@observer
class SideNavLinkItem extends Component {
  render() {
    const { onClick, iconFontSize, icon: Icon, isActionItem } = this.props;
    let active;

    if (this.props.currentPath.split('/')[2] === this.props.route) {
      active = true;
    } else {
      active = false;
    }

    const linkItem = (
      <SideNavLinkItemWrapper active={active} onClick={onClick}>
        <Link route={this.props.route}>
          <SideNavLinkItemAnchor>
            <IconWrapper>
              {Icon ? <Icon size={iconFontSize || 22} color="primary" /> : null}
            </IconWrapper>
            {this.props.name}
          </SideNavLinkItemAnchor>
        </Link>
      </SideNavLinkItemWrapper>
    );

    const actionItem = (
      <SideNavLinkItemWrapper active={active} onClick={onClick}>
        <SideNavLinkItemDiv>
          <IconWrapper>
            {Icon ? <Icon size={iconFontSize || 22} color="primary" /> : null}
          </IconWrapper>
          {this.props.name}
        </SideNavLinkItemDiv>
      </SideNavLinkItemWrapper>
    );

    if (isActionItem) {
      return actionItem;
    }
    return linkItem;
  }
}

export default SideNavLinkItem;
