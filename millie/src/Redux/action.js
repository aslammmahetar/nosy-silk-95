import { GET_REQ, GET_REQ_FAIL, GET_REQ_SUC } from "./actiontype"
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