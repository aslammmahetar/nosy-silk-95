import React from 'react'
import axios from 'axios'

export const getFeedback=async()=>{
    const res=await axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/feedback`)
    // console.log(res.data)
    return( res.data);

}