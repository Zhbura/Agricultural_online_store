export const ADD_PRODUCT = 'WISH-LIST::ADD_PRODUCT';
export const DELETE_PRODUCT = 'WISH-LIST::DELETE_PRODUCT';

export const addToWishList = (id, product) => ({
    type: ADD_PRODUCT,
    payload: {
        id,
        product
    }
})

export const deleteProductWishList = (id) => ({
    type: DELETE_PRODUCT,
    payload: id
})