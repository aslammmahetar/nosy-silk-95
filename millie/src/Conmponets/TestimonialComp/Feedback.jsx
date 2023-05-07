import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addfeedback, getfeedback } from '../../Redux/action';
// import { getFeedback } from '../../Utils/api'; 


const Feedback = () => {
// const {id}=useParams()

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
 dispatch( getfeedback(Feedbackdata.Feedbacks))
   

},[])

// const handleChange=(e)=>{
//  const{name,value}=e.target
//  setPost({...post,[name]:value})


// }
// console.log(post)
// const hndleSubmit=()=>{
//   console.log(post)
//   dispatch(addfeedback(post))
// }
// console.log(feed)
  return (
    <div className='f_div_1' style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)", margin:"auto",padding:"30px",width:"90%",}}>
       {
         Feedbackdata.map((el)=>{ 
        return <div style={{padding:"20px",width:"80%",marginBottom:"30px",margin:"auto",fontStyle:"",boxShadow:"rgba(0, 0, 0, 0.08) 0px 4px 12px",height:"350px"}}>
          <img style={{borderRadius:"50%"}} src={el.image} alt="" />
          <h4>{el.name}</h4>
          <p>{el.star}</p>
          <p>{el.comment}</p>
          
        </div>
        
        
         })
       }
      
     
    </div>
    
  )
}

export default Feedback
