import { GET_REQ, GET_REQ_FAIL, GET_REQ_SUC } from "./actiontype"

const initialState = {
    classes: [],
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
        default:
            return state
    }
}