export const ORDER_PRODUCT = 'HISTORY::ORDER_PRODUCT';
export const STATUS_ORDER_PRODUCT = 'HISTORY::STATUS_ORDER_PRODUCT';

export const historyOrder = (products, date) => ({
    type: ORDER_PRODUCT,
    payload: {
        products,
        date,
    }
})

export const statusOrder = (status, id) => ({
    type: STATUS_ORDER_PRODUCT,
    payload: {
        status,
        id,
    }
})

let timeoutPaid;
let timeoutAway;
let timeoutCompleted;

export const addHistoryOrderWithThunk = (products, date) => (dispatch, getState) => {
    dispatch(historyOrder(products, date));

    const sendStatusOrder = (status, id) => {
        dispatch(statusOrder(status, id))
    }

    products.map((product) => {
        timeoutPaid = setTimeout(sendStatusOrder, 30000, "Оплачен", product.id);
        timeoutAway = setTimeout(sendStatusOrder, 60000, "В дороге", product.id);
        timeoutCompleted = setTimeout(sendStatusOrder, 90000, "Завершен", product.id);
    })

}
