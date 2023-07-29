export const ADD_PRODUCT = 'CART::ADD_PRODUCT';
export const DELETE_PRODUCT = 'CART::DELETE_PRODUCT';
export const INCREASE_PRODUCT = 'CART::INCREASE_PRODUCT';
export const DECREASE_PRODUCT = 'CART::DECREASE_PRODUCT';
export const CHANGE_VALUE_PRODUCT = 'CHANGE_VALUE_PRODUCT';

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

export const increaseProductCart = (id) => ({
    type: INCREASE_PRODUCT,
    payload: id
})

export const decreaseProductCart = (id) => ({
    type: DECREASE_PRODUCT,
    payload: id
})

export const changeValueProduct = (id, value) => ({
    type: CHANGE_VALUE_PRODUCT,
    payload: {
        id,
        value
    }
})