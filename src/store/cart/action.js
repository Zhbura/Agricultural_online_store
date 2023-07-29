export const ADD_PRODUCT = 'CART::ADD_PRODUCT';

export const addProductCart = (product, id) => ({
    type: ADD_PRODUCT,
    payload: {
        id,
        product
    }
})