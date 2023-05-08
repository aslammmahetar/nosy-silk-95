import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addfeedback, getfeedback } from '../../Redux/ClassesReducer/action'

import "../TestimonialComp/Addfeedback.css"
const Addfeedback = () => {
    
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
 dispatch( getfeedback(post))
   

},[Feedbackdata])

const handleChange=(e)=>{
 const{name,value}=e.target
 setPost({...post,[name]:value})


}
console.log(post)
const hndleSubmit=()=>{
  console.log(post)
  dispatch(addfeedback(post))
}
  return (
    <div id='addfeed_div' style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)", margin:"auto",padding:"30px",width:"40% ",marginBottom:"30px",fontStyle:"",height:"200px",}} >
   
    <input  className="input_class "src="" alt="" placeholder="Image URL" name='image'  value={post.image} onChange={handleChange}/>
    <input  className="input_class "type="text" placeholder=' Your Name'  name='name'   value={post.name} onChange={handleChange} />
    <input className="input_class " type="number" placeholder='star' name='star'   value={post.star} onChange={handleChange} />
    <input  className="input_class "type="text" placeholder=' Your Comment' name="comment"  value={post.comment} onChange={handleChange} />
    <button id='add_button'  className="input_class "onClick={hndleSubmit}>Add Review</button>
  </div>
  )
}

export default Addfeedback
