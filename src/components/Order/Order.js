import './Order.scss';
import { ArrowCheckbox } from '../SVG/ArrowCheckbox/ArrowCheckbox';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { OrderProduct, OrderProductSmall } from '../OrderProduct/OrderProduct';
import { costCart, countCart, selectCart } from '../../store/cart/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserOrder } from '../../store/order/selectors';
import {
    orderComment,
    orderEmail,
    orderName,
    orderPhone,
    orderPostcode,
    orderSurname
} from '../../store/order/action';

export const Order = () => {
    const breadcrumbs = [
        {
            name: "Корзина",
            to: "/cart"
        },
        {
            name: "Заказ",
            to: "/order"
        }
    ];

    const totalCount = useSelector(countCart);
    const costTotal = useSelector(costCart);

    const cartProducts = useSelector(selectCart);

    const { name, surname, phone, email, comment, postcode } = useSelector(selectUserOrder);

    const dispatch = useDispatch();

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="order">
                <PageHeadingTwice>Оформление заказа</PageHeadingTwice>
                <div className="container">
                    <div className="order__left">
                        <div>
                            <h4 className="order__heading">Ваши контакты</h4>
                            <form className="contacts-form">
                                <div className="contacts-form__wrap-data">
                                    <input className="contacts-form__data" type="text" placeholder="Имя"
                                        value={name} onChange={(e) => dispatch(orderName(e.target.value))} />
                                    <input className="contacts-form__data" type="text" placeholder="Фамилия"
                                        value={surname} onChange={(e) => dispatch(orderSurname(e.target.value))} />
                                </div>
                                <div className="contacts-form__wrap-data">
                                    <input className="contacts-form__data" type="text" placeholder="Телефон"
                                        value={phone} onChange={(e) => dispatch(orderPhone(e.target.value))} />
                                    <input className="contacts-form__data" type="email" placeholder="E-mail"
                                        value={email} onChange={(e) => dispatch(orderEmail(e.target.value))} />
                                </div>
                                <input className="contacts-form__comment" type="text" placeholder="Комментарий"
                                    value={comment} onChange={(e) => dispatch(orderComment(e.target.value))} />
                            </form>
                        </div>
                        <span className="order__separator-horizontal" />
                        <div className="order__delivery">
                            <h4 className="order__heading">Доставка</h4>
                            <div className="wrap-contacts wrap-contacts_margin">
                                <div className="order__btn-popUp">
                                    <p className="order__text arrow-checkbox_orange">Область<ArrowCheckbox /></p>
                                </div>
                                <div className="order__btn-popUp">
                                    <p className="order__text arrow-checkbox_orange">Город<ArrowCheckbox /></p>
                                </div>
                            </div>
                            <div className="wrap-contacts">
                                <div className="order__btn-popUp">
                                    <p className="order__text arrow-checkbox_orange">Отделение<ArrowCheckbox /></p>
                                </div>
                                <div className="order__btn-popUp">
                                    <input className="order__text" type="text" placeholder="Почтовый индекс"
                                        value={postcode} onChange={(e) => dispatch(orderPostcode(e.target.value))} />
                                </div>
                            </div>
                        </div>
                        <span className="order__separator-horizontal" />
                        <div className="order__payment">
                            <h4 className="order__heading">Оплата</h4>
                            <label className="input-wrap order__text">Наличные
                                <input type="radio" name="payment" value="cash" />
                                <span className="checkmark" />
                            </label>
                            <label className="input-wrap order__text">Оплата картой
                                <input type="radio" name="payment" value="cardPayment" />
                                <span className="checkmark" />
                            </label>
                            <label className="input-wrap order__text">Оплата картой онлайн
                                <input type="radio" name="payment" value="cardPaymentOnline" />
                                <span className="checkmark" />
                            </label>
                        </div>
                    </div>
                    <div className="order__right">
                        <h4 className="order__heading">Товары в корзине</h4>
                        {cartProducts.map(product => (
                            <OrderProduct product={product} key={product.id} />
                        ))}
                        {cartProducts.map(product => (
                            <OrderProductSmall product={product} key={product.id} />
                        ))}
                        <div className="order__buy-product">
                            <p className="order__buy-product_margin">Итого: <span>{totalCount} шт </span></p>
                            <p>На сумму: <span>{costTotal} руб</span></p>
                        </div>
                        <div className="order__confirm">
                            <Link to="/thanks_order" className="order__link">Подтвердить заказ</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}