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
  { name: 'Admin Dashboard', route: 'admin-dashboard', icon: DashboardIcon },
  {
    name: 'Profile',
    route: 'profile',
    icon: PersonIcon,
    iconFontSize: 28,
    iconLeft: '12px',
    iconLeftSmall: '5px',
  },
  {
    name: 'Deals',
    type: 'management',
    subType: 'deals',
    routeBase: 'deals',
    icon: DealsIcon,
  },
  {
    name: 'Invoices',
    type: 'management',
    subType: 'invoices',
    routeBase: 'invoices',
    icon: InvoicesIcon,
    iconFontSize: 20,
  },
  {
    name: 'Agents',
    type: 'management',
    subType: 'agents',
    routeBase: 'agents',
    icon: AgentsIcon,
    iconFontSize: 24,
  },
  {
    name: 'Users',
    type: 'management',
    subType: 'users',
    routeBase: 'users',
    icon: UsersIcon,
    iconFontSize: 24,
  },
  {
    name: 'Admins',
    type: 'management',
    subType: 'admin',
    routeBase: 'admin',
    icon: AdminsIcon,
    iconFontSize: 24,
  },
  {
    name: 'Log Out',
    icon: ExitToAppIcon,
    id: 'logout',
  },
];

export default adminSideLinks;
