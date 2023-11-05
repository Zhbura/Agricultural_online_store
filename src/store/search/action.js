export const SEARCH_PRODUCTS = 'SEARCH::SEARCH_PRODUCTS';

export const searchProducts = (value) => ({
    type: SEARCH_PRODUCTS,
    payload: {
        value
    }
})