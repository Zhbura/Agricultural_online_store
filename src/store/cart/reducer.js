import { ADD_PRODUCT, DELETE_PRODUCT } from "./action";

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

        case DELETE_PRODUCT: {
            return state.filter(({ id }) => id !== action.payload);
        }

        default:
            return state;
    }
}