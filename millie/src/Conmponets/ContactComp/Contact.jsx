import React from 'react'
import { Box, Divider, Flex, Heading, Text, Image } from '@chakra-ui/react'
// import { FiMail } from 'react-icons/fi'
import { IoHome, IoCall, IoMail } from "react-icons/io5"
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import "../../style.css"

export const Contact = () => {
    return (
        <>
        <div style={{ backgroundImage: "url('https://millieyoga.com/wp-content/uploads/2020/09/mandala.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "center", display: "flex", gap:"40px",padding:"0px 150px",marginTop:"100px" }}>
            <Box width={"100%"}  >
                <Heading fontSize={"100px"} fontWeight={400} fontFamily={"'Prata', serif"}>Contact</Heading>
                <Text className='text-color' lineHeight={"30px"}  fontFamily={"'Montserrat', sans-serif"} fontSize={"15px"}>To book a class, call us on the number below or come into the studio and book at the <br /> desk. For all other inquiries, please fill out the message box below and we’ll get back to you ASAP.</Text>
                <Divider borderTop={"1px solid #d9ae98"} width={"100%"} mt={10} mb={10} />
                <Box>
                    <Box>
                        <Flex>
                            <Box>
                                <div style={{ backgroundColor: "#d9ae98", marginTop: "5px", padding: "8px 12px", borderRadius: "100px" }}>
                                    <IoHome id='messege-logo' size={"20px"} style={{ marginTop: "3px" }} />
                                </div>
                            </Box>
                            <Box ml={5}>
                                <Text color={"#d9ae98"} mb={3} fontSize={"14px"} fontWeight={"600"} fontFamily={"'Montserrat', sans-serif"}>OUR LOCATION</Text>
                                <Heading fontSize={"40px"} fontWeight={400} fontFamily={"'Prata', serif"}>123 Fifth Avenue, New York, <br /> NY 12004, USA.</Heading>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
                <Divider borderTop={"1px solid #d9ae98"} width={"100%"} mt={10} mb={10}/>
                <Box>
                    <Box display={"flex"} justifyContent={"space-between"}>
                        <Flex>
                            <Box>
                                <div style={{ backgroundColor: "#d9ae98", marginTop: "5px", padding: "8px 12px", borderRadius: "50px" }}>
                                    <IoCall id='messege-logo' size={"20px"} style={{ marginTop: "3px" }} />
                                </div>
                            </Box>
                            <Box ml={5}>
                                <Text color={"#d9ae98"} mb={3} fontSize={"14px"} fontWeight={"600"} fontFamily={"'Montserrat', sans-serif"}>CALL US</Text>
                                <Heading fontSize={"20px"} fontWeight={400} fontFamily={"'Prata', serif"}>+1 123 456 78 90</Heading>
                            </Box>
                        </Flex>
                        <Flex>
                            <Box>
                                <div style={{ backgroundColor: "#d9ae98", marginTop: "5px", padding: "8px 12px", borderRadius: "50px" }}>
                                    <IoMail id='messege-logo' size={"20px"} style={{ marginTop: "3px" }} />
                                </div>
                            </Box>
                            <Box ml={5}>
                                <Text color={"#d9ae98"} mb={3} fontSize={"14px"} fontWeight={"600"} fontFamily={"'Montserrat', sans-serif"}>EMAIL US</Text>
                                <Heading fontSize={"20px"} fontWeight={400} fontFamily={"'Prata', serif"}>luvkumar120169@gmail.com</Heading>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
                <Divider borderTop={"1px solid #d9ae98"} width={"100%"} mt={10} mb={2}/>
                <Box  display={"flex"} alignItems={"center"} gap={"40px"}>
                    <Text fontSize={"14px"} fontWeight={"600"} fontFamily={"'Montserrat', sans-serif"}>KEEP IN TOUCH</Text>
                    <div style={{ display: 'flex', justifyContent: "center", gap: "20px"}}>
                        <AiFillFacebook size={"18px"} />
                        <AiOutlineTwitter size={"18px"} />
                        <AiFillInstagram size={"18px"} />
                        <AiFillYoutube size={"18px"} />
                    </div>

                </Box>
                
            </Box>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Image width={"90%"} height={"90%"}  src={"https://images.unsplash.com/photo-1562088287-bde35a1ea917?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"} />
            </Box>

        </div>
        <Divider borderTop={"1px solid #d9ae98"} width={"100%"} mt={5} mb={5}/>
        </>
    )
}
