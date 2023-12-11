import { REGISTER_ADRESS, REGISTER_EMAIL, REGISTER_NAME, REGISTER_PASSWORD, REGISTER_PASSWORD_CONFIRMATION, REGISTER_PHONE, REGISTER_SURNAME, REGISTER_USER } from './action';

const initialState = {
    email: '',
    name: '',
    surname: '',
    phone: '',
    password: '',
    passwordConfirm: '',
    adress: '',
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
        case REGISTER_ADRESS:
            return {
                ...state,
                adress: action.payload
            }
        case REGISTER_USER:
            return {
                ...state,
                name: action.payload.name,
                surname: action.payload.surname,
                phone: action.payload.phone,
                email: action.payload.email,
                password: action.payload.password,
                passwordConfirm: action.payload.passConfirm
            }
        default:
            return state
    }
}