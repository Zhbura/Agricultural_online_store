export const ADD_PRODUCT = 'CART::ADD_PRODUCT';
export const DELETE_PRODUCT = 'CART::DELETE_PRODUCT';
export const INCREASE_PRODUCT = 'CART::INCREASE_PRODUCT';
export const DECREASE_PRODUCT = 'CART::DECREASE_PRODUCT';
export const CHANGE_VALUE_PRODUCT = 'CART::CHANGE_VALUE_PRODUCT';
export const CHANGE_DROPDOWN = 'CART::CHANGE_DROPDOWN';

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

export const increaseProductCart = (id, number) => ({
    type: INCREASE_PRODUCT,
    payload: {
        id,
        number
    }
})

export const decreaseProductCart = (id, number) => ({
    type: DECREASE_PRODUCT,
    payload: {
        id,
        number
    }
})

export const changeValueProduct = (id, value, number) => ({
    type: CHANGE_VALUE_PRODUCT,
    payload: {
        id,
        value,
        number
    }
})

export const changePriceFor = (id, number) => ({
    type: CHANGE_DROPDOWN,
    payload: {
        id,
        number
    }
})
