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
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const sideLinks = [
  { name: 'Dashboard', route: 'dashboard', icon: DashboardIcon },
  { name: 'Profile', route: 'profile', icon: PersonIcon, iconFontSize: 28 },
  { name: 'Deals', route: 'deals', icon: DealsIcon },
  { name: 'Leads', route: 'leads', icon: LeadsIcon },
  { name: 'Invoices', route: 'invoices', icon: InvoicesIcon, iconFontSize: 20 },
  { name: 'Client Center', route: 'client-center', icon: ClientCenterIcon, iconFontSize: 24 },
  { name: 'Log Out', icon: ExitToAppIcon, id: 'logout' },
];

export default sideLinks;
