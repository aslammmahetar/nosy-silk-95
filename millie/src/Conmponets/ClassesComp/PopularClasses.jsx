import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
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
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { auth } from "../../FireBase/fireBase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../Redux/store";

const PopularClasses = ({ classes }) => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const store = useSelector((store) => console.log(store));

  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const signUpUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      if (res) {
        setIsAuth(true);
        navigate("/classes/all-classes");
        dispatch({ type: "GET TOKEN", payload: res.tokenResponse.idToken });
      }
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
          onClick={onOpen}
        >
          View All Classes
        </Button>
        <Modal
          onClose={onClose}
          size={"lg"}
          isOpen={isAuth ? navigate("/classes/all-classes") : isOpen}
        >
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
