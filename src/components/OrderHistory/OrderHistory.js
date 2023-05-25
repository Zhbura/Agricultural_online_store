import { PageHeadingTwice } from '../PageHeading/PageHeading';
import './OrderHistory.scss';
import productImg from '../../img/productImgBig.png';

export const OrderHistory = () => {
    return (
        <>
            <div className="order-history">
                <div className="container">
                    <PageHeadingTwice>История заказов</PageHeadingTwice>
                    <div className="ordered-products">
                        <div className="ordered-products__item">
                            <div className="order__image">
                                <img src={productImg} />
                            </div>
                            <div className="ordered-products_middle">
                                <h3 className="ordered-products__title">Гербицид Комманд®, ФМС Украина</h3>
                                <div className="ordered-products__data">
                                    <p className="ordered-products__quantity">Количество х1</p>
                                    <p className="ordered-products__date">05.04.2023</p>
                                </div>
                            </div>
                            <p className="ordered-products__price">7814,63 грн</p>
                        </div>
                        <span className="ordered-products__horisontal-line ordered-products__horisontal-line_big" />
                        <div className="ordered-products__item">
                            <div className="order__image">
                                <img src={productImg} />
                            </div>
                            <div className="ordered-products_middle">
                                <h3 className="ordered-products__title">Гербицид Комманд®, ФМС Украина</h3>
                                <div className="ordered-products__data">
                                    <p className="ordered-products__quantity">Количество х1</p>
                                    <p className="ordered-products__date">05.04.2023</p>
                                </div>
                            </div>
                            <p className="ordered-products__price">7814,63 грн</p>
                        </div>
                        <span className="ordered-products__horisontal-line ordered-products__horisontal-line_big" />
                        <div className="ordered-products__item">
                            <div className="order__image">
                                <img src={productImg} />
                            </div>
                            <div className="ordered-products_middle">
                                <h3 className="ordered-products__title">Гербицид Комманд®, ФМС Украина</h3>
                                <div className="ordered-products__data">
                                    <p className="ordered-products__quantity">Количество х1</p>
                                    <p className="ordered-products__date">05.04.2023</p>
                                </div>
                            </div>
                            <p className="ordered-products__price">7814,63 грн</p>
                        </div>
                        <div className="ordered-products__item_small">
                            <div className="order__info-top">
                                <h3 className="order__title">Гербицид Комманд®, ФМС Украина</h3>
                            </div>
                            <div className="order__info-bottom">
                                <div className="order__image">
                                    <img src={productImg} />
                                </div>
                                <div className="order__info-right">
                                    <div className="order__price-quantity">
                                        <p>7814,63 грн <span>x1</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="ordered-products__data">
                                <p className="ordered-products__date">05.04.2023</p>
                            </div>
                        </div>
                        <span className="ordered-products__horisontal-line ordered-products__horisontal-line_small" />
                        <div className="ordered-products__item_small">
                            <div className="order__info-top">
                                <h3 className="order__title">Гербицид Комманд®, ФМС Украина</h3>
                            </div>
                            <div className="order__info-bottom">
                                <div className="order__image">
                                    <img src={productImg} />
                                </div>
                                <div className="order__info-right">
                                    <div className="order__price-quantity">
                                        <p>7814,63 грн <span>x1</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="ordered-products__data">
                                <p className="ordered-products__date">05.04.2023</p>
                            </div>
                        </div>
                        <span className="ordered-products__horisontal-line ordered-products__horisontal-line_small" />
                        <div className="ordered-products__item_small">
                            <div className="order__info-top">
                                <h3 className="order__title">Гербицид Комманд®, ФМС Украина</h3>
                            </div>
                            <div className="order__info-bottom">
                                <div className="order__image">
                                    <img src={productImg} />
                                </div>
                                <div className="order__info-right">
                                    <div className="order__price-quantity">
                                        <p>7814,63 грн <span>x1</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="ordered-products__data">
                                <p className="ordered-products__date">05.04.2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}