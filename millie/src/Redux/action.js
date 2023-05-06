import { GET_FED_DATA, GET_REQ, GET_REQ_FAIL, GET_REQ_SUC, POST_FED_DATA } from "./actiontype"
import axios from "axios";

export const getReq = () => {
    return { type: GET_REQ }
}

export const getReqSuc = (payload) => {
    return { type: GET_REQ_SUC, payload: payload }
}

export const getReqFails = () => {
    return { type: GET_REQ_FAIL }
}
export const getData = (limit) => (dispatch) => {
    dispatch(getReq())
    const url = new URL(
        "https://645393e4e9ac46cedf2940fc.mockapi.io/immortalyoga/immortalyoga"
    );
    url.searchParams.append("page", 1);
    url.searchParams.append("limit", limit);
    axios.get(url).then(res => dispatch({ type: GET_REQ_SUC, payload: res.data })).catch((err) => dispatch(getReqFails()))
};
  export  const getfeedback=()=>(dispatch)=>{
    
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/feedback`).then((res)=>{
        dispatch({type:GET_FED_DATA,payload:res.data})
        console.log(res.data)
    })
}
export const addfeedback=(dataObj,id)=>(dispatch)=>{
   
    axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/feedback`,dataObj).then((res)=>{
        dispatch({type:POST_FED_DATA})
        console.log(res)
    }).catch((err)=>{
     console.log(err)
    })
}