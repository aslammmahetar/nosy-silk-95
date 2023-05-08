import React from "react";
import { Grid, GridItem, Text, Heading, Box, Card } from "@chakra-ui/react";
import styles from "./Styles/classes.module.css";

const YogaStyles = () => {
  return (
    <Box mt={"130px"}>
      <Box width={"80%"} m="auto">
        <Text size={"sm"} className={styles.h2}>
          YOGA STYLES
        </Text>
        <Text className={styles.wywg} pt={"15px"}>
          Explore The Styles Of Yoga
        </Text>
        <Card mt={"60px"}>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
          >
            <GridItem border={" 0.5px grey"} className={styles.gridItem}>
              <Text color={"#d9ae98"} as={"b"}>
                01.
              </Text>
              <Heading
                as={"h2"}
                size={"lg"}
                className={styles.montserrat}
                fontFamily={""}
              >
                Ashtanga
              </Heading>
              <Text>
                Created by John Friend, Anasura yoga is a modern take on
                traditional Hatha yoga
              </Text>
            </GridItem>
            <GridItem className={styles.gridItem}>
              <Text color={"#d9ae98"} as={"b"}>
                02.
              </Text>
              <Heading
                as={"h2"}
                size={"lg"}
                className={styles.montserrat}
                fontFamily={""}
              >
                Ashtanga
              </Heading>
              <Text>
                Vigorous and vital, Ashtanga is a great way to stay fit and
                healthy.
              </Text>
            </GridItem>
            <GridItem className={styles.gridItem}>
              <Text color={"#d9ae98"} as={"b"}>
                03.
              </Text>
              <Heading
                as={"h2"}
                size={"lg"}
                className={styles.montserrat}
                fontFamily={""}
              >
                Ashtanga
              </Heading>
              <Text>
                Invented by Indian yogi Bikram Choudhury Bikram is great if you
                love to sweat.
              </Text>
            </GridItem>
            <GridItem className={styles.gridItem}>
              <Text color={"#d9ae98"} as={"b"}>
                04.
              </Text>
              <Heading
                as={"h2"}
                size={"lg"}
                className={styles.montserrat}
                fontFamily={""}
              >
                Ashtanga
              </Heading>
              <Text>
                A gentle and traditional form of yoga that emphasizes stretching
                and physicality.
              </Text>
            </GridItem>
            <GridItem className={styles.gridItem}>
              <Text color={"#d9ae98"} as={"b"}>
                05.
              </Text>
              <Heading
                as={"h2"}
                size={"lg"}
                className={styles.montserrat}
                fontFamily={""}
              >
                Ashtanga
              </Heading>
              <Text>
                Get your sweat on and your stretch on at the same time with hot
                yoga.
              </Text>
            </GridItem>
            <GridItem className={styles.gridItem}>
              <Text color={"#d9ae98"} as={"b"}>
                06.
              </Text>
              <Heading
                as={"h2"}
                size={"lg"}
                className={styles.montserrat}
                fontFamily={""}
              >
                Ashtanga
              </Heading>
              <Text>
                Iyengar yoga is great for learning your poses using a range of
                props.
              </Text>
            </GridItem>
            <GridItem className={styles.gridItem}>
              <Text color={"#d9ae98"} as={"b"}>
                07.
              </Text>
              <Heading
                as={"h2"}
                size={"lg"}
                className={styles.montserrat}
                fontFamily={""}
              >
                Ashtanga
              </Heading>
              <Text>
                Simple poses to help heal the body and mind. Ideal for beginners
              </Text>
            </GridItem>
            <GridItem className={styles.gridItem}>
              <Text color={"#d9ae98"} as={"b"}>
                08.
              </Text>
              <Heading
                as={"h2"}
                size={"lg"}
                className={styles.montserrat}
                fontFamily={""}
              >
                Ashtanga
              </Heading>
              <Text>
                Instructor-led classes that can be quite fast-paced and
                challenging.
              </Text>
            </GridItem>
          </Grid>
        </Card>
      </Box>
    </Box>
  );
};

export default YogaStyles;
