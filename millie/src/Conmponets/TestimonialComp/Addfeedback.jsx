import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addfeedback, getfeedback } from '../../Redux/action'
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
   

},[dispatch,post])

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
    <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)", margin:"auto",padding:"30px",width:"80%",marginBottom:"30px",fontStyle:"",boxShadow:"rgba(0, 0, 0, 0.08) 0px 4px 12px",height:"350px"}} >
    <input  className="input_class "src="" alt="" placeholder="Image" name='image'  value={post.image} onChange={handleChange}/>
    <input  className="input_class "type="text" placeholder='name'  name='name'   value={post.name} onChange={handleChange} />
    <input className="input_class " type="number" placeholder='star' name='star'   value={post.star} onChange={handleChange} />
    <input  className="input_class "type="text" placeholder='comment' name="comment"  value={post.comment} onChange={handleChange} />
    <button  className="input_class "onClick={hndleSubmit}>Done</button>
  </div>
  )
}

export default Addfeedback
