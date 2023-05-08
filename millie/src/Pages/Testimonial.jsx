//assign to ayush
import React from 'react';
import Feedback from '../Conmponets/TestimonialComp/Feedback';
import { TopSection } from '../Conmponets/TestimonialComp/TopSection';
import Bottom from '../Conmponets/TestimonialComp/Bottom';
import { Navbar } from '../Conmponets/HomeComp/Navbar';
import { Footer } from '../Conmponets/HomeComp/Footer';
import Rating from '../Conmponets/TestimonialComp/Rating';
import Addfeedback from '../Conmponets/TestimonialComp/Addfeedback';
export const Testimonial=()=>{
    return <div>
       
          <Navbar bgColor={"#d9ae98"} />
          <Rating />
          <TopSection />
          <Feedback />
          <Addfeedback/>
          <Bottom />
          <Footer/>
          
    </div>
}