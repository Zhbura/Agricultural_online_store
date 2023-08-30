import './Order.scss';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { OrderProduct, OrderProductSmall } from '../OrderProduct/OrderProduct';
import { costCart, countCart, selectCart } from '../../store/cart/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { orderUserData } from '../../store/order/action';
import { DropdownOrder } from '../Dropdown/DropdownOrder';
import { useState } from 'react';
import { OrderFormRegistered } from '../Form/OrderFormRegistered';
import { selectUserRegistered } from '../../store/registration/selectors';
import { InputContacts } from '../Inputs/InputContacts';
import { InputComment } from '../Inputs/InputComment';

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

    const regions = ["Московская область", "Ленинградская область", "Тверская область"];
    const cities = ["Москва", "Санкт-Петербург", "Тверь"];
    const departments = ['№ 1', '№ 2', '№ 3'];

    const [formOrder, setFormOrder] = useState(true);

    const [orderName, setName] = useState('');
    const [orderSurname, setSurname] = useState('');
    const [orderPhone, setPhone] = useState('');
    const [orderEmail, setEmail] = useState('');
    const [orderComment, setComment] = useState('');
    const [postcode, setPostcode] = useState('');
    const [region, setRegion] = useState('');
    const [city, setCity] = useState('');
    const [department, setDepartment] = useState('');

    const { name, surname, phone, email } = useSelector(selectUserRegistered);

    const handleOrderDataReg = () => {
        dispatch(orderUserData(email, name, surname, phone, orderComment,
            postcode, region, city, department))
    }

    const handleOrderDataGuest = () => {
        dispatch(orderUserData(orderEmail, orderName, orderSurname, orderPhone,
            orderComment, postcode, region, city, department))
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
                            <div className="contacts-form">
                                {formOrder &&
                                    <div>
                                        <div className="contacts-form__wrap-data">
                                            <InputContacts placeholder="Имя" type="text" value={orderName} setFunc={setName} />
                                            <InputContacts placeholder="Фамилия" type="text" value={orderSurname} setFunc={setSurname} />
                                        </div>
                                        <div className="contacts-form__wrap-data">
                                            <InputContacts placeholder="Телефон" type="text" value={orderPhone} setFunc={setPhone} />
                                            <InputContacts placeholder="E-mail" type="email" value={orderEmail} setFunc={setEmail} />
                                        </div>
                                    </div>
                                }
                                {!formOrder && <OrderFormRegistered />}
                                <InputComment placeholder="Комментарий" type="text" value={orderComment} setFunc={setComment} />
                            </div>
                        </div>
                        <span className="order__separator-horizontal" />
                        <div className="order__delivery">
                            <h4 className="order__heading">Доставка</h4>
                            <div className="wrap-contacts wrap-contacts_margin">
                                <DropdownOrder
                                    array={regions}
                                    selected={region}
                                    setSelected={setRegion}
                                    initialValue="Область" />
                                <DropdownOrder
                                    array={cities}
                                    selected={city}
                                    setSelected={setCity}
                                    initialValue="Город" />
                            </div>
                            <div className="wrap-contacts">
                                <DropdownOrder
                                    array={departments}
                                    selected={department}
                                    setSelected={setDepartment}
                                    initialValue="Отделение"
                                />
                                <input className="input-data" type="text" placeholder="Почтовый индекс"
                                    value={postcode} onChange={(e) => setPostcode(e.target.value)} />
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
                            <div className="order__confirm" onClick={() => handleOrderDataGuest()}>
                                <Link to="/thanks_order" className="order__link">Подтвердить заказ</Link>
                            </div>
                        }
                        {!formOrder &&
                            <div className="order__confirm" onClick={() => handleOrderDataReg()}>
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