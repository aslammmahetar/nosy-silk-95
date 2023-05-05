//assign to lov
import React from 'react'
import { Last } from '../Conmponets/HomeComp/Last'
import { Footer } from '../Conmponets/HomeComp/Footer'
import { Brand } from '../Conmponets/HomeComp/Brand'
import {Navbar} from "../Conmponets/HomeComp/Navbar"
import { FeaturedR } from '../Conmponets/HomeComp/FeaturedR'
import { YogaIns } from '../Conmponets/HomeComp/YogaIns'
import { SecondTop } from '../Conmponets/HomeComp/SecondTop'
import { Video } from '../Conmponets/HomeComp/Video'
import { OurStudio } from '../Conmponets/HomeComp/OurStudio'
import { Style } from '../Conmponets/HomeComp/Style'
import { Top } from '../Conmponets/HomeComp/Top'

export const Home = () => {
  return (
    <div style={{backgroundColor:"#f6f4f2"}}>
        <Navbar/>
        <Top/>
        <Style/>
        <Video/>
        <OurStudio/>
        <YogaIns/>
        <FeaturedR/>
        <Brand/>
        <SecondTop/>
        <Last/>
        <Footer/>
    </div>
  )
}


// luv