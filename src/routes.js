// import
import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Illustrate";
import Billing from "views/Dashboard/Underwriting";
import Profile from "views/Dashboard/Profile";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";
import Administration from "./views/Dashboard/Administration";

import { IoPersonSharp } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";

var dashRoutes = [
  {
    path: "/clients",
    name: "Clients",
    icon: <IoPersonSharp color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <MdSpaceDashboard color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/illustration",
    name: "Illustration",
    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/underwriting",
    name: "Underwriting",
    icon: <CreditIcon color="inherit" />,
    component: Billing,
    layout: "/admin",
  },
  {
    path: "/administration",
    name: "Administration",
    icon: <CreditIcon color="inherit" />,
    component: Administration,
    layout: "/admin",
  },
  {
    path: "/commissions",
    name: "Commissions",
    icon: <CreditIcon color="inherit" />,
    component: Administration,
    layout: "/admin",
  },
  {
    path: "/claims",
    name: "Claims",
    icon: <CreditIcon color="inherit" />,
    component: Administration,
    layout: "/admin",
  },
  {
    name: "ACCOUNT",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
    ],
  },
];

export default dashRoutes;
