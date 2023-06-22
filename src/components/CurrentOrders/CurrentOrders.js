import './CurrentOrders.scss';
import productImg from '../../img/product/petunia/petunia.png';
import cancel from '../../img/cancelGrey.svg';
import { PageHeadingTwice } from '../PageHeading/PageHeading';

export const CurrentOrders = () => {
    return (
        <>
            <div className="current-orders">
                <PageHeadingTwice>Текущие заказы</PageHeadingTwice>
                <div className="ordered-products">
                    <div className="ordered-products__item">
                        <div className="order__image">
                            <img src={productImg} alt="Петуния Софистика" />
                        </div>
                        <div className="ordered-products_middle">
                            <h3 className="ordered-products__title">Петуния Софистика</h3>
                            <div className="ordered-products__data">
                                <p className="ordered-products__quantity">Количество х1</p>
                                <p className="ordered-products__date">05.04.2023</p>
                                <p className="ordered-products__status ordered-products__status_paid">Оплачен</p>
                            </div>
                        </div>
                        <p className="ordered-products__price">7814,63 грн</p>
                        <img className="order__cancel" src={cancel} alt="Удалить выбранный товар" />
                    </div>
                    <span className="ordered-products__horisontal-line ordered-products__horisontal-line_big" />

                    <div className="ordered-products__item">
                        <div className="order__image">
                            <img src={productImg} alt="Петуния Софистика" />
                        </div>
                        <div className="ordered-products_middle">
                            <h3 className="ordered-products__title">Петуния Софистика</h3>
                            <div className="ordered-products__data">
                                <p className="ordered-products__quantity">Количество х1</p>
                                <p className="ordered-products__date">05.04.2023</p>
                                <p className="ordered-products__status ordered-products__status_away">В дороге</p>
                            </div>
                        </div>
                        <p className="ordered-products__price">7814,63 грн</p>
                        <img className="order__cancel" src={cancel} alt="Удалить выбранный товар" />
                    </div>
                    <span className="ordered-products__horisontal-line ordered-products__horisontal-line_big" />
                    <div className="ordered-products__item">
                        <div className="order__image">
                            <img src={productImg} alt="Петуния Софистика" />
                        </div>
                        <div className="ordered-products_middle">
                            <h3 className="ordered-products__title">Петуния Софистика</h3>
                            <div className="ordered-products__data">
                                <p className="ordered-products__quantity">Количество х1</p>
                                <p className="ordered-products__date">05.04.2023</p>
                                <p className="ordered-products__status ordered-products__status_completed">Завершен</p>
                            </div>
                        </div>
                        <p className="ordered-products__price">7814,63 грн</p>
                        <img className="order__cancel" src={cancel} alt="Удалить выбранный товар" />
                    </div>

                    <div className="ordered-products__item_small">
                        <div className="order__info-top">
                            <h3 className="order__title">Петуния Софистика</h3>
                            <img className="order__cancel" src={cancel} alt="Удалить выбранный товар" />
                        </div>
                        <div className="order__info-bottom">
                            <div className="order__image">
                                <img src={productImg} alt="Петуния Софистика" />
                            </div>
                            <div className="order__info-right">
                                <div className="order__price-quantity">
                                    <p>7814,63 грн <span>x1</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="ordered-products__data">
                            <p className="ordered-products__date">05.04.2023</p>
                            <p className="ordered-products__status ordered-products__status_paid">Оплачен</p>
                        </div>
                    </div>
                    <span className="ordered-products__horisontal-line ordered-products__horisontal-line_small" />
                    <div className="ordered-products__item_small">
                        <div className="order__info-top">
                            <h3 className="order__title">Петуния Софистика</h3>
                            <img className="order__cancel" src={cancel} alt="Удалить выбранный товар" />
                        </div>
                        <div className="order__info-bottom">
                            <div className="order__image">
                                <img src={productImg} alt="Петуния Софистика" />
                            </div>
                            <div className="order__info-right">
                                <div className="order__price-quantity">
                                    <p>7814,63 грн <span>x1</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="ordered-products__data">
                            <p className="ordered-products__date">05.04.2023</p>
                            <p className="ordered-products__status ordered-products__status_away">В дороге</p>
                        </div>
                    </div>
                    <span className="ordered-products__horisontal-line ordered-products__horisontal-line_small" />
                    <div className="ordered-products__item_small">
                        <div className="order__info-top">
                            <h3 className="order__title">Петуния Софистика</h3>
                            <img className="order__cancel" src={cancel} alt="Удалить выбранный товар" />
                        </div>
                        <div className="order__info-bottom">
                            <div className="order__image">
                                <img src={productImg} alt="Петуния Софистика" />
                            </div>
                            <div className="order__info-right">
                                <div className="order__price-quantity">
                                    <p>7814,63 грн <span>x1</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="ordered-products__data">
                            <p className="ordered-products__date">05.04.2023</p>
                            <p className="ordered-products__status ordered-products__status_completed">Завершен</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}