//assign to Aslam
import React, { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import RightSection from "../Conmponets/ClassesComp/RightSection";
import LeftSection from "../Conmponets/ClassesComp/LeftSection";
import YogaStyles from "../Conmponets/ClassesComp/YogaStyles";
import PopularClasses from "../Conmponets/ClassesComp/PopularClasses";
import FooterPoster from "../Conmponets/ClassesComp/FooterPoster";
import { Naavbar } from "../Conmponets/HomeComp/Navbar";
import { Footer } from "../Conmponets/HomeComp/Footer";
import { getData } from "../Redux/ClassesReducer/action";
import { useDispatch, useSelector } from "react-redux";
import HeadPoster from "../Conmponets/ClassesComp/HeadPoster";
import PaymentPage from "./PaymentPage";

const Classes = () => {
  const { classes } = useSelector((store) => store.classesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(4));
  }, []);

  return (
    <Box>
      <Naavbar bgColor={"#D9AE98"} />
      <HeadPoster />
      <Box width={"100%"} margin={"auto"} bgColor={"#F5F5F5"}>
        <Flex
          gap={"100px"}
          p="50PX"
          width={"80%"}
          m="auto"
          flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
        >
          <RightSection />
          <LeftSection />
        </Flex>
      </Box>
      <Box>
        <YogaStyles />
      </Box>
      <Box>
        <PopularClasses classes={classes} />
      </Box>
      <Box>
        <FooterPoster />
      </Box>
      <Footer />
      {/* <PaymentPage /> */}
    </Box>
  );
};

export default Classes;
