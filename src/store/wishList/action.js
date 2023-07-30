const ADD_PRODUCT = 'WISH-LIST::ADD_PRODUCT';

const addToWishList = (id, product) => ({
    type: ADD_PRODUCT,
    payload: {
        id,
        product
    }
})