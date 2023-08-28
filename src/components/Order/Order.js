import './Order.scss';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { OrderProduct, OrderProductSmall } from '../OrderProduct/OrderProduct';
import { costCart, countCart, selectCart } from '../../store/cart/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserOrder } from '../../store/order/selectors';
import {
    orderCity,
    orderDepartment,
    orderEmail,
    orderName,
    orderPhone,
    orderPostcode,
    orderRegion,
    orderSurname
} from '../../store/order/action';
import { DropdownOrder } from '../Dropdown/DropdownOrder';
import { useState } from 'react';
import { OrderFormGuest } from '../Form/OrderFormGuest';
import { OrderFormRegistered } from '../Form/OrderFormRegistered';
import { selectUserRegistered } from '../../store/registration/selectors';

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

    const dispatch = useDispatch();

    const cities = ["Москва", "Санкт-Петербург", "Тверь"];
    const [city, setCity] = useState("");

    const regions = ["Московская область", "Ленинградская область", "Тверская область"];
    const [region, setRegion] = useState('');

    const departments = ['№ 1', '№ 2', '№ 3'];
    const [department, setDepartment] = useState('');

    const [formOrder, setFormOrder] = useState(true);

    const { postcode } = useSelector(selectUserOrder);


    const { name, surname, phone, email } = useSelector(selectUserRegistered);

    const handleSubmit = () => {

        dispatch(orderName(name))
        dispatch(orderSurname(surname))
        dispatch(orderPhone(phone))
        dispatch(orderEmail(email))
    }
    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="order">
                <PageHeadingTwice>Оформление заказа</PageHeadingTwice>
                <div className="container">
                    <div className="order__left">
                        <div>
                            <h4 className="order__heading">Ваши контакты</h4>
                            <div className="data-registration">
                                <p> Взять данные из личного кабинета?</p>
                                <button className="data-registration__btn" onClick={() => setFormOrder(false)}>Да</button>
                                <button className="data-registration__btn" onClick={() => setFormOrder(true)}>Нет</button>
                            </div>
                            {formOrder && <OrderFormGuest />}
                            {!formOrder && <OrderFormRegistered />}
                        </div>
                        <span className="order__separator-horizontal" />
                        <div className="order__delivery">
                            <h4 className="order__heading">Доставка</h4>
                            <div className="wrap-contacts wrap-contacts_margin">
                                <DropdownOrder
                                    array={regions}
                                    selected={region}
                                    setSelected={setRegion}
                                    dispatchOrder={orderRegion}
                                    initialValue="Область" />
                                <DropdownOrder
                                    array={cities}
                                    selected={city}
                                    setSelected={setCity}
                                    dispatchOrder={orderCity}
                                    initialValue="Город" />
                            </div>
                            <div className="wrap-contacts">
                                <DropdownOrder
                                    array={departments}
                                    selected={department}
                                    setSelected={setDepartment}
                                    dispatchOrder={orderDepartment}
                                    initialValue="Отделение" />
                                <input className="input-data" type="text" placeholder="Почтовый индекс"
                                    value={postcode} onChange={(e) => dispatch(orderPostcode(e.target.value))} />
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
                        {formOrder &&
                            <div className="order__confirm">
                                <Link to="/thanks_order" className="order__link">Подтвердить заказ</Link>
                            </div>
                        }
                        {!formOrder &&
                            <div className="order__confirm" onClick={() => handleSubmit()}>
                                <Link to="/thanks_order" className="order__link">
                                    Подтвердить заказ
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}