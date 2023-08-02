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
                        let totalPriceBeforeDiscount = product.count * product.price * action.payload.number;

                        if (action.payload.number > 1 && action.payload.number < 5) {
                            return {
                                ...product,
                                totalPrice: Math.round((totalPriceBeforeDiscount) - (totalPriceBeforeDiscount * 0.05))
                            }
                        } if (action.payload.number >= 5) {
                            return {
                                ...product,
                                totalPrice: Math.round((totalPriceBeforeDiscount) - (totalPriceBeforeDiscount * 0.1))
                            }
                        } else {
                            return {
                                ...product,
                                totalPrice: totalPriceBeforeDiscount
                            }
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
                        let totalPriceBeforeDiscount = (product.count + 1) * product.price * action.payload.number;
                        if (action.payload.number > 1 && action.payload.number < 5) {
                            return {
                                ...product,
                                count: product.count + 1,
                                totalPrice: Math.round((totalPriceBeforeDiscount) - (totalPriceBeforeDiscount * 0.05))
                            }
                        } if (action.payload.number >= 5) {
                            return {
                                ...product,
                                count: product.count + 1,
                                totalPrice: Math.round((totalPriceBeforeDiscount) - (totalPriceBeforeDiscount * 0.1))
                            }
                        } else {
                            return {
                                ...product,
                                count: product.count + 1,
                                totalPrice: totalPriceBeforeDiscount
                            }
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
                        let totalPriceBeforeDiscount = (newCount) * product.price * action.payload.number;
                        if (action.payload.number > 1 && action.payload.number < 5) {
                            return {
                                ...product,
                                count: newCount,
                                totalPrice: Math.round((totalPriceBeforeDiscount) - (totalPriceBeforeDiscount * 0.05))
                            }
                        }
                        if (action.payload.number >= 5) {
                            return {
                                ...product,
                                count: newCount,
                                totalPrice: Math.round((totalPriceBeforeDiscount) - (totalPriceBeforeDiscount * 0.1))
                            }
                        } else {
                            return {
                                ...product,
                                count: newCount,
                                totalPrice: totalPriceBeforeDiscount
                            }
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
                            let totalPriceBeforeDiscount = product.price * action.payload.value * action.payload.number;
                            if (action.payload.number > 1 && action.payload.number < 5) {
                                return {
                                    ...product,
                                    count: action.payload.value,
                                    totalPrice: Math.round((totalPriceBeforeDiscount) - (totalPriceBeforeDiscount * 0.05))
                                }
                            }
                            if (action.payload.number >= 5) {
                                return {
                                    ...product,
                                    count: action.payload.value,
                                    totalPrice: Math.round((totalPriceBeforeDiscount) - (totalPriceBeforeDiscount * 0.1))
                                }
                            } else {
                                return {
                                    ...product,
                                    count: action.payload.value,
                                    totalPrice: totalPriceBeforeDiscount
                                }
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