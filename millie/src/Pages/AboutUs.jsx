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
  Grid,
} from "@chakra-ui/react";
import { Naavbar } from "../Conmponets/HomeComp/Navbar";
import "../Conmponets/AboutUsComp/AboutUs.css";
import { EmailIcon, Icon } from "@chakra-ui/icons";
import styles from "../Conmponets/ClassesComp/Styles/classes.module.css";
import locations from "../Assets/yogas_locations.png";
import { useNavigate } from "react-router-dom";

import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { Footer } from "../Conmponets/HomeComp/Footer";

//assign to sharad
function AboutUs() {
  const navigate = useNavigate();

  const handleChange = () => {
    return navigate("/classes");
  };

  return (
    <Box width={"100%"} bg={"#f3eeec"}>
      <Naavbar bgColor={"#D9AE98"} />

      <Box
        bgColor={"#D9AE98"}
        p={"70px"}
        backgroundImage={
          "url('https://millieyoga.com/wp-content/uploads/2020/09/mandala.svg')"
        }
        backgroundRepeat={"no-repeat"}
      >
        <Text
          as={"h1"}
          className={styles.prata}
          fontSize={{ base: "45px", sm: "45px", md: "100px", lg: "120px" }}
        >
          About Us
        </Text>
      </Box>

      {/* <---------------------------Yogs studios newYork session------------------------------------> */}

      <Box mt={"50px"}>
        <Box width={"100%"}>
          <Flex
            direction={{ base: "column", md: "coloum", lg: "row" }}
            justifyContent={{ base: "space-around", md: "justify" }}
            textAlign={{ base: "center", lg: "justify" }}
          >
            <Box
              width={{ base: "100%", md: "80%", lg: "30%" }}
              padding={"20px"}
            >
              <Heading
                as="h3"
                fontFamily="montserrat"
                textAlign={{ base: "center", md: "justify" }}
                size="lg"
              >
                Yoga Studio in the City of New York
              </Heading>
              <Link
                href="https://www.google.co.in/maps/search/yoga+studios+in+new+york/@40.7777175,-73.9290838,11.23z"
                isExternal
              >
                <Img src={locations} />
              </Link>
            </Box>

            <Box
              width={{ base: "100%", md: "80%", lg: "30%" }}
              padding={"20px"}
            >
              <Text>
                We deliberately chose to put our new yoga studio in one of the
                busiest cities on the planet because we knew it would be the
                perfect place to help people relax and center themselves. City
                living can be stressful and hectic, and having access to a
                complete yoga studio can help people deal with those stresses
                and stay fit and healthy.
              </Text>
            </Box>

            <Box
              width={{ base: "100%", md: "80%", lg: "30%" }}
              padding={"20px"}
            >
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
          <Flex
            direction={{ base: "column", md: "coloum", lg: "row" }}
            justifyContent={{ base: "space-around", md: "justify" }}
            textAlign={{ base: "center", lg: "justify" }}
          >
            <Box
              pos={"relative"}
              width={{ base: "100%", md: "80%", lg: "40%" }}
            >
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
            <Box
              width={{ base: "100%", md: "80%", lg: "40%" }}
              mt={"50px"}
              textAlign={"left"}
            >
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
          pos={"absolute"}
          width={{ base: "100%", sm: "80%", md: "40%", lg: "20%" }}
          bottom={"0px"}
          left={"30px"}
          bg={"orange.300"}
          padding={"30px"}
        >
          <Heading>
            {" "}
            <Text>Discover Our Yoga Studio</Text>
          </Heading>

          <br></br>
          <Text>
            Come down to our expansive downtown yoga studio and discover the
            benefits of yoga with one of our many classes.
          </Text>
          <br></br>
          <br></br>
          <Link>
            <Text onClick={handleChange} cursor={"pointer"}>
              {" "}
              Discover Now
            </Text>
          </Link>
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
          <Text color={"orange"} w={{ base: "80%", md: "50%", lg: "20%" }}>
            OUR CERTIFICATION
          </Text>

          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            columnGap={"100px"}
            mb={{ base: "60px", sm: "50px", md: "20px", lg: "0px" }}
          >
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
          </Grid>
        </Flex>
      </Box>

      {/* <---------------------------Yoga Instructor session----------------------> */}

      <Box mt={"70px"}>
        <Heading
          fontSize={"32px"}
          fontWeight={400}
          fontFamily={"'Prata', serif"}
        >
          Yoga Instructors
        </Heading>
        <Grid
          id="yoga-ins"
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
        >
          <Box>
            <Image
              mb={5}
              src="https://millieyoga.com/wp-content/uploads/2020/09/yoga-studio-instructor-1.jpg"
            />
            <Text
              mb={5}
              fontFamily={"'Montserrat', sans-serif"}
              fontSize={"14px"}
            >
              ELLEN SHERMAN
            </Text>
            <Flex
              mb={5}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"20px"}
            >
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
              mb={5}
              src="https://millieyoga.com/wp-content/uploads/2020/09/yoga-studio-instructor-3.jpg"
            />
            <Text
              mb={5}
              fontFamily={"'Montserrat', sans-serif"}
              fontSize={"14px"}
            >
              CHRISTINA LATHAM
            </Text>
            <Flex
              mb={5}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"20px"}
            >
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
              mb={5}
              src="https://millieyoga.com/wp-content/uploads/2020/09/yoga-studio-instructor-2.jpg"
            />
            <Text
              mb={5}
              fontFamily={"'Montserrat', sans-serif"}
              fontSize={"14px"}
            >
              LUKE STRYKER
            </Text>
            <Flex
              mb={5}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"20px"}
            >
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
              mb={5}
              src="https://millieyoga.com/wp-content/uploads/2020/09/yoga-studio-instructor-4.jpg"
            />
            <Text
              mb={5}
              fontFamily={"'Montserrat', sans-serif"}
              fontSize={"14px"}
            >
              GLORIA BENNER
            </Text>
            <Flex
              mb={5}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"20px"}
            >
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
        </Grid>
      </Box>

      <Box mt={"100px"} pos={"relative"}>
        {/* 	https://millieyoga.com/wp-content/uploads/2020/09/yoga-studio-cta-section-bg.jpg */}
        <Image src="	https://millieyoga.com/wp-content/uploads/2020/09/yoga-studio-cta-section-bg.jpg" />
        <Box pos={"absolute"} top={"50%"} left={"405"} textColor={"white"}>
          <Button borderRadius={"50%"} size={"sm"} bgColor="#D9AE98">
            <Icon as={EmailIcon}></Icon>
          </Button>

          <Heading className={styles.prata}>
            Subscribe To Our Newsletter
          </Heading>

          <br></br>
          <Text>
            Stay up to date with all our classes and class timings with our
            email newsletter.
          </Text>
          <Text>Never miss another session.</Text>
        </Box>
      </Box>

      <Footer/>
    </Box>
  );
}
export default AboutUs;
