import React from "react";
import "../../style.css";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import "../TestimonialComp/NavbarTest.css";
export const NavbarTest = () => {
  return (
   <div>
     <div id="top_div"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0px 150px",
        // backgroundColor: "#f6f4f2",
        // backgroundImage: "url('https://millieyoga.com/wp-content/uploads/2020/09/yoga-studio-cta-section-bg.jpg')",
      }}
    >
      <div>
        <img
          src={logo}
          width={"120px"}
          style={{ padding: "15px", mixBlendMode: "darken" ,paddingTop:"15px"}}
          alt=""
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "32px",
          fontSize: "16px",
         
          textDecoration: "none",
          marginRight: "30px",
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
        <button className="nav-number-btn">+91 8709330353</button>
      </div>
      
    </div>
    <h1 id="testimonial_div">Testimonial</h1>
   </div>
  );
};
