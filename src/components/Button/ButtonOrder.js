import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { historyOrder } from "../../store/historyOrder/action";
import { selectCart } from "../../store/cart/selectors";
import { deleteAllProductCart } from "../../store/cart/action";

export const ButtonOrder = ({ sendOrderData }) => {
    const dispatch = useDispatch();
    const cartProducts = useSelector(selectCart);

    const dateOrder = new Date();

    return (
        <>
            <div className="order__confirm" onClick={() => {
                sendOrderData()
                dispatch(historyOrder(cartProducts, dateOrder))
                dispatch(deleteAllProductCart())
            }}>
                <Link to="/thanks_order" className="order__link">Подтвердить заказ</Link>
            </div>
        </>
    )
}