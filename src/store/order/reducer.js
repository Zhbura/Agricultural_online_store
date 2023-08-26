import {
    ORDER_CITY,
    ORDER_COMMENT,
    ORDER_DEPARTMENT,
    ORDER_EMAIL,
    ORDER_NAME,
    ORDER_PHONE,
    ORDER_POSTCODE,
    ORDER_REGION,
    ORDER_SURNAME
} from "./action"

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
        case ORDER_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case ORDER_NAME:
            return {
                ...state,
                name: action.payload
            }
        case ORDER_SURNAME:
            return {
                ...state,
                surname: action.payload
            }
        case ORDER_PHONE:
            return {
                ...state,
                phone: action.payload
            }
        case ORDER_COMMENT:
            return {
                ...state,
                comment: action.payload
            }
        case ORDER_POSTCODE:
            return {
                ...state,
                postcode: action.payload
            }
        case ORDER_REGION:
            return {
                ...state,
                region: action.payload
            }
        case ORDER_CITY:
            return {
                ...state,
                city: action.payload
            }
        case ORDER_DEPARTMENT:
            return {
                ...state,
                department: action.payload
            }
        default:
            return state
    }
}