import { Box, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./Styles/classes.module.css";

function HeadPoster() {
  return (
    <Box
      bgColor={"#D9AE98"}
      p={"70px"}
      backgroundImage={
        "url('https://millieyoga.com/wp-content/uploads/2020/09/mandala.svg')"
      }
      backgroundRepeat={"no-repeat"}
    >
      <Text
        as={"h1"}
        className={styles.prata}
        fontSize={{ base: "45px", sm: "45px", md: "100px", lg: "120px" }}
      >
        Classes
      </Text>
    </Box>
  );
}

export default HeadPoster;
