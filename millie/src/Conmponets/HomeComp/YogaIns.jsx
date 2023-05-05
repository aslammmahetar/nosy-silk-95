import { Box, Flex, Heading,Image,Text } from '@chakra-ui/react'
import React from 'react'
import {AiFillFacebook,AiOutlineTwitter,AiFillYoutube} from "react-icons/ai"

export const YogaIns = () => {
  return (
    <div style={{marginTop:"60px",textAlign:"center"}}>
        <Heading fontSize={"32px"} fontWeight={400} fontFamily={"'Prata', serif"}>Yoga Instructors</Heading>
        <Flex justifyContent={"center"} mt={70} mb={70}>
            <Box>
                <Image mb={5} src="https://millieyoga.com/wp-content/uploads/2020/09/yoga-studio-instructor-1.jpg"/>
                <Text  mb={5} fontFamily={"'Montserrat', sans-serif"} fontSize={"14px"}>ELLEN SHERMAN</Text>
                <Flex mb={5} alignItems={"center"} justifyContent={"center"} gap={"20px"}>
                    <AiFillFacebook/>
                    <AiOutlineTwitter/>
                    <AiFillYoutube/>
                </Flex>
            </Box>
            <Box>
                <Image mb={5} src="https://millieyoga.com/wp-content/uploads/2020/09/yoga-studio-instructor-3.jpg"/>
                <Text  mb={5} fontFamily={"'Montserrat', sans-serif"} fontSize={"14px"}>CHRISTINA LATHAM</Text>
                <Flex mb={5} alignItems={"center"} justifyContent={"center"} gap={"20px"}>
                    <AiFillFacebook/>
                    <AiOutlineTwitter/>
                    <AiFillYoutube/>
                </Flex>
            </Box>
            <Box>
                <Image mb={5} src="https://millieyoga.com/wp-content/uploads/2020/09/yoga-studio-instructor-2.jpg"/>
                <Text  mb={5} fontFamily={"'Montserrat', sans-serif"} fontSize={"14px"}>LUKE STRYKER</Text>
                <Flex mb={5} alignItems={"center"} justifyContent={"center"} gap={"20px"}>
                    <AiFillFacebook/>
                    <AiOutlineTwitter/>
                    <AiFillYoutube/>
                </Flex>
            </Box>
            <Box>
                <Image mb={5} src="https://millieyoga.com/wp-content/uploads/2020/09/yoga-studio-instructor-4.jpg"/>
                <Text  mb={5} fontFamily={"'Montserrat', sans-serif"} fontSize={"14px"}>GLORIA BENNER</Text>
                <Flex mb={5} alignItems={"center"} justifyContent={"center"} gap={"20px"}>
                    <AiFillFacebook/>
                    <AiOutlineTwitter/>
                    <AiFillYoutube/>
                </Flex>
            </Box>
        </Flex>
    </div>
  )
}
