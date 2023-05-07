//assign to ayush
import React from 'react';
import Feedback from '../Conmponets/TestimonialComp/Feedback';
import { TopSection } from '../Conmponets/TestimonialComp/TopSection';
// import { bottom } from '@popperjs/core';
import Bottom from '../Conmponets/TestimonialComp/Bottom';
import { Naavbar } from '../Conmponets/HomeComp/Navbar';
import { Footer } from '../Conmponets/HomeComp/Footer';
export const Testimonial=()=>{
    return <div>
        <Naavbar/>
        <TopSection />
        <Feedback />
        <Bottom />
       <Footer/>
    </div>
}