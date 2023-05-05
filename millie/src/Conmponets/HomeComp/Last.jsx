import React from 'react'
import { FiMail } from "react-icons/fi"
import "../../style.css"

export const Last = () => {
  return (
    // <div style={{marginBottom:"-5px"}} >
    <div style={{ marginBottom: "-5px", backgroundImage: "url('https://millieyoga.com/wp-content/uploads/2020/09/yoga-studio-cta-section-bg.jpg')", height: "70vh" }} >
      {/* <img width={"100%"} style={{mixBlendMode:"multiply"}} src="" alt="" /> */}

      <div style={{ textAlign: "center", color: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" ,backgroundColor:"rgba(0, 0, 0, 0.249)",height:"70vh"}}>
        <div style={{ backgroundColor: "#d9ae98", marginTop: "5px", padding: "15px", borderRadius: "50px" }}>
          <FiMail id='messege-logo'  size={"25px"} />
        </div>
        <p style={{ fontSize: "50px", fontFamily: "'Playfair Display', serif" }}>Subscribe To Our Newsletter</p>
        <p >Stay up to date with all our classes and class timings with our email newsletter.
          <br /> Never miss another session.</p>
      </div>

    </div>
  )
}
