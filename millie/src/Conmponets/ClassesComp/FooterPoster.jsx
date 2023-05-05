import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./Styles/classes.module.css";
import { EmailIcon, Icon } from "@chakra-ui/icons";

const FooterPoster = () => {
  return (
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
  );
};

export default FooterPoster;
