//assign to Aslam
import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import RightSection from "../Conmponets/ClassesComp/RightSection";
import LeftSection from "../Conmponets/ClassesComp/LeftSection";
import YogaStyles from "../Conmponets/ClassesComp/YogaStyles";
import PopularClasses from "../Conmponets/ClassesComp/PopularClasses";
import styles from "../Conmponets/ClassesComp/Styles/classes.module.css";
import { EmailIcon } from "@chakra-ui/icons";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  const getData = async () => {
    const url = new URL(
      "https://645393e4e9ac46cedf2940fc.mockapi.io/immortalyoga/immortalyoga"
    );
    url.searchParams.append("page", 1);
    url.searchParams.append("limit", 4);

    fetch(url, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((tasks) => {
        setClasses(tasks);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Box>
      <Box width={"100%"} margin={"auto"} bgColor={"#F5F5F5"}>
        <Flex gap={"100px"} p="50PX" width={"80%"} m="auto">
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
      <Box
        className={styles.poster}
        width={"100%"}
        h="400px"
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        mt={"130px"}
      >
        <Box>
          <Button borderRadius={"50%"} w={"80px"} h={"80px"} bgColor="#D9AE98">
            <Icon as={EmailIcon}></Icon>
          </Button>
        </Box>
        <Text
          color={"white"}
          className={styles.prata}
          fontSize={"48px"}
          pt={"15px"}
        >
          Subscribe To Our Newsletter
        </Text>
        <Text color={"white"}>
          Stay up to date with all our classes and class timings with our email
          newsletter.
          <br /> Never miss another session.
        </Text>
      </Box>
    </Box>
  );
};

export default Classes;
