import './Cart.scss';
import productImg from '../../img/productImgBig.png';
import fabricator from '../../img/fabricator.svg';
import { ArrowDownMenu } from '../SVG/ArrowMenu/ArrowDownMenu';
import cancel from '../../img/cancel.svg';
import { Cart } from '../SVG/Icon/Cart';
import { ClipBoard } from '../SVG/Icon/ClipBoard';
import { PageHeadingTwice } from '../PageHeading/PageHeading';

export const CartComp = ({ active, setActive }) => {
    return (
        <>
            <div className={active ? 'cart active' : 'cart'}>
                <img className="cart__cancel" src={cancel} alt="Закрыть корзину" onClick={() => setActive(false)} />
                <PageHeadingTwice>Корзина</PageHeadingTwice>
                <span className="cart__separator-horizontal" />
                <h3 className="cart__title">Гербицид Комманд®, ФМС Украина</h3>
                <div className="cart__info-top">
                    <div className="cart__info-left">
                        <div className="cart__img">
                            <img src={productImg} />
                        </div>
                    </div>
                    <div className="cart__info-middle">
                        <div className="cart__price-quantity">
                            <p className="cart__price-quantity_margin">7814,63 грн</p>
                            <p className="cart__text">Цена за 5 л</p>
                        </div>
                        <div className="cart__fabricator">
                            <h5 className="cart__heading">Производитель</h5>
                            <img src={fabricator} alt="Производитель лого" />
                            <span className="cart__text cart__text_margin">ФМС Украина</span>
                        </div>
                    </div>
                    <div className="cart__info-right">
                        <div className="cart-popUp">
                            Канистра 5 л
                            <div className="arrow-menu_orange">
                                <ArrowDownMenu />
                            </div>
                        </div>
                        <div className="cart__quantity">
                            <p className="cart__quantity-text">Количество</p>
                            <div className="cart__quantity-circle_small">
                                <span className="cart__minus"></span>
                            </div>
                            <div className="cart__quantity-circle">
                                <span>1</span>
                            </div>
                            <div className="cart__quantity-circle_small">
                                <span className="cart__plus"></span>
                                <span className="cart__minus"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="cart__separator-horizontal" />
                <div className="cart__info-bottom">
                    <div className="btn-cart">
                        <Cart />
                        Продолжить покупки
                    </div>
                    <div className="btn-cart btn-cart_orange">
                        <ClipBoard />
                        Оформить заказ
                    </div>
                </div>
            </div>
        </>
    )
}