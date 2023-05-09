import {
  Box,
  Circle,
  Divider,
  Flex,
  Heading,
  Image,
  Img,
  Link,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import { Naavbar } from "../Conmponets/HomeComp/Navbar";
import "../Conmponets/AboutUsComp/AboutUs.css";
import { EmailIcon, Icon } from "@chakra-ui/icons";

import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";

//assign to sharad
function AboutUs() {
  return (
    <Box width={"100%"} bg={"#f3eeec"}>
      <Naavbar />

      {/* <---------------------------Yogs studios newYork session------------------------------------> */}

      <Box mt={"50px"}>
        <Box width={"100%"}>
          <Flex justifyContent={"space-around"} textAlign={"justify"}>
            <Box width={"30%"} padding={"20px"}>
              <Heading as="h2" textAlign={"justify"} className="heading">
                Yoga Studio in the City of New York
              </Heading>
            </Box>
            <Box width={"30%"} padding={"20px"}>
              <Text>
                We deliberately chose to put our new yoga studio in one of the
                busiest cities on the planet because we knew it would be the
                perfect place to help people relax and center themselves. City
                living can be stressful and hectic, and having access to a
                complete yoga studio can help people deal with those stresses
                and stay fit and healthy.
              </Text>
            </Box>
            <Box width={"30%"} padding={"20px"}>
              <Text>
                Our expansive studio has nine yoga classes every day covering a
                huge range of yoga styles, including Anusara, Ashtanga, Bikram,
                Hatha, Hot yoga, Lyengar, Restorative yoga, and Vinyasa. We have
                a full range of classes for every level of experience and offer
                specific beginner classes to get you started on your yoga
                journey.
              </Text>
            </Box>
          </Flex>
        </Box>

        {/* <--------------------------- Discover Session------------------------->*/}

        <Box mt={"50px"}>
          <Flex justifyContent={"space-around"}>
            <Box width={"40%"} pos={"relative"}>
              <Circle
                bg={"red"}
                size={"400px"}
                pos={"absolute"}
                top={"30px"}
                left={"10%"}
                zIndex={"-1"}
              ></Circle>
              <Image
                src={
                  "	https://millieyoga.com/wp-content/uploads/2020/09/yoga-studio-founder.png"
                }
              />
              <Image
                src="https://millieyoga.com/wp-content/uploads/2020/09/premium-salon-founder-siganture.svg"
                pos={"absolute"}
                top={"230px"}
                right={"0px"}
                w={"50%"}
              />
            </Box>
            <Box width={"40%"} mt={"50px"} textAlign={"left"}>
              <Divider w={"100px"} color={"red"} orientation="horizontal" />
              <Heading>
                “Yoga has been a hugely transformative and positive force in my
                life, so I made the decision to pass that positivity on by
                opening this yoga studio to allow others to experience how much
                yoga can add to your life.”
              </Heading>
              <br></br>
              <Text textStyle={"bold"}>HELENA HAYES</Text>
              <Text>Founder,Instructor</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box mt={"50px"} pos={"relative"}>
        <Img
          src="https://millieyoga.com/wp-content/uploads/2020/09/yoga-studio-discover-studio-bg.jpg"
          w={"100%"}
        />
        <Box
          w={"20%"}
          pos={"absolute"}
          bottom={"0px"}
          left={"30px"}
          bg={"orange.300"}
          padding={"30px"}
        >
          <Heading>Discover Our Yoga Studio</Heading>
          <br></br>
          <Text>
            Come down to our expansive downtown yoga studio and discover the
            benefits of yoga with one of our many classes.
          </Text>
          <br></br>
          <br></br>
          <Text>Discover Now</Text>
        </Box>
      </Box>

      {/* <--------------------------------- Certificates Session--------------------------------> */}

      <Box w={"100%"} p={"40px"}>
        {/* 
                https://millieyoga.com/wp-content/uploads/2020/09/example-logo-1.png
                https://millieyoga.com/wp-content/uploads/2020/09/example-logo-2.png
                https://millieyoga.com/wp-content/uploads/2020/09/example-logo-3.png
                https://millieyoga.com/wp-content/uploads/2020/09/example-logo-4.png
                */}
        <Flex>
          <Text color={"orange"} w={"20%"}>
            OUR CERTIFICATION
          </Text>
          <Flex w={"80%"} justifyContent={"space-around"}>
            <Image
              src="https://millieyoga.com/wp-content/uploads/2020/09/example-logo-1.png"
              alt="imge1"
            />
            <Image
              src=" https://millieyoga.com/wp-content/uploads/2020/09/example-logo-2.png"
              alt="imge1"
            />
            <Image
              src="https://millieyoga.com/wp-content/uploads/2020/09/example-logo-3.png"
              alt="imge1"
            />
            <Image
              src="https://millieyoga.com/wp-content/uploads/2020/09/example-logo-4.png"
              alt="imge1"
            />
          </Flex>
        </Flex>
      </Box>

      {/* <---------------------------Yoga Instructor session----------------------> */}

      <Box mt={"70px"}>
        <VStack>
          <Heading as={"h2"} mb={"80px"}>
            Yoga Instructors
          </Heading>

          <Flex mt={"40px"}>
            <Box>
              <Image
                src="https://millieyoga.com/wp-content/uploads/2020/09/yoga-studio-instructor-1.jpg"
                alt=""
              />
              <br></br>
              <Text>ELLEN SHERMAN</Text>
              <br></br>
              <Flex justifyContent={"center"} gap={"5px"}>
                <Link href="" isExternal>
                  <AiFillFacebook size={"18px"} />
                </Link>
                <Link href="" isExternal>
                  {" "}
                  <AiOutlineTwitter size={"18px"} />
                </Link>
                <Link
                  href="https://www.youtube.com/watch?v=sSiA25XlG_A"
                  isExternal
                >
                  {" "}
                  <AiFillYoutube size={"18px"} />
                </Link>
              </Flex>
            </Box>

            {/* <-------------------------News Setller Session---------------------> */}

            <Box>
              <Image
                src="https://millieyoga.com/wp-content/uploads/2020/09/yoga-studio-instructor-3.jpg"
                alt=""
              />
              <br></br>
              <Text>CHRISTINA LATHAM</Text>
              <br></br>
              <Flex justifyContent={"center"} gap={"5px"}>
                <Link href="" isExternal>
                  <AiFillFacebook size={"18px"} />
                </Link>
                <Link href="" isExternal>
                  {" "}
                  <AiOutlineTwitter size={"18px"} />
                </Link>
                <Link
                  href="https://www.youtube.com/watch?v=sSiA25XlG_A"
                  isExternal
                >
                  {" "}
                  <AiFillYoutube size={"18px"} />
                </Link>
              </Flex>
            </Box>
            <Box>
              <Image
                src=" https://millieyoga.com/wp-content/uploads/2020/09/yoga-studio-instructor-2.jpg"
                alt=""
              />
              <br></br>
              <Text>LUKE STRYKER</Text>
              <br></br>
              <Flex justifyContent={"center"} gap={"5px"}>
                <Link href="" isExternal>
                  <AiFillFacebook size={"18px"} />
                </Link>
                <Link href="" isExternal>
                  {" "}
                  <AiOutlineTwitter size={"18px"} />
                </Link>
                <Link
                  href="https://www.youtube.com/watch?v=sSiA25XlG_A"
                  isExternal
                >
                  {" "}
                  <AiFillYoutube size={"18px"} />
                </Link>
              </Flex>
            </Box>
            <Box>
              <Image
                src=" https://millieyoga.com/wp-content/uploads/2020/09/yoga-studio-instructor-4.jpg"
                alt=""
              />
              <br></br>
              <Text>GLORIA BENNER</Text>
              <br></br>
              <Flex justifyContent={"center"} gap={"5px"}>
                <Link href="" isExternal>
                  <AiFillFacebook size={"18px"} />
                </Link>
                <Link href="" isExternal>
                  {" "}
                  <AiOutlineTwitter size={"18px"} />
                </Link>
                <Link
                  href="https://www.youtube.com/watch?v=sSiA25XlG_A"
                  isExternal
                >
                  {" "}
                  <AiFillYoutube size={"18px"} />
                </Link>

                {/* <AiFillFacebook size={"18px"} />
            <AiOutlineTwitter size={"18px"} />
            <AiFillInstagram size={"18px"} />
            <AiFillYoutube size={"18px"} /> */}
              </Flex>
            </Box>
          </Flex>
        </VStack>
      </Box>

      <Box mt={"100px"} pos={"relative"}>
        {/* 	https://millieyoga.com/wp-content/uploads/2020/09/yoga-studio-cta-section-bg.jpg */}
        <Image src="	https://millieyoga.com/wp-content/uploads/2020/09/yoga-studio-cta-section-bg.jpg" />
        <Box pos={"absolute"} top={"50%"} left={"405"} textColor={"white"}>
          <Button borderRadius={"50%"} size={"sm"} bgColor="#D9AE98">
            <Icon as={EmailIcon}></Icon>
          </Button>

          <Heading>Subscribe To Our Newsletter</Heading>
          <br></br>
          <Text>
            Stay up to date with all our classes and class timings with our
            email newsletter.
          </Text>
          <Text>Never miss another session.</Text>
        </Box>
      </Box>
    </Box>
  );
}
export default AboutUs;
