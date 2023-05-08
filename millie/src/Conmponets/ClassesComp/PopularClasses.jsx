import {
  Box,
  Flex,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Toast,
  Wrap,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import { auth, signin } from "../../FireBase/fireBase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";

const PopularClasses = ({ classes }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const data = JSON.parse(localStorage.getItem("token"));
  const navigateTo = () => {
    if (data == null) {
      return "";
    } else {
      return navigate("/classes/all-classes");
    }
  };

  const toast = useToast();

  const signINUser = () => {
    signInWithEmailAndPassword(signin, email, password)
      .then((res) => {
        if (res) {
          dispatch({ type: "GET TOKEN", payload: res.user.accessToken });
          navigate("/classes/all-classes");
          toast({
            title: `Login Successfully`,
            position: "top",
            isClosable: true,
            status: "success",
          });
          localStorage.setItem("token", JSON.stringify(res.user.accessToken));
        }
        console.log(res);
      })
      .catch((er) => {
        toast({
          title: `Login Failed`,
          position: "top",
          isClosable: true,
          status: "error",
        });
      });
  };
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
          onClick={!data ? onOpen : navigateTo}
        >
          View All Classes
        </Button>
        <Modal onClose={onClose} size={"lg"} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <Login
                email={email}
                setEmail={setEmail}
                password={password}
                setpassword={setpassword}
                signUpUser={signINUser}
              />
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
      <Card mt={"50px"}>
        <Grid
          w={"80%"}
          m={"auto"}
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
        >
          {classes?.map((el) => {
            return (
              <GridItem key={el.id} w={"100%"}>
                <Image src={el.image} alt={el.title} />
                <CardBody>
                  <Box textAlign={"left"} mt={"15px"}>
                    <Heading
                      as={"h2"}
                      size={"lg"}
                      className={styles.montserrat}
                      fontFamily={"montserrat"}
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
              </GridItem>
            );
          })}
        </Grid>
      </Card>
    </Box>
  );
};

export default PopularClasses;
