import cancel from '../../img/cancelGrey.svg';
import './OrderProduct.scss';

export const OrderProduct = ({ product }) => {
    const { name, img, count, totalPrice } = product;

    return (
        <>
            <div className="order-product">
                <div className="order-product__image">
                    <img src={img[0]} alt={name} />
                </div>
                <div className="order-product__info">
                    <h3 className="order-product__title">{name}</h3>
                    <div className="order-product__price-quantity">
                        <p>{totalPrice} руб <span>x{count}</span></p>
                    </div>
                </div>
                <img className="order-product__cancel" src={cancel} alt="Удалить выбранный товар" />
            </div>
        </>
    )
}

export const OrderProductSmall = ({ product }) => {
    const { name, img, count, totalPrice } = product;

    return (
        <>
            <div className="order-product_small">
                <div className="order-product__info-top">
                    <h3 className="order-product__title">{name}</h3>
                    <img className="order-product__cancel" src={cancel} alt="Удалить выбранный товар" />
                </div>
                <div className="order-product__info-bottom">
                    <div className="order-product__image">
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