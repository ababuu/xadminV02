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

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
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
};

export default function Shared({ children }: Props) {
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
      <AppBar position="fixed" open={open}>
        <Toolbar></Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} className="relative">
        <DrawerHeader className="relative">
          <p className="absolute left-2">Logo</p>
        </DrawerHeader>
        <div className="pl-10 pr-10">
          <Divider />
        </div>
        <List className="text-lg">
          <Link href="/">
            <a>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
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
                      className={`text-sm ${
                        asPath === "/" ? "text-[#27AE60]" : ""
                      }`}
                    >
                      Dashboard
                    </p>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </a>
          </Link>

          <ListItem disablePadding sx={{ display: "block" }}>
            <Link href="/Users">
              <a>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
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
                      className={`text-sm ${
                        asPath === "/Users" ? "text-[#27AE60]" : ""
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
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
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
                      className={`text-sm ${
                        asPath === "/Trade" ? "text-[#27AE60]" : ""
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
            <Link href="/Orders">
              <a>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <ViewInArIcon
                      className={`text-sm ${
                        asPath === "/Orders" ? "text-[#27AE60]" : ""
                      }`}
                    />
                  </ListItemIcon>
                  <ListItemText sx={{ opacity: open ? 1 : 0, fontSize: "2px" }}>
                    <p
                      className={`text-sm ${
                        asPath === "/Orders" ? "text-[#27AE60]" : ""
                      }`}
                    >
                      Orders
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
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
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
                      className={`text-sm ${
                        asPath === "/History" ? "text-[#27AE60]" : ""
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
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
