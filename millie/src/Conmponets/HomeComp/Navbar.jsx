import React from 'react'
import "../../style.css"
import logo from "../../Assets/logo.png"
import { Link } from "react-router-dom"
import { Menu,MenuButton,MenuList,MenuItem,Text  } from '@chakra-ui/react';
import {ChevronDownIcon} from "@chakra-ui/icons"
import {VscAccount} from "react-icons/vsc"
import {CiLogin} from "react-icons/ci"
import { Navbar, Container, Nav } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";





export const Naavbar = () => {
  return (
    <div
    className="navbar-container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0px 150px",
        backgroundColor: "#f6f4f2",
      }}
    >
      {/* <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        // fixed="top"
        id="navbar"
        className="animate-navbar nav-theme justify-content-between"
      
      >
        <Container> */}
      <div>
        <img
          src={logo}
          width={"150px"}
          style={{ padding: "16px", mixBlendMode: "darken" }}
          alt=""
        />
      </div>
      {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}

      {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
      {/* <Nav className="me-auto"></Nav> */}
      {/* <Nav> */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "32px",
          fontSize: "16px",
          textDecoration: "none",
          marginLeft: "400px",
        }}
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
          <MenuButton cursor={"pointer"} backgroundColor={"#f6f4f2"} as={Text} >
            Account <ChevronDownIcon />
          </MenuButton>
          <MenuList backgroundColor={"#f6f4f2"} >
            <MenuItem justifyContent={"space-between"} backgroundColor={"#f6f4f2"} _hover={{backgroundColor:"#d9ae98",color:"white"}}>Sign In <CiLogin/></MenuItem>
            <MenuItem justifyContent={"space-between"} backgroundColor={"#f6f4f2"} _hover={{backgroundColor:"#d9ae98",color:"white"}}>Join Us <VscAccount/></MenuItem>
          </MenuList>
        </Menu>
        
      </div>
      {/* </Nav> */}
      {/* </Navbar.Collapse>
      </Container>
      </Navbar> */}
     </div>
  );
};