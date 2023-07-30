export const ADD_PRODUCT = 'WISH-LIST::ADD_PRODUCT';

export const addToWishList = (id, product) => ({
    type: ADD_PRODUCT,
    payload: {
        id,
        product
    }
})