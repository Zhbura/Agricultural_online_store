import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { addHistoryOrderWithThunk } from "../../store/historyOrder/action";
import { selectCart } from "../../store/cart/selectors";

export const ButtonOrder = ({ sendOrderData, formValid }) => {
    const dispatch = useDispatch();
    const cartProducts = useSelector(selectCart);

    const dateOrder = new Date();

    return (
        <>
            <button className={formValid ? "btn-order" : "btn-order btn-order_disabled"} onClick={() => {
                sendOrderData()
                dispatch(addHistoryOrderWithThunk(cartProducts, dateOrder))
            }}
                disabled={!formValid}
            >
                {formValid ? <Link to="/thanks_order" className="order__link">Подтвердить заказ</Link> :
                    <p className="order__link">Подтвердить заказ</p>}
            </button>
        </>
    )
}