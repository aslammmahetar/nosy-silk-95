//assign to lov
import React from 'react'
import { Last } from '../Conmponets/HomeComp/Last'
import { Footer } from '../Conmponets/HomeComp/Footer'
import { Brand } from '../Conmponets/HomeComp/Brand'
import {Navbar} from "../Conmponets/HomeComp/Navbar"

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <Brand/>
        <Last/>
        <Footer/>
    </div>
  )
}
