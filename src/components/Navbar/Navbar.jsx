import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { links } from "./links";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleOn = () => {
    setActive(true);
  };

  const toggleOff = () => {
    setActive(false);
  };

  const list = () => (
    <Box sx={{ width: 250 }} onClick={toggleOff} onKeyDown={toggleOff}>
      <List>
        {links.map((link) => (
          <ListItem key={link.id} disablePadding>
            <ListItemButton>
              <Link to={link.path}>
                <ListItemText primary={link.title} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2 }}>
        <Link to="/register">
          <Button>Register</Button>
        </Link>
        <Link to="/login" style={{ marginLeft: "1rem" }}>
          <Button variant="outlined">Sign up</Button>
        </Link>
      </Box>
    </Box>
  );

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 4,
          }}
        >
          <Link to="/">
            <Box>
              <Typography
                variant="h6"
                component="h1"
                sx={{ fontWeight: "bold" }}
              >
                SmartEarnersInvestment
              </Typography>
            </Box>
          </Link>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {links.map((link) => (
              <Typography variant="body2" component="p" sx={{ mr: 5 }}>
                <Link to={link.path} key={link.id}>
                  {link.title}
                </Link>
              </Typography>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Link to="/register">
              <Button>Register</Button>
            </Link>
            <Link to="/login" className="ms-3">
              <Button variant="outlined">sign in</Button>
            </Link>
          </Box>
          <Box className="bars">
            <FaBars
              className="bars"
              size="20px"
              onClick={toggleOn}
              color="#000"
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" onClose={toggleOff} open={active}>
        {list()}
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
