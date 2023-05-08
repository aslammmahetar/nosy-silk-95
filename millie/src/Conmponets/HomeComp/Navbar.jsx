import React from "react";
import "../../style.css";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";

export const Naavbar = ({bgColor}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0px 150px",
        backgroundColor:bgColor,
      
      }}
    >
      <div>
        <img
          src={logo}
          width={"150px"}
          style={{ padding: "16px", mixBlendMode: "darken" }}
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
  );
};
