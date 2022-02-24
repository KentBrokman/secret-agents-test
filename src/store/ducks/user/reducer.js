import { UserActionsTypes } from "./actionTypes";





const initialState = {
    user: null,
    authData: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionsTypes.SET_USER:
            return {
                ...state,
                user: action.payload.user,
                authData: action.payload.authData
            }
    
        default:
            return state
    }
}