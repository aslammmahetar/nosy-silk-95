//rename this file with your component folder and start working
import React from "react";
import { Box, Button, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import styles from "./Styles/classes.module.css";

function RightSection() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"flex-end"}
      textAlign={"left"}
      width={"50%"}
    >
      <Text size={"sm"} className={styles.h2}>
        Yoga For Everyone
      </Text>
      <Box>
        <Text className={styles.wywg} pt={"15px"}>
          What You Will Get
        </Text>
        <Text>
          Yoga offers a huge range of benefits to its practitioners, from better
          physical health and flexibility to greater mental wellbeing and the
          ability to deal with stress.
        </Text>
      </Box>
      <br />
      <Grid templateColumns="repeat(2, 1fr)" gap={10}>
        <GridItem>
          <Box>
            <Text letterSpacing={"3px"} size={"sm"} as={"b"}>
              IMPROVE FLEXIBILITY
            </Text>
            <Text>
              Get in touch with how your body works and learn to become more
              flexible.
            </Text>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Text letterSpacing={"3px"} size={"sm"} as={"b"}>
              MUSCLES STRENGTH
            </Text>
            <Text>Learn to build amazing core strength and endurance.</Text>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Text letterSpacing={"3px"} size={"sm"} as={"b"}>
              PERFECTS POSTURE
            </Text>
            <Text noOfLines={3}>
              Banish back pain by learning how to sit the way your spine wants
              you to.
            </Text>
          </Box>
        </GridItem>{" "}
        <GridItem>
          <Box>
            <Text letterSpacing={"3px"} size={"sm"} as={"b"}>
              INCREASE BLOOD FLOW
            </Text>
            <Text>
              Keep both your mind and heart-healthy with regular gentle
              exercise.
            </Text>
          </Box>
        </GridItem>
      </Grid>
      <Button
        width={"30%"}
        mb={"30px"}
        mt={"25px"}
        borderRadius={"15px"}
        bgColor={"#d9ae98"}
        colorScheme="blackAlpha"
      >
        Join Our Classes
      </Button>
    </Box>
  );
}

export default RightSection;
