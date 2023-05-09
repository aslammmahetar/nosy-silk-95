import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getfeedback } from '../../Redux/ClassesReducer/action';
import "../TestimonialComp/Feedback.css"
import {Star} from"./Star"



const Feedback = () => {

  const stars = [1, 2, 3, 4, 5];
  const dispatch  =useDispatch()
  const Feedbackdata=useSelector((store)=>(store.classesReducer.Feedbackdata))
  console.log(Feedbackdata)
 const [post,setPost]=useState(
  {
 
  image:"",
  star:"",
  name:"",
  comment:""
 
}
)
 
  
useEffect(()=>{
 dispatch( getfeedback())
  setPost(getfeedback())

},[post])

  return (

    <div className='f_div_1' id='qqq' >
       {
         Feedbackdata.map((el)=>{ 
        return <div id='qq' style={{textAlign:"initial",padding:"20px",width:"78%",marginBottom:"30px",margin:"auto",fontStyle:"",boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px",height:"auto"}}>
          <img style={{borderRadius:"50%",marginTop:"-70px"}} src={el.image} alt="" />
          <div class="flex-container">
        {stars.map((star, i) => (
         <div id="flex_cont" >
          
           <Star
            key={i}
            starId={i}
            rating={el.star}
          />

         </div>
        ))}
      </div>
        
          <p style={{fontFamily:"MV Boli"}}>{el.comment}</p>
          <h4 style={{marginTop:"20px",color:"#333333",fontFamily:"Comic Sans MS"}} >{el.name}</h4>
        </div>
        
        
         })
       }
      
     
    </div>
    
  )
}

export default Feedback
