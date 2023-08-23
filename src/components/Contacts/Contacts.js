import './Contacts.scss';
import phoneImg from '../../img/icon/phone.svg';
import emailImg from '../../img/icon/email.svg';
import gps from '../../img/icon/gps.svg';
import time from '../../img/icon/time.svg';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { ButtonForm } from '../Button/ButtonForm';
import { useDispatch, useSelector } from 'react-redux';
import {
    guestRegisterComment,
    guestRegisterEmail,
    guestRegisterName,
    guestRegisterPhone,
    guestRegisterSurname
} from '../../store/guest/action';
import { selectGuest } from '../../store/guest/selectors';

export const Contacts = () => {
    const breadcrumbs = [
        {
            name: "Партнёры",
            to: "/partners"
        },
    ];

    const dispatch = useDispatch();

    const { name, surname, phone, email, comment } = useSelector(selectGuest);

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="contacts">
                <div className="container">
                    <PageHeadingTwice>Контакты</PageHeadingTwice>
                    <div className="contacts__company-data">
                        <div className="contacts__data-top">
                            <div className="contacts__details-items">
                                <div className="contacts__details-item">
                                    <div className="contacts__icon">
                                        <div className="circle-icon">
                                            <img src={gps} alt="Адрес: Россия, 
                                            Московская область, Химки, Петербургское шоссе, 122" />
                                        </div>
                                    </div>
                                    <p className="contacts__adress">
                                        Россия, Московская область, Химки,
                                        Петербургское шоссе, 122
                                    </p>
                                </div>
                                <div className="contacts__details-item">
                                    <div className="contacts__icon">
                                        <div className="circle-icon">
                                            <img src={time} alt="Время работы: 
                                            Понедельник - Пятница, 9:00 - 18:00" />
                                        </div>
                                    </div>
                                    <p>
                                        <span className="contacts__text-days">Пн-Пт</span>
                                        <br /> 9:00-18:00
                                    </p>
                                </div>
                                <div className="contacts__details-item">
                                    <div className="contacts__icon">
                                        <div className="circle-icon">
                                            <img src={emailImg} alt="Электронная почта: shop@ukrsemena.com" />
                                        </div>
                                    </div>
                                    <p>shop@ukrsemena.com</p>
                                </div>
                            </div>
                        </div>
                        <span className="contacts__separator-horizontal" />
                        <div className="contacts__data-bottom">
                            <h4 className="contacts__heading">
                                Отдел продаж и агрономического сопровождения
                            </h4>
                            <p className="contacts__text contacts__text_top">
                                Если вам нужна помощь при оформлении заказа,
                                консультация по использованию товаров, есть
                                вопросы что к вашим заказам обращайтесь сюда:
                            </p>
                            <div className="contacts__details-items">
                                <div className="contacts__details-item">
                                    <div className="contacts__icon">
                                        <div className="circle-icon">
                                            <img src={time} alt="Время работы: 
                                            Понедельник - Пятница, 9:00 - 17:00" />
                                        </div>
                                    </div>
                                    <p>
                                        <span className="contacts__text-days">Пн-Пт</span>
                                        <br />  9:00-17:00
                                    </p>
                                </div>
                                <div className="contacts__details-item">
                                    <div className="contacts__icon">
                                        <div className="circle-icon">
                                            <img src={phoneImg} alt="Номер телефона: 
                                            1)+7(950) 42-42-820 2) +7(950) 42-42-824 " />
                                        </div>
                                    </div>
                                    <div>
                                        <p>+7(950) 42-42-820</p>
                                        <p>+7(950) 42-42-824</p>
                                    </div>
                                </div>
                                <div className="contacts__details-item">
                                    <div className="contacts__icon">
                                        <div className="circle-icon">
                                            <img src={phoneImg} alt="Номер телефона: 
                                            1)+7(950) 42-42-820 2) +7(950) 42-42-824" />
                                        </div>
                                    </div>
                                    <div>
                                        <p>+7(097) 182-51-41</p>
                                        <p>+7(098) 123-70-00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PageHeadingTwice> Напишите нам</PageHeadingTwice>
                    <div className="contacts__personal-data">
                        <p className="contacts__text contacts__text_bottom">
                            Введите ваши контактные данные и текст сообщения, если
                            у вас возникли вопросы или предложения, и мы в
                            ближайшее время ответим вам.
                        </p>
                        <form className="contacts-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="contacts-form__wrap-data">
                                <input className="contacts-form__data" type="text" placeholder='Имя'
                                    value={name} onChange={(e) => dispatch(guestRegisterName(e.target.value))} />
                                <input className="contacts-form__data" type="text" placeholder="Фамилия"
                                    value={surname} onChange={(e) => dispatch(guestRegisterSurname(e.target.value))} />
                            </div>
                            <div className="contacts-form__wrap-data">
                                <input className="contacts-form__data" type="text" placeholder="Телефон"
                                    value={phone} onChange={(e) => dispatch(guestRegisterPhone(e.target.value))} />
                                <input className="contacts-form__data" type="email" placeholder="E-mail"
                                    value={email} onChange={(e) => dispatch(guestRegisterEmail(e.target.value))}
                                />
                            </div>
                            <input className="contacts-form__comment" type="text" placeholder="Комментарий"
                                value={comment} onChange={(e) => dispatch(guestRegisterComment(e.target.value))}
                            />
                            <ButtonForm>Отправить</ButtonForm>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}