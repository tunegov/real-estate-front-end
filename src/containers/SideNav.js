import React from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'next/router';
import {
  MdDashboard as DashboardIcon,
  MdPerson as PersonIcon,
} from 'react-icons/lib/md';
import {
  FaCreditCard as DealsIcon,
  FaClipboard as InvoicesIcon,
  FaSlideshare as LeadsIcon,
} from 'react-icons/lib/fa';
import ClientCenterIcon from 'react-icons/lib/ti/group';
import SettingsIcon from 'react-icons/lib/md/settings';
import ToggleSideNavIcon from 'react-icons/lib/md/reply';
import SideNavContainer from '../sharedStyledComponents/SideNavContainer';
import SideNavHeader from '../components/SideNavHeader';
import SideNavLinkItem from '../components/SideNavLinkItem';
import SettingsIconWrapper from '../sharedStyledComponents/SettingsIconWrapper';
import ToggleSideNavIconWrapper from '../sharedStyledComponents/ToggleSideNavIconWrapper';

const sideLinks = [
  { name: 'Dashboard', route: 'dashboard', icon: DashboardIcon },
  { name: 'Profile', route: 'profile', icon: PersonIcon, iconFontSize: 34 },
  { name: 'Deals', route: 'deals', icon: DealsIcon },
  { name: 'Leads', route: 'leads', icon: LeadsIcon },
  { name: 'Invoices', route: 'invoices', icon: InvoicesIcon, iconFontSize: 26 },
  { name: 'Client Center', route: 'client-center', icon: ClientCenterIcon, iconFontSize: 30 },
];

const renderSideLinkComponents = currentPath => (
  sideLinks.map(item => (
    <SideNavLinkItem
      key={item.route}
      name={item.name}
      route={item.route}
      icon={item.icon}
      iconFontSize={item.iconFontSize}
      currentPath={currentPath}
    />
  ))
);

@observer
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const currentPath = this.props.router.pathname;
    return (
      <SideNavContainer>
        <SideNavHeader />
        {renderSideLinkComponents(currentPath)}
        <SettingsIconWrapper>
          <SettingsIcon size={30} color="#F0F0F0" />
        </SettingsIconWrapper>
        <ToggleSideNavIconWrapper>
          <ToggleSideNavIcon size={36} color="#F0F0F0" />
        </ToggleSideNavIconWrapper>
      </SideNavContainer>
    );
  }
}

// use HOC to access router object inside of component
// useful for accessing props.router.pathname
export default withRouter(Header);
