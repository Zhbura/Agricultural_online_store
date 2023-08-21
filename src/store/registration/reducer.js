import { REGISTER_NAME } from './action';

const initialState = {
    name: '',
}

export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_NAME:
            return {
                ...state,
                name: action.payload
            }
        default:
            return state
    }
}