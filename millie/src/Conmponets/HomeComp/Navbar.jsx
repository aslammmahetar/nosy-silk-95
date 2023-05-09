
import React, { useState } from 'react'
import "../../style.css"
import logo from "../../Assets/logo.png"
import { Link } from "react-router-dom"
import { Menu, MenuButton, MenuList, MenuItem, Text, Box, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from "@chakra-ui/icons"
import { VscAccount } from "react-icons/vsc"
import { CiLogin } from "react-icons/ci"
import { Navbar, Container, Nav } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import Hamburger from 'hamburger-react'
// import { Box } from '@chakra-ui/react';



export const Naavbar = ({ bgColor }) => {
  const [isOpenl, setOpen] = useState(false)

  // const ham=<Hamburger toggled={isOpenl} toggle={setOpen} />;
  return (

    <Box
      id="navbar-container"
      backgroundColor={bgColor}
    >
      <div>
        <img
          src={logo}
          width={"150px"}
          style={{ padding: "16px", mixBlendMode: "darken" }}
          alt=""
        />


      </div>
      <div id='hanburgur'>

        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen}  >
                <Hamburger toggled={isOpenl} toggle={setOpen} />
              </MenuButton>
              <MenuList>
                <MenuItem><Link className="nav-links" to={"/"}>
                  Home
                </Link></MenuItem>
                <MenuItem><Link className="nav-links" to={"/about-us"}>
                  About Us
                </Link></MenuItem>
                <MenuItem><Link className="nav-links" to={"/classes"}>
                  Classes
                </Link></MenuItem>
                <MenuItem><Link className="nav-links" to={"/testimonial"}>
                  Testimonial
                </Link></MenuItem>
                <MenuItem><Link className="nav-links" to={"/contact-us"}>
                  Contact Us
                </Link></MenuItem>
              </MenuList>
            </>
          )}
        </Menu>

      </div>

      <div
        id='links'


      >

        <Link className="nav-links" to={"/"}>
          Home
        </Link>
        <Link className="nav-links" to={"/about-us"}>
          About Us
        </Link>
        <Link className="nav-links" to={"/classes"}>
          Classes
        </Link>
        <Link className="nav-links" to={"/testimonial"}>
          Testimonial
        </Link>
        <Link className="nav-links" to={"/contact-us"}>
          Contact Us
        </Link>
        <Menu>
          <MenuButton cursor={"pointer"} backgroundColor={bgColor} as={Text} >
            Account <ChevronDownIcon />
          </MenuButton>
          <MenuList backgroundColor={"#f6f4f2"} >
            <MenuItem justifyContent={"space-between"} backgroundColor={"#f6f4f2"} _hover={{ backgroundColor: "#d9ae98", color: "white" }}>Sign In <CiLogin /></MenuItem>
            <MenuItem justifyContent={"space-between"} backgroundColor={"#f6f4f2"} _hover={{ backgroundColor: "#d9ae98", color: "white" }}>Join Us <VscAccount /></MenuItem>
          </MenuList>
        </Menu>

      </div>
    </Box>
  );
};






