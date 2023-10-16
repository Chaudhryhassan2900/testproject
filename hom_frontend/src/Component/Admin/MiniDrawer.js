import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import GridViewIcon from "@mui/icons-material/GridView";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import products_icon from "../../Assets/icons/products-icon.svg";
import orders_icon from "../../Assets/icons/orders-icon.svg";
import blogs_icon from "../../Assets/icons/blogs-icon.svg";
import customers_icon from "../../Assets/icons/customers-icon.svg";
import reports_icon from "../../Assets/icons/reports-icon.svg";
import request_product_icon from "../../Assets/icons/request-product-icon.svg";
import users_icon from "../../Assets/icons/users-icon.svg";
import bell_icon from "../../Assets/icons/bell-icon.svg";
import xcentric_logo from "../../Assets/images/Xcentric-logo.png";
import { Avatar, Badge, Button } from "@mui/material";
import profile from "../../Assets/images/dummy-profile.jpeg";
import Dashboard from "../Dashboard/Dashboard";
import Products from "../Products/Products";
import "./MiniDrawer.css";

const style = {
  "& .MuiPaper-root": {
    backgroundColor: "#092646",
    zIndex: "11111",
  }
};

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
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
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
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
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const renderSwitch = (index) => {
    switch (index) {
      case 0:
        return <GridViewIcon sx={{ color: "white" }} />;
        break;
      case 1:
        return <img src={products_icon} />;
        break;
      case 2:
        return <img src={orders_icon} />;
        break;
      case 3:
        return <img src={users_icon} />;
        break;
      case 4:
        return <img src={customers_icon} />;
        break;
      case 5:
        return <img src={request_product_icon} />;
        break;
      case 6:
        return <img src={reports_icon} />;
        break;
      case 7:
        return <img src={blogs_icon} />;
        break;
    }
  };

  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "#215295" }}>
        <Toolbar sx={{ margin: "auto" }}>
          <Typography variant="h6" noWrap component="div" sx={{}}>
            Can’t get your store to work? <b>Call 0300-8001034</b>
          </Typography>
          <Button
            sx={{
              color: "white",
              backgroundColor: "#092646",
              textTransform: "initial",
              marginLeft: "3vh",
            }}
          >
            Help
          </Button>
          {/* <img src={profile} style={{width:"40px", borderRadius:"5vh", border:"2px solid #092646", marginLeft:"10vh"}} /> */}
          <Avatar alt="Remy Sharp" src={profile} sx={{border:"3px solid #092646"}} />

            <div style={{display:'block', textAlign:"left", marginLeft:"2vh"}}>
              <Typography sx={{lineHeight:"2vh"}}><b>Full Name</b></Typography>
              <Typography>role</Typography>
            </div>
            {/* <Badge color="secondary" variant="dot"> */}
            <img src={bell_icon} style={{marginLeft:"2vh"}}/>
            {/* </Badge> */}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} sx={style}>
        <DrawerHeader>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="center"
            sx={{
              ...(open && { display: "none" }),
              margin: "auto",
            }}
          >
            <MenuIcon sx={{ color: "white", marginTop: "9vh" }} />
          </IconButton>
          <>
            <img
              src={xcentric_logo}
              style={
                open
                  ? {
                      display: "flex",
                      width: "80%",
                      margin: "auto",
                      marginTop: "9vh",
                    }
                  : { display: "none" }
              }
            />
          </>
        </DrawerHeader>

        <List sx={{ color: "white", marginTop: "8vh" }}>
          {[
            "Dashboard",
            "Products",
            "Orders",
            "Users",
            "Customers",
            "Request for a product",
            "Reports",
            "Blogs",
          ].map((text, index) => (  
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
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
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {renderSwitch(index)}
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* <Divider /> */}
      </Drawer>
      <IconButton className="icon-btn"
        onClick={handleDrawerClose}
        sx={open ? { display: "flex"} : { display: "none" }}
      >
        {theme.direction === "rtl" ? (
          <ChevronRightIcon />
        ) : (
          <ChevronLeftIcon
          
            sx={{
              fontSize:"1.9rem",
              color: "white",
              borderRadius: "50%",
              backgroundColor: "#092646",
              border: "5px solid white",
              color: "white",
              zIndex: "1111111",
              position: "absolute",
              top: "20%",
            }}
          />
        )}
      </IconButton>
      <Box component="main" sx={{ flexGrow: 1, p: 3 ,backgroundColor: "#F6F4FC"}}>
      <DrawerHeader />
      {/* <Dashboard /> */}
      <Products />
       </Box>
    </Box>
  );
}
