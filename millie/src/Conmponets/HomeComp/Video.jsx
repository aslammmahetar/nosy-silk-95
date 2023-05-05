import React from 'react'
import { Box, Button, Image } from '@chakra-ui/react'
import "../../style.css"
import {FaPlay} from "react-icons/fa"

export const Video = () => {
  return (
    <div className='video-img'>
        <Box borderRadius={"50px"} width={"5%"} id='play-btn' height={"11%"} display={"flex"} justifyContent={"center"} alignItems={"center"} backgroundColor={"black"}><FaPlay id='btn-play'  size={"25px"}/></Box>
        
    </div>
  )
}
