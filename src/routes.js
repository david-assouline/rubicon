import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";
import Policy from "./views/Main/Policy";
import ClientSearch from "./views/Main/ClientSearch";
import Dashboard from "./views/Main/Dashboard";

import { IoPersonSharp } from "react-icons/io5";
import { MdOutlinePolicy } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { InfoOutlineIcon, SearchIcon, ViewIcon } from "@chakra-ui/icons";
import { GoPerson } from "react-icons/go";
import ClientDetails from "./views/Main/ClientDetails";

var dashRoutes = [
  {
    name: "CLIENT",
    category: "client",
    state: "pageCollapse",
    views: [
      {
        name: "Search",
        path: "/client/search",
        icon: <SearchIcon color="inherit" />,
        component: ClientSearch,
        layout: "/admin",
      },
      {
        name: "Details",
        path: "/client/details",
        icon: <GoPerson color="inherit" />,
        component: ClientDetails,
        layout: "/admin",
      },
    ],
  },
  {
    name: "POLICY",
    category: "policy",
    state: "pageCollapse",
    views: [
      {
        name: "Policy",
        path: "/policy/search",
        icon: <MdOutlinePolicy color="inherit" />,
        component: Policy,
        layout: "/admin",
      },
    ],
  },
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: <MdSpaceDashboard color="inherit" />,
  //   component: Dashboard,
  //   layout: "/admin",
  // },
  // {
  //   path: "/illustration",
  //   name: "Illustration",
  //   icon: <StatsIcon color="inherit" />,
  //   component: Tables,
  //   layout: "/admin",
  // },
  // {
  //   path: "/underwriting",
  //   name: "Underwriting",
  //   icon: <CreditIcon color="inherit" />,
  //   component: Billing,
  //   layout: "/admin",
  // },
  // {
  //   path: "/policy",
  //   name: "Policy",
  //   icon: <MdOutlinePolicy color="inherit" />,
  //   component: Policy,
  //   layout: "/admin",
  // },
  // {
  //   path: "/commissions",
  //   name: "Commissions",
  //   icon: <CreditIcon color="inherit" />,
  //   component: Administration,
  //   layout: "/admin",
  // },
  // {
  //   path: "/claims",
  //   name: "Claims",
  //   icon: <CreditIcon color="inherit" />,
  //   component: Administration,
  //   layout: "/admin",
  // },
  // {
  //   name: "ACCOUNT",
  //   category: "account",
  //   state: "pageCollapse",
  //   views: [
  //     {
  //       path: "/profile",
  //       name: "Profile",
  //       icon: <PersonIcon color="inherit" />,
  //       secondaryNavbar: true,
  //       component: Profile,
  //       layout: "/admin",
  //     },
  //   ],
  // },
];

export default dashRoutes;
