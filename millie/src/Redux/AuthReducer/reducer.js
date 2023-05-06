
const initialState = {
    isAuth: false,
    token: ""
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "GET TOKEN": {
            return {
                ...state,
                isAuth: true,
                token: payload
            }
        }
        default:
            return state
    }
}