import React from 'react'
import { Image, Text, Heading } from "@chakra-ui/react"
import { AiFillStar } from "react-icons/ai"
import { FaLongArrowAltRight } from "react-icons/fa"
import "../../style.css"

export const FeaturedR = () => {
  return (
    <div style={{ backgroundColor: "#d9ae98", padding: "50px 0px", textAlign: "left" }}>
      <div id='featured-sec' style={{ display: "flex", width: "80%", margin: "auto", justifyContent: "center", alignItems: "center", gap: "60px" }}>
        <div style={{ width: "100%" }}>
          <Image src='https://millieyoga.com/wp-content/uploads/2020/09/yoga-studio-reviews-img.png' />
        </div>
        <div style={{ width: "100%" }}>
          <Text color={"white"} mb={5} fontFamily={"'Montserrat', sans-serif"} fontSize={"14px"}>FEATURED REVIEWS</Text>
          <Heading fontSize={"32px"} fontWeight={400} fontFamily={"'Prata', serif"}>Yoga Studio Like No Others!</Heading>
          <div style={{ display: "flex", color: "white", marginTop: "30px", marginBottom: "30px" }}>
            <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
          </div>
          <Heading fontSize={"24px"} fontFamily={"'Lato', sans-serif"}>“I was a little worried about trying yoga for the <br /> first time as a lot of the poses seemed really <br /> difficult and intimidating, but the instructors were <br /> really nice and supportive. Since then I’ve been <br /> back every day and I’m finally ready to try my first <br /> hot yoga class!”</Heading>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "40px", width: "80%" }}>
            <Text fontFamily={"'Montserrat', sans-serif"} fontSize={"14px"}>JESSICA LIM</Text>
            <Text display={"flex"} alignItems={"center"} fontWeight={500} color={"white"}>View All Reviews <FaLongArrowAltRight style={{ marginLeft: "10px" }} /></Text>
          </div>
        </div>
      </div>

    </div>
  )
}
