import React from 'react'
import logo from '../Assets/logo.png';
import { useEffect, useState } from "react";
import {Bscart} from "react-icons/bs"; 
import {HiOutlineBars3} from "react-icons/hi2"; 
import {
  BoxDrawer, 
  Drawer,
  Box,
  List,
  ListItemText,
  ListItem, 
  ListItemIcon,
  ListItemButton, } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Navbar = () => {
  
  const [openMenu,setOpenMenu] = useState(false)
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon/> 
    }, 
    {
      text: "About", 
      icon: <InfoIcon/> 
    },
    {
      text: "Testimonials", 
      icon: <CommentRoundedIcon/> 
    },
    {
      text: "Contact", 
      icon: <PhoneRoundedIcon/> 
    },
  ];
  return (
      <nav>
      <div className = "nav-logo-container"> 
      </div>
      <div className = "navbar-links-container">
        <a href ="">Home</a> 
        <a href ="">About</a>
        <a href ="">Features</a>
        <a href ="">Contact</a>
        <button className = "primary-button"> Demo </button>
      </div>
      <div className = "navbar-menu-container"> 
        <HiOutlineBars3 onClick = {() => setOpenMenu(true)} />
        </div>
      <Drawer open = {openMenu} onClose = {() => setOpenMenu(false)}
      anchor = "right" > 
      <Box
        sx = {{width: 250}}
        role = "presentation"
        onClick = {() => setOpenMenu(false)}
        onKeyDown = {() => setOpenMenu(false)}
      > 
      <List> 
        {menuOptions.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon> 
                {item.icon} </ListItemIcon>
                <ListItemText primary = {item.text} /> 
                </ListItemButton>
            </ListItem>
        ))}
        </List>
          </Box> 
    </Drawer> 
    </nav>

  );
};

export default Navbar;