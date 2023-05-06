//assign to vaibhav
import React from "react";
import { NavLink } from "react-router-dom";
import { Naavbar } from "../Conmponets/HomeComp/Navbar";
import { Footer } from "../Conmponets/HomeComp/Footer";
import { Last } from "../Conmponets/HomeComp/Last";
import { Map } from "../Conmponets/ContactComp/Map";
import { Contact } from "../Conmponets/ContactComp/Contact";

function ContactUS() {
  return <div>
    <Naavbar/>
    <Contact/>
    <Map/>
    <Last/>
    <Footer/>
  </div>;
}

export default ContactUS;
