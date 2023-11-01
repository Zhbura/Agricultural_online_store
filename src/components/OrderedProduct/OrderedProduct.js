import './OrderedProduct.scss';
import { StatusAway, StatusCompleted, StatusPaid } from './OrderedProductStatus';

export const OrderedProduct = ({ product }) => {
    const { name, img, count, totalPrice, status, date } = product;

    return (
        <>
            <div className="ordered-product">
                <div className="image-order">
                    <img src={img[0]} alt={name} />
                </div>
                <div className="ordered-product_middle">
                    <h3 className="ordered-product__title">{name}</h3>
                    <div className="ordered-product__data">
                        <p className="ordered-product__quantity">Количество x{count}</p>
                        <p className="ordered-product__date">{date}</p>
                        {(status === "Оплачен") && <StatusPaid />}
                        {(status === "В дороге") && <StatusAway />}
                        {(status === "Завершен") && <StatusCompleted />}
                    </div>
                </div>
                <p className="ordered-product__price">{totalPrice} руб</p>
            </div>
            <span className="ordered-product__horisontal-line ordered-product__horisontal-line_big" />
        </>
    )
}

export const OrderedProductSmall = ({ product }) => {
    const { name, img, count, totalPrice, status, date } = product;

    return (
        <>
            <div className="ordered-product_small">
                <div className="order-product__info-top">
                    <h3 className="ordered-product__title">{name}</h3>
                </div>
                <div className="order-product__info-bottom">
                    <div className="image-order">
                        <img src={img[0]} alt={name} />
                    </div>
                    <div className="order-product__info-right">
                        <div className="order-product__price-quantity">
                            <p>{totalPrice} руб <span>x{count}</span></p>
                        </div>
                    </div>
                </div>
                <div className="ordered-product__data">
                    <p className="ordered-product__date">{date}</p>
                    {(status === "Оплачен") && <StatusPaid />}
                    {(status === "В дороге") && <StatusAway />}
                    {(status === "Завершен") && <StatusCompleted />}
                </div>
            </div>
            <span className="ordered-product__horisontal-line ordered-product__horisontal-line_small" />
        </>
    )
}