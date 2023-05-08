import { GET_FED_DATA, GET_REQ, GET_REQ_FAIL, GET_REQ_SUC, POST_FED_DATA } from "./actiontype"

const initialState = {
    classes: [],
    Feedbackdata:[],
    isLoading: false,
    isError: false
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_REQ: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case GET_REQ_SUC: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                classes: payload
            }
        }
        case GET_REQ_FAIL: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case GET_FED_DATA:{
            return {...state,Feedbackdata:payload}
        }
        case POST_FED_DATA:{
            return{...state,isLoading:false}
        }
        default:
            return state
    }
}