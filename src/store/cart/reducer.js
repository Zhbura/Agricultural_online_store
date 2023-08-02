import {
    ADD_PRODUCT, DELETE_PRODUCT, INCREASE_PRODUCT, DECREASE_PRODUCT,
    CHANGE_VALUE_PRODUCT,
    CHANGE_DROPDOWN
} from "./action";

const initialState = [];

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            const productExist = state.find((product) => product.id === action.payload.id);
            if (productExist) {
                return [
                    ...state.map((product) =>
                        product.id === action.payload.id ?
                            {
                                ...productExist,
                                count: productExist.count + 1,
                                totalPrice: (productExist.count + 1) * productExist.price,
                            }
                            : product
                    )
                ]
            } else {
                return [...state, action.payload.product];
            }
        }
        case CHANGE_DROPDOWN: {
            return [
                ...state.map((product) => {
                    if (product.id === action.payload.id) {
                        return {
                            ...product,
                            totalPrice: product.count * product.price * action.payload.number
                        }
                    }
                    return product
                })
            ]
        }
        case DELETE_PRODUCT: {
            return state.filter(({ id }) => id !== action.payload);
        }

        case INCREASE_PRODUCT: {
            return [
                ...state.map((product) => {
                    if (product.id === action.payload.id) {
                        return {
                            ...product,
                            count: product.count + 1,
                            totalPrice: (product.count + 1) * product.price * action.payload.number
                        }
                    }
                    return product
                })
            ]
        }

        case DECREASE_PRODUCT: {
            return [
                ...state.map((product) => {
                    const newCount = product.count > 1 ? product.count - 1 : 1;
                    if (product.id === action.payload.id) {
                        return {
                            ...product,
                            count: newCount,
                            totalPrice: (newCount) * product.price * action.payload.number
                        }
                    }
                    return product
                })
            ]
        }

        case CHANGE_VALUE_PRODUCT: {
            return [
                ...state.map((product) => {
                    if (product.id === action.payload.id) {
                        if (action.payload.value > 0) {
                            return {
                                ...product,
                                count: action.payload.value,
                                totalPrice: product.price * action.payload.value * action.payload.number
                            }
                        }
                    }
                    return product
                })
            ]
        }

        default:
            return state;
    }
}