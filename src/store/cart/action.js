export const ADD_PRODUCT = 'CART::ADD_PRODUCT';
export const DELETE_PRODUCT = 'CART::DELETE_PRODUCT';

export const deleteProductCart = (id) => ({
    type: DELETE_PRODUCT,
    payload: id
})

export const addProductCart = (product, id) => ({
    type: ADD_PRODUCT,
    payload: {
        id,
        product
    }
})