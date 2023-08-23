import { GUEST_COMMENT, GUEST_EMAIL, GUEST_NAME, GUEST_PHONE, GUEST_SURNAME } from "./action"

const initialState = {
    email: '',
    name: '',
    surname: '',
    phone: '',
    comment: '',
}

export const guestReducer = (state = initialState, action) => {
    switch (action.type) {
        case GUEST_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case GUEST_NAME:
            return {
                ...state,
                name: action.payload
            }
        case GUEST_SURNAME:
            return {
                ...state,
                surname: action.payload
            }
        case GUEST_PHONE:
            return {
                ...state,
                phone: action.payload
            }
     
        case GUEST_COMMENT:
            return {
                ...state,
                comment: action.payload
            }
        default:
            return state
    }
}