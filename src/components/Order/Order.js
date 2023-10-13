import './Order.scss';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { useDispatch, useSelector } from 'react-redux';
import { orderUserData } from '../../store/order/action';
import { useState } from 'react';
import { OrderFormRegistered } from '../Form/OrderFormRegistered';
import { selectUserRegistered } from '../../store/registration/selectors';
import { InputComment } from '../Inputs/InputComment';
import { ButtonOrder } from '../Button/ButtonOrder';
import { OrderCart } from './OrderCart';
import { OrderPayment } from './OrderPayment';
import { OrderDelivery } from './OrderDelivery';
import { OrderFormGuest } from '../Form/OrderFormGuest';

export const Order = ({ authed }) => {
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

    const dispatch = useDispatch();

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
                            {authed && <div className="data-registration">
                                <p> Взять данные из личного кабинета?</p>
                                <button className="data-registration__btn" onClick={() => setFormOrder(false)}>Да</button>
                                <button className="data-registration__btn" onClick={() => setFormOrder(true)}>Нет</button>
                            </div>
                            }
                            <div className="contacts-form">
                                {formOrder && <OrderFormGuest
                                    orderName={orderName} setName={setName}
                                    orderSurname={orderSurname} setSurname={setSurname}
                                    orderPhone={orderPhone} setPhone={setPhone}
                                    orderEmail={orderEmail} setEmail={setEmail}
                                />}
                                {!formOrder && <OrderFormRegistered />}
                                <InputComment placeholder="Комментарий" type="text" value={orderComment} setFunc={setComment} />
                            </div>
                        </div>
                        <span className="order__separator-horizontal" />
                        <OrderDelivery
                            region={region} setRegion={setRegion}
                            city={city} setCity={setCity}
                            department={department} setDepartment={setDepartment}
                            postcode={postcode} setPostcode={setPostcode}
                        />
                        <span className="order__separator-horizontal" />
                        <OrderPayment />
                    </div>
                    <div className="order__product">
                        <OrderCart />
                        {formOrder && <ButtonOrder sendOrderData={handleOrderDataGuest} />}
                        {!formOrder && <ButtonOrder sendOrderData={handleOrderDataReg} />}
                    </div>
                </div>
            </div>
        </>
    )
}