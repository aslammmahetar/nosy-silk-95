import {
  Box,
  Card,
  Input,
  FormControl,
  FormLabel,
  Text,
  Heading,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Button,
  Image,
} from "@chakra-ui/react";
import { Naavbar } from "../Conmponets/HomeComp/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function PaymentPage() {
  const { isPremium } = useSelector((store) => store.authreducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Hello Premium Member",
      description: "Enjoy our primium content from now.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: "GET PREMIUM" });
    navigate("/classes/all-classes");
  };
  return (
    <Box bgColor={"whitesmoke"}>
      <Naavbar />
      <Card
        m={"auto"}
        display={"flex"}
        flexDirection={"row"}
        mt={"10"}
        w={"70%"}
        justifyContent={"space-between"}
        // h={"100px"}
        p={3}
      >
        <Card w={"68%"} p={"3"} textAlign={"left"}>
          <Heading mb={"2"} as="h4" size="md">
            Your details
          </Heading>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input w={"55%"} type="text" placeholder="Enter your First Name" />
            <FormControl>
              <FormLabel>Surname</FormLabel>
              <Input w={"55%"} type="text" placeholder="Enter Your Last Name" />
            </FormControl>
            <FormControl>
              <FormLabel>Mobile Phone Number</FormLabel>
              <Input
                type="number"
                w={"55%"}
                placeholder="Enter your mobile number"
              />
            </FormControl>
          </FormControl>
        </Card>
      </Card>
      <Card
        // border={"solid black"}
        m={"auto"}
        display={"flex"}
        flexDir={"row"}
        w={"70%"}
        justifyContent={"space-between"}
        // h={"100px"}
        p={3}
      >
        <Box w={"70%"}>
          <Box>
            <Heading as="h4" size="md">
              Payment Method
            </Heading>
          </Box>
          <Box mt={"15px"}>
            <Tabs isFitted variant="enclosed">
              <TabList mb="1em">
                <Tab>Debit/Credit Card</Tab>
                <Tab>Net Banking</Tab>
              </TabList>
              <TabPanels>
                <TabPanel textAlign={"left"}>
                  <FormControl>
                    <FormLabel>Name On Card</FormLabel>
                    <Input type="text" />
                    <FormControl>
                      <FormLabel>Debit/Credit Card Number</FormLabel>
                      <Input w={"55%"} type="text" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Expiry date</FormLabel>
                      <Input type="number" w={"20%"} placeholder="Month" />
                      <Input type="number" w={"20%"} placeholder="Year" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Security code</FormLabel>
                      <Input type="number" w={"20%"} placeholder="CVV" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Pan</FormLabel>
                      <Input type="number" w={"50%"} placeholder="Pan Number" />
                    </FormControl>
                  </FormControl>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
              <Box textAlign={"center"} mt={"5"}>
                <Button colorScheme="yellow" onClick={showToast}>
                  Complete Booking
                </Button>
              </Box>
            </Tabs>
          </Box>
        </Box>
        <Box p={"2"} w={"30%"} mt={"10"}>
          <Heading mb={2} as="h4" size="md">
            Price Details
          </Heading>
          <hr />
          <Box mt={"14px"}>
            <Text>Taxes and services fees </Text>
            <Text textAlign={"right"}>₹899.69</Text>
          </Box>
          <hr />
          <Box display={"flex"} justifyContent={"space-between"} mt={"5"}>
            <Text as={"b"} fontSize={"2xl"}>
              Total
            </Text>
            <Text as={"b"} fontSize={"2xl"}>
              ₹899.69
            </Text>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
export default PaymentPage;
