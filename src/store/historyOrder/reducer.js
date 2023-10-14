import { ORDER_PRODUCT } from "./action";

const initialState = [];

export const historyOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_PRODUCT: {
            return [...state, action.payload.products];
        }

        default:
            return state;
    }
}