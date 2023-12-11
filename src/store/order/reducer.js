import { ORDER_USER_DATA } from "./action"

const initialState = {
    email: '',
    name: '',
    surname: '',
    phone: '',
    comment: '',
    postcode: '',
    region: '',
    city: '',
    department: '',
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_USER_DATA:
            return {
                ...state,
                email: action.payload.email,
                name: action.payload.name,
                surname: action.payload.surname,
                phone: action.payload.phone,
                comment: action.payload.comment,
                postcode: action.payload.postcode,
                region: action.payload.region,
                city: action.payload.city,
                department: action.payload.department
            }
        default:
            return state
    }
}