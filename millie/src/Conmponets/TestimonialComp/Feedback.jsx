import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addfeedback, getfeedback } from '../../Redux/action';
// import { getFeedback } from '../../Utils/api'; 


const Feedback = () => {
const {id}=useParams()

  const dispatch  =useDispatch()
  const Feedbackdata=useSelector((store)=>(store.classesReducer.Feedbackdata))
  console.log(Feedbackdata)

  const [images,setImage]=useState("");
  const [star,setStar]=useState("");
  const [names,setName]=useState("");
  const [comment,setComment]=useState("");
  // const feedbacks=useSelector((store)=>{
  //   return store.classesReducer.Feedback
  // })
  // console.log(feedbacks);
useEffect(()=>{
 dispatch( getfeedback())
   

},[])

const handleChange=(e)=>{
 const {name,value}=e.target
  setImage((prev)=>{
    return {...prev,[name]:value}
  })
  setName((prev)=>{
    return {...prev,names:value}
  })
  setComment((prev)=>{
    return {...prev,comment:value}
})
setStar((prev)=>{
return {...prev,star:value}
})

}

const hndleSubmit=()=>{
  dispatch(addfeedback(id,names,comment,star,images))
}
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
       <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)", margin:"auto",padding:"30px",width:"80%",marginBottom:"30px",fontStyle:"",boxShadow:"rgba(0, 0, 0, 0.08) 0px 4px 12px",height:"350px"}} >
            <input src="" alt="" value={images.image} placeholder="Image" onClick={handleChange}/>
            <input type="text" placeholder='name' value={names.name} />
            <input type="number" placeholder='star' />
            <input type="text" placeholder='comment' />
            <button onClick={hndleSubmit}>Done</button>
          </div>
    </div>
    
  )
}

export default Feedback
