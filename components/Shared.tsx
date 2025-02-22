import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StartIcon from "@mui/icons-material/Start";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import HistoryIcon from "@mui/icons-material/History";
import Link from "next/link";
import { useRouter } from "next/router";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import Image from "next/image";

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

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer - 1,
  background: "white",
  boxShadow: "rgba(0, 0, 0, 0.15) 0 0 3px 0",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
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

type Props = {
  children: React.ReactNode | React.ReactNode[];
  tab: string;
};

export default function Shared({ children, tab }: Props) {
  const theme = useTheme();
  const { asPath } = useRouter();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        className={`${tab !== "home" ? "hidden" : ""}`}
      >
        <Toolbar></Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} className="relative">
        <DrawerHeader className="relative">
          <div className="absolute left-4">
            <Image
              src="/images/logo.png"
              alt="Bitcoin"
              width={25}
              height={25}
            />
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
          } transition-all duration-${
            theme.transitions.duration.leavingScreen
          }`}
        >
          {sidebarOptions.map((option, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <Link href={option.path}>
                <a>
                  <ListItemButton
                    sx={{
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                    className={`rounded-lg mr-16 mb-3 h-[30px] ${
                      option.active ? "bg-green-100" : ""
                    }`}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {React.cloneElement(option.icon, {
                        className: `text-sm ${
                          option.active ? "text-[#27AE60]" : ""
                        }`,
                      })}
                    </ListItemIcon>
                    <ListItemText
                      sx={{ opacity: open ? 1 : 0, fontSize: "2px" }}
                    >
                      <p
                        className={`text-sm hover:cursor-pointer ${
                          option.active ? "text-[#27AE60]" : "text-gray-700"
                        }`}
                      >
                        {option.text}
                      </p>
                    </ListItemText>
                  </ListItemButton>
                </a>
              </Link>
            </ListItem>
          ))}
        </List>
        <DrawerHeader>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={open ? handleDrawerClose : handleDrawerOpen}
            edge="end"
            className={`absolute bottom-4 right-4 ${open ? "rotate-180" : ""}`}
          >
            <StartIcon className="text-[gray]" />
          </IconButton>
        </DrawerHeader>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
