import React from 'react'

// import google from "../../Assets/google.png";
import "../TestimonialComp/Rating.css";
const Rating = () => {
  return (
<div id="rate_div" >  
    <div>
      <h1 id='testimonial_div'>Testimonial</h1>
    </div>
    <div id='rating_div_1'>
      <div className='r_div_b'>
        <div><h1 className='img'>4.7</h1></div>
        <div className='div_c'><h3>4.9/5</h3> <p>567 reviews</p></div>
      </div>
      <div className='r_div_b'>
        <div><h1 className='img'>G+</h1></div>
        <div className='div_c'><h3>4.8/5</h3> <p>123 reviews</p></div>
      </div>    
      <div 
      className='r_div_b'>
        <div><h1  className='img'>G+</h1></div>
        <div className='div_c'><h3>4.7/5</h3> <p>567 reviews</p></div>
      </div>
      <div  className='r_div_b' >
        <div><h1 className='img'>G+</h1></div>
        <div className='div_c'><h3>4.8/5</h3> <p>567 reviews</p></div>
      </div>
    </div></div>
  )
}

export default Rating
