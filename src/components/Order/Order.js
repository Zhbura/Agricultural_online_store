import './Order.scss';
import { ArrowDownMenu } from '../SVG/ArrowMenu/ArrowDownMenu';
import productImg from '../../img/productImgBig.png';
import cancel from '../../img/cancelGrey.svg';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { TopBar } from '../TopBar/TopBar';
import { Header } from '../Header/Header';
import { BottomBar } from '../BottomBar/BottomBar';
import { Footer } from '../Footer/Footer';

export const Order = () => {
    return (
        <>
            <div className="wrapper">
                <div className="top">
                    <TopBar />
                    <Header />
                    <BottomBar />
                    <div className="order">
                        <PageHeadingTwice>Оформление заказа</PageHeadingTwice>
                        <div className="container">
                            <div className="order__left">
                                <div>
                                    <h4 className="order__heading">Ваши контакты</h4>
                                    <form className="contacts-form">
                                        <div className="contacts-form__wrap-data">
                                            <input className="contacts-form__data" type="text" value="Имя" />
                                            <input className="contacts-form__data" type="text" value="Фамилия" />
                                        </div>
                                        <div className="contacts-form__wrap-data">
                                            <input className="contacts-form__data" type="text" value="Телефон" />
                                            <input className="contacts-form__data" type="email" value="E-mail" />
                                        </div>
                                        <input className="contacts-form__comment" type="text" value="Комментарий" />
                                    </form>
                                </div>
                                <span className="order__separator-horizontal" />
                                <div className="order__delivery">
                                    <h4 className="order__heading">Доставка</h4>
                                    <div className="wrap-contacts wrap-contacts_margin">
                                        <div className="order__btn-popUp">
                                            <p className="order__text">Область</p>
                                            <div className="arrow-menu_orange">
                                                <ArrowDownMenu />
                                            </div>
                                        </div>
                                        <div className="order__btn-popUp">
                                            <p className="order__text">Город</p>
                                            <div className="arrow-menu_orange">
                                                <ArrowDownMenu />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wrap-contacts">
                                        <div className="order__btn-popUp">
                                            <p className="order__text">Отделение</p>
                                            <div className="arrow-menu_orange">
                                                <ArrowDownMenu />
                                            </div>
                                        </div>
                                        <div className="order__btn-popUp">
                                            <input className="order__text" type="text" value="Почтовый индекс" />
                                        </div>
                                    </div>
                                </div>
                                <span className="order__separator-horizontal" />
                                <div className="order__payment">
                                    <h4 className="order__heading">Оплата</h4>
                                    <label className="input-wrap order__text">Наличные
                                        <input type="radio" name="payment" value="cash" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="input-wrap order__text">Оплата картой
                                        <input type="radio" name="payment" value="cardPayment" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="input-wrap order__text">Оплата картой онлайн
                                        <input type="radio" name="payment" value="cardPaymentOnline" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>

                            <div className="order__right">
                                <h4 className="order__heading">Товары в корзине</h4>
                                <div className="cart-order">
                                    <div className="order__image">
                                        <img src={productImg} />
                                    </div>
                                    <div className="order__info-right">
                                        <h3 className="order__title">Гербицид Комманд®, ФМС Украина</h3>
                                        <div className="order__price-quantity">
                                            <p>7814,63 грн <span>x1</span></p>
                                        </div>
                                    </div>
                                    <img className="order__cancel" src={cancel} alt="Удалить выбранный товар" />
                                </div>
                                <div className="cart-order">
                                    <div className="order__image">
                                        <img src={productImg} />
                                    </div>
                                    <div className="order__info-right">
                                        <h3 className="order__title">Гербицид Комманд®, ФМС Украина</h3>
                                        <div className="order__price-quantity">
                                            <p>7814,63 грн <span>x1</span></p>
                                        </div>
                                    </div>
                                    <img className="order__cancel" src={cancel} alt="Удалить выбранный товар" />
                                </div>
                                <div className="cart-order_small">
                                    <div className="order__info-top">
                                        <h3 className="order__title">Гербицид Комманд®, ФМС Украина</h3>
                                        <img className="order__cancel" src={cancel} alt="Удалить выбранный товар" />
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
                                </div>
                                <div className="cart-order_small">
                                    <div className="order__info-top">
                                        <h3 className="order__title">Гербицид Комманд®, ФМС Украина</h3>
                                        <img className="order__cancel" src={cancel} alt="Удалить выбранный товар" />
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
                                </div>
                                <div className="order__buy-product">
                                    <p className="order__buy-product_margin">Итого: <span>2 товара </span></p>
                                    <p>На сумму: <span>15 629,26</span></p>
                                </div>
                                <div className="order__confirm">Подтвердить заказ</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}