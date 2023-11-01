import { nanoid } from "nanoid";

export const ORDER_PRODUCT = 'HISTORY::ORDER_PRODUCT';
export const STATUS_ORDER_PRODUCT = 'HISTORY::STATUS_ORDER_PRODUCT';

export const historyOrder = (products, date) => ({
    type: ORDER_PRODUCT,
    payload: {
        products,
        date,
    }
})

export const statusOrder = (status, idBatchProducts) => ({
    type: STATUS_ORDER_PRODUCT,
    payload: {
        status,
        idBatchProducts,
    }
})

let timeoutPaid;
let timeoutAway;
let timeoutCompleted;
export const addHistoryOrderWithThunk = (products, date) => (dispatch, getState) => {

    const idBatchProducts = nanoid();

    const newProducts = products.map((product) => {
        return {
            ...product,
            batch: idBatchProducts,
        }
    })
    dispatch(historyOrder(newProducts, date));

    if (newProducts) {
        newProducts.map((product) => {
            if (product.status === undefined) {
                clearTimeout(timeoutPaid)
                timeoutPaid = setTimeout(() => {
                    const status = "Оплачен"

                    dispatch(statusOrder(status, idBatchProducts))
                }, 7000)
            }
        })
    }

    if (newProducts) {
        clearTimeout(timeoutAway);
        timeoutAway = setTimeout(() => {
            const status = "В дороге"

            dispatch(statusOrder(status, idBatchProducts))
        }, 14000)
    }

    if (newProducts) {
        clearTimeout(timeoutCompleted);
        timeoutCompleted = setTimeout(() => {
            const status = "Завершен"

            dispatch(statusOrder(status, idBatchProducts))
        }, 21000)
    }

}
