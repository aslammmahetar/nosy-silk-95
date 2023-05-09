import { Box, Image, Heading, Text, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import "../../style.css"
import { FaLongArrowAltRight } from 'react-icons/fa'
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'


export const Top = () => {
    return (
        <Box display={"flex"} justifyContent={"space-between"} id='main-top'  padding={"50px 155px"} backgroundImage={"url('https://millieyoga.com/wp-content/uploads/2020/09/yoga-studio-hero-section-image-bg.png')"}  backgroundRepeat={"no-repeat"} backgroundPosition={"center"}  zIndex={"1000"} backgroundSize={"contain"}>
            <Box mt={"23%"}>
                <Heading fontSize={"104px"} fontWeight={400} fontFamily={"'Prata', serif"} mb={5}>Yoga <br /> Studio</Heading>
                <Text lineHeight={"30px"} mb={5}>Come and join us at our open and friendly downtime yoga <br /> studio and expect from the busy hustle and bustle of the <br /> city. Relax. Repair. Rejoice.</Text>
                <Flex id='top-last'>
                    <Button
                        borderRadius={"25"}
                        w={"190px"}
                        p={"6"}
                        variant={"outline"}
                        bgColor={"#d9ae98"}
                        color={"white"}
                        id='View-btn-top'
                       
                    >
                        Join Class Today
                    </Button>
                    <Text  ml={50} fontWeight={600} display={"flex"} alignItems={"center"} color={"black"} _hover={{ color: "#d9ae98" }}>Learn more <FaLongArrowAltRight style={{ marginLeft: "10px", marginTop: "2px" }} /></Text>
                </Flex>
            </Box>
            <Box mt={"45%"} id='top-logo'>
                <AiFillFacebook size={"18px"} />
                <br />
                <AiOutlineTwitter size={"18px"} />
                <br />
                <AiFillInstagram size={"18px"} />
                <br />
                <AiFillYoutube size={"18px"} />

            </Box>
        </Box>
    )
}
