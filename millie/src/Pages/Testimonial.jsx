//assign to ayush
import React from 'react';
import Feedback from '../Conmponets/TestimonialComp/Feedback';
import { TopSection } from '../Conmponets/TestimonialComp/TopSection';
// import { bottom } from '@popperjs/core';
import Bottom from '../Conmponets/TestimonialComp/Bottom';
import { Navbar } from '../Conmponets/HomeComp/Navbar';
import { Footer } from '../Conmponets/HomeComp/Footer';
export const Testimonial=()=>{
    return <div>
        <Navbar/>
        <TopSection />
        <Feedback />
        <Bottom />
       <Footer/>
    </div>
}