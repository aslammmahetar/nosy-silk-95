import React from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Grid,
} from "@chakra-ui/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import "../../style.css";

export const SecondTop = () => {
  return (
    <Box mt={"130px"}>
      <Text
        //   className={styles.wywg}
        pt={"15px"}
        textAlign={"left"}
        width={"80%"}
        m="auto"
        mt={"30px"}
        fontSize={"50px"}
        fontWeight={400}
        fontFamily={"'Prata', serif"}
      >
        Popular Classes
      </Text>
      <Flex id="second-top-sec-btn" width={"80%"} m="auto" justifyContent={"space-between"}>
        <Text textAlign={"left"} className="text-color">
          We offer a full range of classes to suit any level of yoga experience,
          from <br /> beginner to seasoned veteran, and any range of mobility.
        </Text>
        <Button
          borderRadius={"25"}
          w={"180px"}
          p={"6"}
          variant={"outline"}
          borderColor={"#d9ae98"}
          id="View-btn"
        >
          View All Classes
        </Button>
      </Flex>
      <Grid id={"second-Tos-Sec"} width={"80%"} m={"auto"} mt={50} mb={75}>
        <Card w={"100%"} id="card">
          <Image
            src="https://millieyoga.com/wp-content/uploads/2020/09/yoga-studio-popular-class-1.jpg"
            alt="Green double couch with wooden legs"
          />
          <CardBody>
            <Stack mt="6" spacing="3" textAlign={"left"}>
              <Heading fontFamily={"'Montserrat', sans-serif"} size="md">
                Bend & Stretch
              </Heading>
              <Text className="text-color">
                Loosen up and work out the day’s tension
              </Text>
              <br />
              <Text display={"flex"} alignItems={"center"} color={"#d9ae98"}>
                Learn more{" "}
                <FaLongArrowAltRight style={{ marginLeft: "10px" }} />
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card w={"100%"} id="card">
          <Image
            src="https://millieyoga.com/wp-content/uploads/2020/09/yoga-studio-popular-class-2.jpg"
            alt="Green double couch with wooden legs"
          />
          <CardBody>
            <Stack mt="6" spacing="3" textAlign={"left"}>
              <Heading fontFamily={"'Montserrat', sans-serif"} size="md">
                Rise & Shine
              </Heading>
              <Text className="text-color">
                Get the blood pumping and prep <br /> your mind for the day
                ahead
              </Text>
              <br />
              <Text display={"flex"} alignItems={"center"} color={"#d9ae98"}>
                Learn more{" "}
                <FaLongArrowAltRight style={{ marginLeft: "10px" }} />
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card w={"100%"} id="card">
          <Image
            src="https://millieyoga.com/wp-content/uploads/2020/09/yoga-studio-popular-class-3.jpg"
            alt="Green double couch with wooden legs"
          />
          <CardBody>
            <Stack mt="6" spacing="3" textAlign={"left"}>
              <Heading fontFamily={"'Montserrat', sans-serif"} size="md">
                Foundation in Flow
              </Heading>
              <Text className="text-color">
                Get back to your roots with the <br /> intensive yoga-flow
                session
              </Text>
              <br />
              <Text display={"flex"} alignItems={"center"} color={"#d9ae98"}>
                Learn more{" "}
                <FaLongArrowAltRight style={{ marginLeft: "10px" }} />
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card w={"100%"} id="card">
          <Image
            src="https://millieyoga.com/wp-content/uploads/2020/09/yoga-studio-popular-class-4.jpg"
            alt="Green double couch with wooden legs"
          />
          <CardBody>
            <Stack mt="6" spacing="3" textAlign={"left"}>
              <Heading fontFamily={"'Montserrat', sans-serif"} size="md">
                Vinyasa for Vitality
              </Heading>
              <Text className="text-color">
                Refocus your vitality in this <br /> partner’s Vinyasa yoga
                class.
              </Text>
              <br />
              <Text display={"flex"} alignItems={"center"} color={"#d9ae98"}>
                Learn more{" "}
                <FaLongArrowAltRight style={{ marginLeft: "10px" }} />
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
};
