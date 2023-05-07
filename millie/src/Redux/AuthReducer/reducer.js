
const initialState = {
    isAuth: false,
    token: "",
    isPremium: false
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "GET TOKEN": {
            return {
                ...state,
                isAuth: true,
                token: payload,
            }
        }
        case "GET PREMIUM": {
            return {
                ...state,
                isAuth: true,
                isPremium: true
            }
        }
        default:
            return state
    }
}