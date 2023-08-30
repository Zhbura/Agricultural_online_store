import { useSelector } from "react-redux";
import { OrderProduct, OrderProductSmall } from "../OrderProduct/OrderProduct"
import { costCart, countCart, selectCart } from '../../store/cart/selectors';

export const OrderCart = () => {
    const cartProducts = useSelector(selectCart);

    const totalCount = useSelector(countCart);
    const costTotal = useSelector(costCart);

    return (
        <>
            <h4 className="order__heading">Товары в корзине</h4>
            {cartProducts.length === 0 ? <h3 className="cart__text">Ваша корзина пуста!</h3> :
                (cartProducts.map(product => (
                    <OrderProduct product={product} key={product.id} />
                )))
            }
            {cartProducts.map(product => (
                <OrderProductSmall product={product} key={product.id} />
            ))}
            <div className="order__buy-product">
                <p className="order__buy-product_margin">Итого: <span>{totalCount} шт </span></p>
                <p>На сумму: <span>{costTotal} руб</span></p>
            </div>
        </>
    )
}