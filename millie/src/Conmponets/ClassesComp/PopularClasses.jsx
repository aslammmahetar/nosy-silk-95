import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import styles from "./Styles/classes.module.css";

const PopularClasses = ({ classes }) => {
  return (
    <Box mt={"130px"}>
      <Text
        className={styles.wywg}
        pt={"15px"}
        textAlign={"left"}
        width={"80%"}
        m="auto"
        mt={"30px"}
      >
        Popular Classes
      </Text>
      <Flex width={"80%"} m="auto" justifyContent={"space-between"} p={"2"}>
        <Text textAlign={"left"}>
          Come and explore our huge range of classes <br /> with varying levels
          of difficulty, from beginner to expert.
        </Text>
        <Button
          borderRadius={"25"}
          w={"180px"}
          p={"7"}
          variant={"outline"}
          borderColor={"#d9ae98"}
        >
          View All Classes
        </Button>
      </Flex>
      <Card mt={"50px"}>
        <Box display={"flex"} flexDirection={"row"} width={"80%"} m="auto">
          {classes?.map((el) => {
            return (
              <Card key={el.id}>
                <CardBody>
                  <Image src={el.image} alt={el.title} borderRadius="lg" />
                  <Box textAlign={"left"} mt={"15px"}>
                    <Heading
                      as={"h2"}
                      size={"lg"}
                      className={styles.montserrat}
                    >
                      {el.title}
                    </Heading>
                    <Text>{el.description}</Text>
                  </Box>
                </CardBody>

                <CardFooter>
                  <Button
                    borderRadius={"15px"}
                    bgColor={"#d9ae98"}
                    colorScheme="blackAlpha"
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </Box>
      </Card>
    </Box>
  );
};

export default PopularClasses;
