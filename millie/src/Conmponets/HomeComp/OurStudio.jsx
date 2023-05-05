import { Box, Text, Heading, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { BsBoxArrowUpRight } from "react-icons/bs"
import { MdLocationOn } from "react-icons/md"

export const OurStudio = () => {
    return (
        <>
        <Text color={"#d9ae98"} fontSize={"15px"} fontFamily={"'Montserrat', sans-serif"} pt={"140px"} mb={5} ml={"175px"}>OUR STUDIO</Text>
            <Flex justifyContent={"space-around"} padding={"0px 40px"} >
                
                <Box>

                    <Heading fontSize={"48px"} fontWeight={400} fontFamily={"'Prata', serif"} mb={10}>Yoga Studio in the <br /> City of New York</Heading>
                    <Text display={"flex"} gap={"5px"} fontWeight={"600"} mb={10} fontFamily={"'Lato', sans-serif"} fontSize={"16px"} alignItems={"center"}><MdLocationOn color='#d9ae98' /> 123 5th Avenue, New York, NY 12004, USA.</Text>
                    <Button
                        borderRadius={"25"}
                        w={"190px"}
                        p={"6"}
                        variant={"outline"}
                        borderColor={"#d9ae98"}
                        id='View-btn'
                    >
                        Find Us On Map <BsBoxArrowUpRight style={{ fontWeight: "600", marginLeft: "10px" }} />
                    </Button>
                </Box>
                <Box>
                    <Text mb={"32px"} fontFamily={"'Lato', sans-serif"} fontSize={"16px"} lineHeight={"30px"} className='text-color'>The city outside might be one of the biggest in the world and it might <br /> never sleep, but the inside of our beautifully appointed yoga studio is <br /> a haven of calm and peaceful relaxation.</Text>
                    <Text mb={"32px"} fontFamily={"'Lato', sans-serif"} fontSize={"16px"} lineHeight={"30px"} className='text-color'>Come and join one of our beginner classes to learn the basics of yoga <br /> and what it can do to improve your physical health and mental well- <br /> being.</Text>
                    <Text mb={"32px"} fontFamily={"'Lato', sans-serif"} fontSize={"16px"} lineHeight={"30px"} className='text-color'>We also offer a huge range of different types of yoga classes to suit <br /> any level of student, all led by experienced instructors. Learn to let go <br /> of your care and strengthen your connection with your body in our <br />
                        award-winning studio.</Text>
                </Box>

            </Flex>
            </>
    )
}
