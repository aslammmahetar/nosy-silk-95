//assign to ayush
import React from 'react';
import Feedback from '../Conmponets/TestimonialComp/Feedback';
import { TopSection } from '../Conmponets/TestimonialComp/TopSection';
// import { bottom } from '@popperjs/core';
import Bottom from '../Conmponets/TestimonialComp/Bottom';
import {NavbarTest} from '../Conmponets/TestimonialComp/NavbarTest'
import { Footer } from '../Conmponets/HomeComp/Footer';
import Rating from '../Conmponets/TestimonialComp/Rating';
// import "../Conmponets/TestimonialComp/"
export const Testimonial=()=>{
    return <div>
        <NavbarTest />
        <Rating />
        <TopSection />
        <Feedback />
        <Bottom />
       <Footer/>
    </div>
}