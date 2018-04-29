import {
  MdDashboard as DashboardIcon,
  MdPerson as PersonIcon,
} from 'react-icons/lib/md';
import {
  FaCreditCard as DealsIcon,
  FaClipboard as InvoicesIcon,
} from 'react-icons/lib/fa';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import UsersIcon from '@material-ui/icons/Contacts';
import AgentsIcon from '@material-ui/icons/SupervisorAccount';
import AdminsIcon from '@material-ui/icons/RecentActors';

export const adminSideLinks = [
  { name: 'Admin Dashboard', route: 'dashboard', icon: DashboardIcon },
  {
    name: 'Profile',
    route: 'profile',
    icon: PersonIcon,
    iconFontSize: 28,
    iconLeft: '12px',
    iconLeftSmall: '5px',
  },
  { name: 'Deals', id: 'manage-deals', icon: DealsIcon },
  { name: 'Invoices', id: 'manage-invoices', icon: InvoicesIcon, iconFontSize: 20 },
  { name: 'Agents', id: 'manage-agents', icon: AgentsIcon, iconFontSize: 24 },
  { name: 'Users', id: 'manage-users', icon: UsersIcon, iconFontSize: 24 },
  { name: 'Admins', id: 'manage-admins', icon: AdminsIcon, iconFontSize: 24 },
  { name: 'Log Out', icon: ExitToAppIcon, id: 'logout' },
];

export default adminSideLinks;
