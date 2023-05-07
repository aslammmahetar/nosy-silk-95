import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
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
import { auth } from "../../FireBase/fireBase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";

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

  const signUpUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      if (res) {
        dispatch({ type: "GET TOKEN", payload: res._tokenResponse.idToken });
        navigate("/classes/all-classes");
      }
      localStorage.setItem("token", JSON.stringify(res._tokenResponse.idToken));
      console.log(res);
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
                signUpUser={signUpUser}
              />
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
      <Card mt={"50px"}>
        <Box display={"flex"} flexDirection={"row"} width={"80%"} m="auto">
          {classes?.map((el) => {
            return (
              <Card key={el.id} w={"100%"}>
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
              </Card>
            );
          })}
        </Box>
      </Card>
    </Box>
  );
};

export default PopularClasses;
