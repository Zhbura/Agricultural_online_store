import { SEARCH_PRODUCTS } from "./action";
import { products } from "../../productsData";

const newProducts = [...products[0].slice(0, 4), ...products[1].slice(0, 4), ...products[2].slice(0, 4), ...products[3].slice(0, 4)];
const initialState = [];

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_PRODUCTS:

            let filterProducts = newProducts.filter((product) => {
                return product.name.toLowerCase().includes(action.payload.value.toLowerCase())
            })

            return filterProducts;
        default:
            return state
    }
}