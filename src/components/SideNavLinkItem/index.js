import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Link } from '../../routes';
import { SideNavLinkItemWrapper, SideNavLinkItemAnchor, TextSpan, IconWrapper } from './styledComponents';

@observer
class SideNavLinkItem extends Component {
  render() {
    const { iconFontSize, icon: Icon } = this.props;
    let active;

    if (this.props.currentPath.endsWith(this.props.route)) {
      active = true;
    } else {
      active = false;
    }

    return (
      <SideNavLinkItemWrapper active={active}>
        <Link route={this.props.route}>
          <SideNavLinkItemAnchor>
            <TextSpan>
              <IconWrapper>
                {Icon ? <Icon size={iconFontSize || 28} color="#F0F0F0" /> : null}
              </IconWrapper>
              {this.props.name}
            </TextSpan>
          </SideNavLinkItemAnchor>
        </Link>
      </SideNavLinkItemWrapper>
    );
  }
}

export default SideNavLinkItem;
