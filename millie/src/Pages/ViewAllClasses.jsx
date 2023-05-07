import {
  Box,
  Card,
  Image,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Grid,
  GridItem,
  Text,
  Button,
  Flex,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  Modal,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Navbar } from "../Conmponets/HomeComp/Navbar";
import { getData } from "../Redux/ClassesReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { ViewIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Conmponets/HomeComp/Footer";
import defImage from "../Assets/20230507_145631.jpg";

const ViewAllClasses = () => {
  const { classes } = useSelector((store) => store.classesReducer);
  const { isPremium } = useSelector((store) => store.authreducer);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, setState] = useState(false);
  console.log(isPremium);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(8));
  }, []);

  const navigate = useNavigate();

  const handlePrimium = () => {};

  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <Box>
        <Heading>Our Classes</Heading>
        <Box>
          <Tabs isManual variant="enclosed" w={"80%"} m={"auto"}>
            <TabList>
              <Tab w={"50%"}>Free </Tab>
              <Tab onClick={handlePrimium} w={"50%"}>
                Premium !
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Grid templateColumns={"repeat(4, 1fr)"} gap={"5"}>
                  {classes?.map((el) => {
                    console.log(el);
                    return (
                      <Card key={el.id}>
                        <GridItem key={el.id}>
                          <Image src={el.image} borderRadius={4}></Image>
                          <Box>
                            <Text>{el.title}</Text>
                            <Button onClick={onOpen} m={5}>
                              <Flex
                                flexDirection={"row"}
                                justifyContent={"space-between"}
                              >
                                Watch Now <ViewIcon mt={0.5} ml={2} />
                              </Flex>
                            </Button>
                            <Modal
                              onClose={onClose}
                              isOpen={isOpen}
                              isCentered
                              size={"4xl"}
                            >
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader>Modal Title</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                  <iframe
                                    width="100%"
                                    height="315"
                                    src="https://www.youtube.com/embed/i7LJ-39bFgE"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                  ></iframe>
                                </ModalBody>
                                <ModalFooter>
                                  <Button onClick={onClose}>Close</Button>
                                </ModalFooter>
                              </ModalContent>
                            </Modal>
                          </Box>
                        </GridItem>
                      </Card>
                    );
                  })}
                </Grid>
              </TabPanel>
              <TabPanel>
                <Grid templateColumns={"repeat(4, 1fr)"} gap={"5"}>
                  {classes?.map((el) => {
                    console.log(el);
                    return (
                      <Card key={el.id}>
                        <GridItem key={el.id}>
                          <Image src={defImage} borderRadius={4}></Image>
                          <Box>
                            <Text>{el.title}</Text>
                            <Button
                              isDisabled={!isPremium}
                              onClick={onOpen}
                              m={5}
                            >
                              Watch Now <ViewIcon mt={0.5} ml={2} />
                            </Button>
                            <Modal
                              onClose={onClose}
                              isOpen={isOpen}
                              isCentered
                              size={"4xl"}
                            >
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader>Modal Title</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                  <iframe
                                    width="100%"
                                    height="315"
                                    src="https://www.youtube.com/embed/i7LJ-39bFgE"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                  ></iframe>
                                </ModalBody>
                                <ModalFooter>
                                  <Button onClick={onClose}>Close</Button>
                                </ModalFooter>
                              </ModalContent>
                            </Modal>
                          </Box>
                        </GridItem>
                      </Card>
                    );
                  })}
                </Grid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ViewAllClasses;
