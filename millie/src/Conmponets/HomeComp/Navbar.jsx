import React from 'react'
import "../../style.css"
import logo from "../../Assets/logo.jpg"
import {Link} from "react-router-dom"

export const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",padding:"0px 150px",backgroundColor:"#f6f4f2"}}>
            <div>
            <img src={logo} width={"150px"} style={{ padding: "16px", mixBlendMode: "darken" }} alt="" />
            </div>
            <div style={{display:"flex",alignItems:"center",gap:"32px",fontSize:"16px",textDecoration:"none",marginRight:"30px"}}>
               <Link className='nav-links'>Home</Link> 
               <Link className='nav-links'>About Us</Link> 
               <Link className='nav-links'>Classes</Link> 
               <Link className='nav-links'>Testimonial</Link> 
               <Link className='nav-links'>Contact Us</Link> 
               <button className='nav-number-btn'>+91 8709330353</button>
            </div>
        </div>
  )
}