import {
  Box,
  Button,
  Divider,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Box p={4} w={"460px"} boxShadow="md" m={"auto"} mt="30px">
      <Stack spacing={"15px"} pr={4}>
        <Heading>Sign In</Heading>
        <Divider></Divider>
        <Button
          colorScheme={"blue"}
          w="100%"
          p={6}
          //   onClick={SigninWthGoogle}
        >
          <Image
            //   src={img}
            borderRadius="5px"
            mr={"1"}
            w="30px"
          ></Image>
          Sign in with google
        </Button>
        <Text textAlign={"center"}>Or</Text>
        <InputGroup>
          <InputLeftElement
            mt={3}
            pointerEvents="none"
            // children={<EmailIcon color="gray.300" />}
          />
          <Input
            type="emial"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            pt={7}
            pb="7"
            isRequired
          />
        </InputGroup>
        <InputGroup size="md">
          <Input
            // value={password}
            // onChange={(e) => setpassword(e.target.value)}
            pr="4.5rem"
            // type={show ? "text" : "password"}
            placeholder="Enter password"
            p={7}
            isRequired
          />
          <InputRightElement width="4.5rem">
            {/* <ViewIcon mt={5} h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </ViewIcon> */}
          </InputRightElement>
        </InputGroup>
        <Box>
          <Text>
            By signing in, I agree to the Immortal Yoga Term and Conditions,
            Privacy Statement.
          </Text>
        </Box>
        <Button
          w={"100%"}
          colorScheme="blue"
          //   isDisabled={email === "" && password === ""}
          //   onClick={signUpUser}
        >
          Sign In
        </Button>
        <Stack textAlign={"center"} direction="column">
          <Text>Forgot password?</Text>
          <Text>
            Don't have an account?{" "}
            <Link to={"/createaccount"}> Create one </Link>
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Login;
