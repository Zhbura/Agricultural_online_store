import { ORDER_PRODUCT, STATUS_ORDER_PRODUCT } from "./action";

const initialState = [];

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

            const date = `${day}.${month}.${year}`;

            const products = action.payload.products.map((product) => {
                return {
                    ...product,
                    date: date,
                }
            })

            return [...state, ...products]

        }

        case STATUS_ORDER_PRODUCT: {
            const products = state.map((product) => {
                if (product.id === action.payload.id) {
                    return {
                        ...product,
                        status: action.payload.status,
                    }
                } else {
                    return {
                        ...product
                    }
                }
            })

            return [...products]
        }

        default:
            return state;
    }
}