import { ORDER_PRODUCT } from "./action";

const initialState = {
    products: [],
    date: '',
};

const addLeadingZero = (d) => {
    return (d < 10) ? '0' + d : d;
}

export const historyOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_PRODUCT: {
            let objDate = action.payload.date;
            let year = objDate.getFullYear();
            let month = addLeadingZero(objDate.getMonth() + 1);
            let day = addLeadingZero(objDate.getDate());
            
            return {
                ...state,
                products: [...state.products, ...action.payload.products],
                date: `${day}.${month}.${year}`
            }
        }

        default:
            return state;
    }
}