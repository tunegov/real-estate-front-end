import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Link } from '../../routes';
import { SideNavLinkItemWrapper, SideNavLinkItemAnchor, IconWrapper } from './styledComponents';

@observer
class SideNavLinkItem extends Component {
  render() {
    const { iconFontSize, icon: Icon } = this.props;
    let active;

    if (this.props.currentPath.split('/')[2] === this.props.route) {
      active = true;
    } else {
      active = false;
    }

    return (
      <SideNavLinkItemWrapper active={active}>
        <Link route={this.props.route}>
          <SideNavLinkItemAnchor>
            <IconWrapper>
              {Icon ? <Icon size={iconFontSize || 22} color="rgba(0, 0, 0, 0.87)" /> : null}
            </IconWrapper>
            {this.props.name}
          </SideNavLinkItemAnchor>
        </Link>
      </SideNavLinkItemWrapper>
    );
  }
}

export default SideNavLinkItem;
