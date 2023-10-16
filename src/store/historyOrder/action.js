export const ORDER_PRODUCT = 'HISTORY::ORDER_PRODUCT';

export const historyOrder = (products, date) => ({
    type: ORDER_PRODUCT,
    payload: {
        products,
        date
    }
})