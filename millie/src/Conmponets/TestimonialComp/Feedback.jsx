import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { getFeedback } from '../../Utils/api';


const Feedback = () => {
    // console.log(getFeedback())
const [feed,setFeedback] =useState([]);
useEffect(()=>{
getFeedback().then((res)=>{
    console.log(res)
    setFeedback(res)
})
},[])
// console.log(feed)
  return (
    <div className='f_div_1'>
         
    </div>
  )
}

export default Feedback
