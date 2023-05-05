import { Flex,Text,Image } from '@chakra-ui/react'
import React from 'react'

export const Brand = () => {
  return (
    <Flex backgroundColor={"white"} justifyContent={"center"} alignItems={"center"} height={"120px"} gap={"150px"}>
        <Text color={"#d9ae98"} fontWeight={500}>OUR CERTIFICATION</Text>
        <Image src='https://millieyoga.com/wp-content/uploads/2020/09/example-logo-1.png' alt='fv'/>
        <Image src='https://millieyoga.com/wp-content/uploads/2020/09/example-logo-2.png' alt='fv'/>
        <Image src='https://millieyoga.com/wp-content/uploads/2020/09/example-logo-3.png' alt='fv'/>
        <Image src='https://millieyoga.com/wp-content/uploads/2020/09/example-logo-4.png' alt='fv'/>
    </Flex>
  )
}
