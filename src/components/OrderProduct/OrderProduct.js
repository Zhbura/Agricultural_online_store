import { useDispatch } from 'react-redux';
import { deleteProductCart } from '../../store/cart/action';
import cancel from '../../img/cancelGrey.svg';
import './OrderProduct.scss';

export const OrderProduct = ({ product }) => {
    const { name, img, count, totalPrice, id } = product;

    const dispatch = useDispatch();

    return (
        <>
            <div className="order-product">
                <div className="image-order">
                    <img src={img[0]} alt={name} />
                </div>
                <div className="order-product__info">
                    <h3 className="order-product__title">{name}</h3>
                    <div className="order-product__price-quantity">
                        <p>{totalPrice} руб <span>x{count}</span></p>
                    </div>
                </div>
                <button className="order-product__btn-delete" onClick={() => dispatch(deleteProductCart(id))}>
                    <img src={cancel} alt="Удалить выбранный товар" />
                </button >
            </div>
        </>
    )
}

export const OrderProductSmall = ({ product }) => {
    const { name, img, count, totalPrice, id } = product;

    const dispatch = useDispatch();

    return (
        <>
            <div className="order-product_small">
                <div className="order-product__info-top">
                    <h3 className="order-product__title">{name}</h3>
                    <button className="order-product__btn-delete" onClick={() => dispatch(deleteProductCart(id))}>
                        <img src={cancel} alt="Удалить выбранный товар" />
                    </button >
                </div>
                <div className="order-product__info-bottom">
                    <div className="image-order">
                        <img src={img[0]} alt={name} />
                    </div>
                    <div className="order-product__price-quantity">
                        <p>{totalPrice} руб <span>x{count}</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}