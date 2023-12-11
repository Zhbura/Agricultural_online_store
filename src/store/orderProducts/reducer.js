import { COMPLETED_STATUS_ORDER_PRODUCT, ORDER_PRODUCT, STATUS_ORDER_PRODUCT } from "./action";

const initialState = {
    currentOrders: [],
    historyOrders: [],
}
const addLeadingZero = (d) => {
    return (d < 10) ? '0' + d : d;
}

export const orderProductsReducer = (state = initialState, action) => {
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

            return {
                ...state,
                currentOrders: [...state.currentOrders, ...products]
            }
        }

        case STATUS_ORDER_PRODUCT: {
            const products = state.currentOrders.map((product) => {
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

            return { ...state, currentOrders: [...products] }
        }
        case COMPLETED_STATUS_ORDER_PRODUCT: {
            const historyOrders = state.currentOrders.filter(({ status }) => status === "Завершен");
            const currentOrders = state.currentOrders.filter(({ status }) => status !== "Завершен");

            return {
                historyOrders: [...state.historyOrders, ...historyOrders],
                currentOrders: currentOrders,
            }
        }
        default:
            return state;
    }
}