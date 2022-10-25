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
  // necessary for content to be below app bar
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
          {/* <p
            className={`absolute left-12 text-[25px] mb-1 font-bold ${
              !open && "hidden"
            }`}
          >
            rubix
          </p> */}
        </DrawerHeader>
        <div className="pl-10 pr-10">
          <Divider />
        </div>
        <List
          className={`text-lg ${
            open ? "ml-5" : "ml-3"
          } transition-all duration-${
            theme.transitions.duration.leavingScreen
          }`}
        >
          <ListItem disablePadding sx={{ display: "block" }}>
            <Link href="/">
              <a>
                <ListItemButton
                  sx={{
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  className={`rounded-lg mr-16 mb-3 mt-4 h-[30px] ${
                    asPath === "/" ? "bg-green-100" : ""
                  }`}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <DashboardIcon
                      className={`text-sm ${
                        asPath === "/" ? "text-[#27AE60]" : ""
                      }`}
                    />
                  </ListItemIcon>
                  <ListItemText sx={{ opacity: open ? 1 : 0, fontSize: "2px" }}>
                    <p
                      className={`text-sm hover:cursor-pointer ${
                        asPath === "/" ? "text-[#27AE60]" : "text-gray-700"
                      }`}
                    >
                      Dashboard
                    </p>
                  </ListItemText>
                </ListItemButton>
              </a>
            </Link>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <Link href="/Users">
              <a>
                <ListItemButton
                  sx={{
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  className={`rounded-lg mr-16 mb-3 h-[30px] ${
                    asPath === "/Users" ? "bg-green-100" : ""
                  }`}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <PeopleIcon
                      className={`text-sm ${
                        asPath === "/Users" ? "text-[#27AE60]" : ""
                      }`}
                    />
                  </ListItemIcon>
                  <ListItemText sx={{ opacity: open ? 1 : 0, fontSize: "2px" }}>
                    <p
                      className={`text-sm hover:cursor-pointer ${
                        asPath === "/Users" ? "text-[#27AE60]" : "text-gray-700"
                      }`}
                    >
                      Users
                    </p>
                  </ListItemText>
                </ListItemButton>
              </a>
            </Link>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Link href="/Trade">
              <a>
                <ListItemButton
                  sx={{
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  className={`rounded-lg mr-16 mb-3 h-[30px] ${
                    asPath === "/Trade" ? "bg-green-100" : ""
                  }`}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <EqualizerIcon
                      className={`text-sm ${
                        asPath === "/Trade" ? "text-[#27AE60]" : ""
                      }`}
                    />
                  </ListItemIcon>
                  <ListItemText sx={{ opacity: open ? 1 : 0, fontSize: "2px" }}>
                    <p
                      className={`text-sm hover:cursor-pointer ${
                        asPath === "/Trade" ? "text-[#27AE60]" : "text-gray-700"
                      }`}
                    >
                      Trade
                    </p>
                  </ListItemText>
                </ListItemButton>
              </a>
            </Link>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Link href="/Transactions">
              <a>
                <ListItemButton
                  sx={{
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  className={`rounded-lg mr-16 mb-3 h-[30px] ${
                    asPath === "/Orders" ? "bg-green-100" : ""
                  }`}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <CurrencyExchangeIcon
                      className={`text-sm  ${
                        asPath === "/Transactions" ? "text-[#27AE60]" : ""
                      }`}
                    />
                  </ListItemIcon>
                  <ListItemText sx={{ opacity: open ? 1 : 0, fontSize: "2px" }}>
                    <p
                      className={`text-sm hover:cursor-pointer ${
                        asPath === "/Transactions"
                          ? "text-[#27AE60]"
                          : "text-gray-700"
                      }`}
                    >
                      Transactions
                    </p>
                  </ListItemText>
                </ListItemButton>
              </a>
            </Link>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Link href="/Liquidity">
              <a>
                <ListItemButton
                  sx={{
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  className={`rounded-lg mr-16 mb-3 mt-4 h-[30px] ${
                    asPath === "/Liquidity" ? "bg-green-100" : ""
                  }`}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <AccountBalanceWalletIcon
                      className={`text-sm ${
                        asPath === "/Liquidity" ? "text-[#27AE60]" : ""
                      }`}
                    />
                  </ListItemIcon>
                  <ListItemText sx={{ opacity: open ? 1 : 0, fontSize: "2px" }}>
                    <p
                      className={`text-sm hover:cursor-pointer ${
                        asPath === "/Liquidity"
                          ? "text-[#27AE60]"
                          : "text-gray-700"
                      }`}
                    >
                      Liquidity
                    </p>
                  </ListItemText>
                </ListItemButton>
              </a>
            </Link>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Link href="/History">
              <a>
                <ListItemButton
                  sx={{
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  className={`rounded-lg mr-16 mb-2 h-[30px] ${
                    asPath === "/History" ? "bg-green-100" : ""
                  }`}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <HistoryIcon
                      className={`text-sm ${
                        asPath === "/History" ? "text-[#27AE60]" : ""
                      }`}
                    />
                  </ListItemIcon>
                  <ListItemText sx={{ opacity: open ? 1 : 0, fontSize: "2px" }}>
                    <p
                      className={`text-sm hover:cursor-pointer ${
                        asPath === "/History"
                          ? "text-[#27AE60]"
                          : "text-gray-700"
                      }`}
                    >
                      History
                    </p>
                  </ListItemText>
                </ListItemButton>
              </a>
            </Link>
          </ListItem>
        </List>
        <DrawerHeader>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={open ? handleDrawerClose : handleDrawerOpen}
            edge="end"
            // sx={{
            //   ...(open && { display: "none" }),
            // }}
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
