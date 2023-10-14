import './OrderedProduct.scss';

export const OrderedProduct = ({ product, paid, away, completed }) => {
    const { name, img, count, totalPrice } = product;

    return (
        <>
            <div className="ordered-product">
                <div className="image-order">
                    <img src={img[0]} alt={name} />
                </div>
                <div className="ordered-product_middle">
                    <h3 className="ordered-product__title">{name}</h3>
                    <div className="ordered-product__data">
                        <p className="ordered-product__quantity">Количество {count}</p>
                        <p className="ordered-product__date">05.04.2023</p>
                        {paid &&
                            <p className="ordered-product__status ordered-product__status_paid">Оплачен</p>}
                        {away &&
                            <p className="ordered-product__status ordered-product__status_away">В дороге</p>}
                        {completed &&
                            <p className="ordered-product__status ordered-product__status_completed">Завершен</p>}
                    </div>
                </div>
                <p className="ordered-product__price">{totalPrice} руб</p>
            </div>
            <span className="ordered-product__horisontal-line ordered-product__horisontal-line_big" />
        </>
    )
}

export const OrderedProductSmall = ({ product, paid, away, completed }) => {
    const { name, img, count, totalPrice } = product;

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
                    <p className="ordered-product__date">05.04.2023</p>
                    {paid &&
                        <p className="ordered-product__status ordered-product__status_paid">Оплачен</p>}
                    {away &&
                        <p className="ordered-product__status ordered-product__status_away">В дороге</p>}
                    {completed &&
                        <p className="ordered-product__status ordered-product__status_completed">Завершен</p>}
                </div>
            </div>
            <span className="ordered-product__horisontal-line ordered-product__horisontal-line_small" />
        </>
    )
}