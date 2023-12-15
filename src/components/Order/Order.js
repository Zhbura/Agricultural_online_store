import './Order.scss';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { useDispatch, useSelector } from 'react-redux';
import { orderUserData } from '../../store/order/action';
import { useEffect, useState } from 'react';
import { OrderFormRegistered } from '../Form/OrderFormRegistered';
import { selectUserRegistered } from '../../store/registration/selectors';
import { ButtonOrder } from '../Button/ButtonOrder';
import { OrderCart } from './OrderCart';
import { OrderPayment } from './OrderPayment';
import { OrderDelivery } from './OrderDelivery';
import { ContactsInputs } from '../Form/ContactsInputs';

export const Order = ({ authed }) => {
    const breadcrumbs = [
        {
            name: "Корзина",
            to: "/Agricultural_online_store/cart"
        },
        {
            name: "Заказ",
            to: "/Agricultural_online_store/order"
        }
    ];

    const dispatch = useDispatch();

    const [formOrder, setFormOrder] = useState(true);

    const [orderName, setName] = useState('');
    const [orderSurname, setSurname] = useState('');
    const [orderPhone, setPhone] = useState('');
    const [orderEmail, setEmail] = useState('');
    const [orderComment, setComment] = useState('');

    // Для валидности всей формы заказа (3-х её частей)
    const [inputContactValid, setInputContactValid] = useState(false);
    const [deliveryValid, setDeliveryValid] = useState(false);
    const [paymentCheckedValid, setPaymentCheckedValid] = useState(false);

    const [formValidOrder, setFormValidOrder] = useState(false);

    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (inputContactValid && deliveryValid && paymentCheckedValid) {
            setFormValidOrder(true)
        } else {
            setFormValidOrder(false)
        }
    }, [deliveryValid, inputContactValid, paymentCheckedValid])

    // Для получения данных пользователя при регистрации
    const user = useSelector(selectUserRegistered);

    const handleOrderDataReg = () => {

        dispatch(orderUserData(user.email, user.name, user.surname, user.phone, orderComment,
            user.postcode, user.region, user.city, user.department))
    }

    const handleOrderDataGuest = () => {

        dispatch(orderUserData(orderEmail, orderName, orderSurname, orderPhone,
            orderComment, user.postcode, user.region, user.city, user.department))
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
                            {authed && <div className="data-registration">
                                <p> Взять данные из личного кабинета?</p>
                                <button className="data-registration__btn"
                                    onClick={() => setFormOrder(false)}>
                                    Да
                                </button>
                                <button className="data-registration__btn"
                                    onClick={() => setFormOrder(true)}>
                                    Нет
                                </button>
                            </div>}
                            <div className="contacts-form">
                                {formOrder && <ContactsInputs
                                    email={orderEmail} setEmail={setEmail}
                                    name={orderName} setName={setName}
                                    surname={orderSurname} setSurname={setSurname}
                                    phone={orderPhone} setPhone={setPhone}
                                    comment={orderComment} setComment={setComment}
                                    setFormValid={setFormValid}
                                    setInputContactValid={setInputContactValid}
                                />}
                                {!formOrder &&
                                    <OrderFormRegistered setInputContactValid={setInputContactValid} />}
                            </div>
                        </div>
                        <span className="order__separator-horizontal" />
                        <OrderDelivery
                            setDeliveryValid={setDeliveryValid}
                        />
                        <span className="order__separator-horizontal" />
                        <OrderPayment
                            paymentCheckedValid={paymentCheckedValid}
                            setPaymentCheckedValid={setPaymentCheckedValid}
                        />
                    </div>
                    <div className="order__products">
                        <OrderCart />
                        {formOrder && <ButtonOrder sendOrderData={handleOrderDataGuest} formValid={formValidOrder} />}
                        {!formOrder && <ButtonOrder sendOrderData={handleOrderDataReg} formValid={formValidOrder} />}
                    </div>
                </div>
            </div>
        </>
    )
}