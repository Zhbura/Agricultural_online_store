import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { addHistoryOrderWithThunk } from "../../store/orderProducts/action";
import { selectCart } from "../../store/cart/selectors";
import {  deleteProductCart } from "../../store/cart/action";
import { nanoid } from "nanoid";

export const ButtonOrder = ({ sendOrderData, formValid }) => {
    const dispatch = useDispatch();
    const cartProducts = useSelector(selectCart);

    const dateOrder = new Date();

    const sendOrderProduct = () => {
        const orderProduct = cartProducts.map((product) => {
            return {
                ...product,
                id: nanoid(),
                status: "В обработке",
            }
        })
        dispatch(addHistoryOrderWithThunk(orderProduct, dateOrder))

        cartProducts.map((product) => (
            dispatch(deleteProductCart(product.id))
        ))
    }
    return (
        <>
            <button className={formValid ? "btn-order" : "btn-order btn-order_disabled"} onClick={() => {
                sendOrderData()
                sendOrderProduct()
            }}
                disabled={!formValid}
            >
                {formValid ? <Link to="/thanks_order" className="order__link">Подтвердить заказ</Link> :
                    <p className="order__link">Подтвердить заказ</p>}
            </button>
        </>
    )
}