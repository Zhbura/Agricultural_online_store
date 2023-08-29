import { GUEST_DATA } from "./action"

const initialState = {
    email: '',
    name: '',
    surname: '',
    phone: '',
    comment: '',
}

export const guestReducer = (state = initialState, action) => {
    switch (action.type) {
        case GUEST_DATA:
            return {
                ...state,
                email: action.payload.email,
                name: action.payload.name,
                surname: action.payload.surname,
                phone: action.payload.phone,
                comment: action.payload.comment,
            }
        default:
            return state
    }
}