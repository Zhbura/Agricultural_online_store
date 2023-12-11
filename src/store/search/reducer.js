import { SEARCH_PRODUCTS } from "./action";
import { products } from "../../productsData";

const initialState = [];

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_PRODUCTS:

            let filterProducts = products.filter((product) => {
                return product.name.toLowerCase().includes(action.payload.value.toLowerCase())
            })

            return filterProducts;
        default:
            return state
    }
}