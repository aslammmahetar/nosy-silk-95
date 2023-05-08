import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getfeedback } from '../../Redux/ClassesReducer/action';

// import { getFeedback } from '../../Utils/api'; 


const Feedback = () => {


  const dispatch  =useDispatch()
  const Feedbackdata=useSelector((store)=>(store.classesReducer.Feedbackdata))
  console.log(Feedbackdata)
const [post,setPost]=useState({
 
  image:"",
  star:"",
  name:"",
  comment:""
 
})
 
  
useEffect(()=>{
 dispatch( getfeedback())
  setPost(getfeedback())

},[])

  return (
    <div className='f_div_1' style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)", margin:"auto",padding:"30px",width:"90%",gap:"70px 50px"}}>
       {
         Feedbackdata.map((el)=>{ 
        return <div style={{textAlign:"initial",padding:"20px",width:"78%",marginBottom:"30px",margin:"auto",fontStyle:"",boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px",height:"auto"}}>
          <img style={{borderRadius:"50%",marginTop:"-70px"}} src={el.image} alt="" />
          
          <p style={{paddingTop:"20px"}}>{el.star}</p>
          <p style={{fontFamily:"MV Boli"}}>{el.comment}</p>
          <h4 style={{marginTop:"20px",color:"#333333",fontFamily:"Comic Sans MS"}} >{el.name}</h4>
        </div>
        
        
         })
       }
      
     
    </div>
    
  )
}

export default Feedback
