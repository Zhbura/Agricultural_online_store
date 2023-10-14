export const ORDER_PRODUCT = 'HISTORY::ORDER_PRODUCT';

export const historyOrder = (products) => ({
    type: ORDER_PRODUCT,
    payload: {
        products
    }
})