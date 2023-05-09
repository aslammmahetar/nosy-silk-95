import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addfeedback, getfeedback } from '../../Redux/ClassesReducer/action'

import "../TestimonialComp/Addfeedback.css"
import { Star } from './Star'
const Addfeedback = () => {
    
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const stars = [1, 2, 3, 4, 5];


  const dispatch  =useDispatch()
  const Feedbackdata=useSelector((store)=>(store.classesReducer.Feedbackdata))
  console.log(Feedbackdata)
const [post,setPost]=useState({
 
  image:"",
  star:0,
  name:"",
  comment:""
 
})
 
  console.log(rating)
useEffect(()=>{
 dispatch( getfeedback(post))
   

},[])

const handleChange=(e)=>{
 const{name,value}=e.target
 setPost({...post,[name]:value})


}
console.log(post)
const hndleSubmit=()=>{
  console.log(post)
  dispatch(addfeedback({...post,star:rating})).then((res)=>{
dispatch(getfeedback())
  })
}
  return (
    <div id='addfeed_div' style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)", margin:"auto",padding:"30px",width:"40% ",marginBottom:"30px",fontStyle:"",height:"270px",}} >
   <h3 style={{textAlign:"start",marginLeft:"50px",color:"#204060"}}>Add Your Review </h3>
    <input  className="input_class "src="" alt="" placeholder="Image URL" name='image'  value={post.image} onChange={handleChange}/>
    <input  className="input_class "type="text" placeholder=' Your Name'  name='name'   value={post.name} onChange={handleChange} />
    {/* <input className="input_class " type="number" placeholder='star' name='star'   value={post.star} onChange={handleChange} /> */}
    <div className="starr">
      {/* <div class="header">
        <h1>Star Rating</h1>
        <Logo />
        <div class="logo"></div>
      </div> */}
      <div class="flex-container">
        {stars.map((star, i) => (
          <Star
            key={i}
            starId={i}
            rating={hoverRating || rating}
            onMouseEnter={() => setHoverRating(i)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={()=> setRating(i)}
            
          />
        ))}
      </div>
    </div>

    <input  className="input_class "type="text" placeholder=' Your Comment' name="comment"  value={post.comment} onChange={handleChange} />
    <button style={{marginTop:"20px"}} id='add_button'  className="input_class" onClick={hndleSubmit}>Add Review</button>
  </div>
  )
}

export default Addfeedback
