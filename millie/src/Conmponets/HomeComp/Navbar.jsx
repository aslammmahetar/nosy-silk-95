import React from 'react'
import "../../style.css"
import logo from "../../Assets/logo.png"
import { Link } from "react-router-dom"
import { Menu,MenuButton,MenuList,MenuItem,Text  } from '@chakra-ui/react';
import {ChevronDownIcon} from "@chakra-ui/icons"
import {VscAccount} from "react-icons/vsc"
import {CiLogin} from "react-icons/ci"

export const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "0px 150px" }}>
      <div>
        <img src={logo} width={"150px"} style={{ paddingTop: "16px", mixBlendMode: "darken" }} alt="" />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "32px", fontSize: "16px", textDecoration: "none", marginRight: "30px" }}>
        <Link className='nav-links'>Home</Link>
        <Link className='nav-links'>About Us</Link>
        <Link className='nav-links'>Classes</Link>
        <Link className='nav-links'>Testimonial</Link>
        <Link className='nav-links'>Contact Us</Link>
        <Menu>
          <MenuButton cursor={"pointer"} backgroundColor={"#f6f4f2"} as={Text} >
            Account <ChevronDownIcon />
          </MenuButton>
          <MenuList backgroundColor={"#f6f4f2"} >
            <MenuItem justifyContent={"space-between"} backgroundColor={"#f6f4f2"} _hover={{backgroundColor:"#d9ae98",color:"white"}}>Sign In <CiLogin/></MenuItem>
            <MenuItem justifyContent={"space-between"} backgroundColor={"#f6f4f2"} _hover={{backgroundColor:"#d9ae98",color:"white"}}>Join Us <VscAccount/></MenuItem>
          </MenuList>
        </Menu>
        {/* <button className='nav-number-btn'>Sign In</button>
        <button className='nav-number-btn'>Sign InSign InSign In</button> */}
      </div>
    </div>
  )
}