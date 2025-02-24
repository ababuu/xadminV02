import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import HistoryIcon from "@mui/icons-material/History";
import StartIcon from "@mui/icons-material/Start";
import Image from "next/image";
import SidebarItem from "./SidebarItem";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";

const drawerWidth = 255;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  borderRight: 0,
  boxShadow: "4px 4px 40px rgba(0, 0, 0, 0.06)",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  borderRight: 0,
  boxShadow: "4px 4px 40px rgba(0, 0, 0, 0.06)",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  border: 0,
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface SidebarContainerProps {
  open: boolean;
  handleDrawerClose: () => void;
  handleDrawerOpen: () => void;
}

const SidebarContainer: React.FC<SidebarContainerProps> = ({
  open,
  handleDrawerClose,
  handleDrawerOpen,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { asPath } = useRouter();

  const sidebarOptions = [
    {
      path: "/",
      text: "Dashboard",
      icon: <DashboardIcon />,
      active: asPath === "/",
    },
    {
      path: "/Users",
      text: "Users",
      icon: <PeopleIcon />,
      active: asPath === "/Users",
    },
    {
      path: "/Trade",
      text: "Trade",
      icon: <EqualizerIcon />,
      active: asPath === "/Trade",
    },
    {
      path: "/Transactions",
      text: "Transactions",
      icon: <CurrencyExchangeIcon />,
      active: asPath === "/Transactions",
    },
    {
      path: "/Liquidity",
      text: "Liquidity",
      icon: <AccountBalanceWalletIcon />,
      active: asPath === "/Liquidity",
    },
    {
      path: "/History",
      text: "History",
      icon: <HistoryIcon />,
      active: asPath === "/History",
    },
  ];

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={open}
      onClose={handleDrawerClose}
      className="relative"
    >
      <DrawerHeader className="relative">
        <div className="absolute left-4">
          <Image src="/images/logo.png" alt="Bitcoin" width={25} height={25} />
        </div>
        <div
          className={`absolute left-12 text-[25px] mb-1 font-bold ${
            !open && "hidden"
          }`}
        >
          <Image
            src="/images/rubix.png"
            alt="Bitcoin"
            width={74.74}
            height={21.95}
          />
        </div>
      </DrawerHeader>
      <div className="pl-10 pr-10">
        <Divider />
      </div>
      <List
        className={`text-lg mt-10 ${
          open ? "ml-5" : "ml-3"
        } transition-all duration-${theme.transitions.duration.leavingScreen}`}
      >
        {sidebarOptions.map((option, index) => (
          <SidebarItem
            key={index}
            path={option.path}
            text={option.text}
            icon={option.icon}
            active={option.active}
            open={open}
          />
        ))}
      </List>
      <DrawerHeader>
        <IconButton
          color="inherit"
          aria-label="toggle drawer"
          onClick={open ? handleDrawerClose : handleDrawerOpen}
          edge="end"
          className={`absolute bottom-4 right-4 ${open ? "rotate-180" : ""}`}
        >
          <StartIcon className="text-[gray]" />
        </IconButton>
      </DrawerHeader>
    </Drawer>
  );
};

export default SidebarContainer;
