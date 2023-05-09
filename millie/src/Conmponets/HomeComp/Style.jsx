import { Box, Flex, Heading, Text, Button, Grid } from '@chakra-ui/react'
import React from 'react'
import "../../style.css"

export const Style = () => {
    return (
        <Grid justifyContent={"space-evenly"}  p={"20px 100px"} mt={10} backgroundImage={"url('https://millieyoga.com/wp-content/uploads/2020/09/mandala.svg')"} backgroundRepeat={"no-repeat"} id='style-div' >
            <Box>
                <Heading fontSize={"32px"} fontWeight={400} fontFamily={"'Prata', serif"} mb={10}>Many Styles Of Yoga <br /> To Suit Everyone</Heading>
                <Text className='text-color' lineHeight={"30px"} display={"flex"} gap={"5px"}  mb={10}  fontSize={"16px"} alignItems={"center"}>Yoga isn’t a monolith, there’s a style of yoga to <br /> suit the needs of each individual.</Text>
                <Button
                    borderRadius={"25"}
                    w={"190px"}
                    p={"6"}
                    variant={"outline"}
                    borderColor={"#d9ae98"}
                    id='View-btn'
                >
                    Learn More
                </Button>

            </Box>
            <Box lineHeight={"30px"} >
                <Box mb={10}>
                    <Text mb={3} fontWeight={"700"} fontFamily={"'Montserrat', sans-serif"}>ANUSARA</Text>
                    <Text className='text-color'>Created by John Friend, Anasura yoga is a <br /> modern take on traditional Hatha yoga.</Text>
                </Box>
                <Box mb={10}>
                    <Text mb={3} fontWeight={"600"} fontFamily={"'Montserrat', sans-serif"}>ASHTANGA</Text>
                    <Text className='text-color'>Vigorous and vital, Ashtanga is a great way <br /> to stay fit and healthy.</Text>
                </Box>
                <Box mb={10}>
                    <Text mb={3} fontWeight={"600"} fontFamily={"'Montserrat', sans-serif"}>BIKRAM</Text>
                    <Text>Invented by Indian yogi Bikram <br /> Choudhury, Bikram is great if you love to <br /> sweat.</Text>
                </Box>
                <Box mb={10}>
                    <Text mb={3} fontWeight={"600"} fontFamily={"'Montserrat', sans-serif"}>HATHA</Text>
                    <Text className='text-color'>A gentle and traditional form of yoga that <br /> emphasizes stretching and physicality.</Text>
                </Box>

            </Box>
            <Box lineHeight={"30px"}>
                <Box mb={10}>
                    <Text mb={3} fontWeight={"600"} fontFamily={"'Montserrat', sans-serif"}>HOT YOGA</Text>
                    <Text className='text-color'>Get your sweat on and your stretch on at <br /> the same time with hot yoga.</Text>
                </Box>
                <Box mb={10}>
                    <Text mb={3} fontWeight={"600"} fontFamily={"'Montserrat', sans-serif"}>IYENGAR</Text>
                    <Text className='text-color'>Iyengar yoga is great for learning your <br /> poses using a range of props.</Text>
                </Box>
                <Box mb={10}>
                    <Text mb={3} fontWeight={"600"} fontFamily={"'Montserrat', sans-serif"}>RESTORATIVE</Text>
                    <Text className='text-color'>Simple poses to help heal the body and <br /> mind. Ideal for beginners</Text>
                </Box>
                <Box mb={10}>
                    <Text mb={3} fontWeight={"600"} fontFamily={"'Montserrat', sans-serif"}>VINYASA</Text>
                    <Text className='text-color'>Instructor-led classes that can be quite <br /> fast-paced and challenging.</Text>
                </Box>

            </Box>
        </Grid>
    )
}
