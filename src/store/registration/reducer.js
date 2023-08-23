import { REGISTER_EMAIL, REGISTER_NAME, REGISTER_PASSWORD, REGISTER_PASSWORD_CONFIRMATION, REGISTER_PHONE, REGISTER_SURNAME } from './action';

const initialState = {
    email: '',
    name: '',
    surname: '',
    phone: '',
    password: '',
    passwordConfirm: '',
}

export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case REGISTER_NAME:
            return {
                ...state,
                name: action.payload
            }
        case REGISTER_SURNAME:
            return {
                ...state,
                surname: action.payload
            }
        case REGISTER_PHONE:
            return {
                ...state,
                phone: action.payload
            }
        case REGISTER_PASSWORD_CONFIRMATION:
            return {
                ...state,
                passwordConfirm: action.payload
            }
        case REGISTER_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        default:
            return state
    }
}