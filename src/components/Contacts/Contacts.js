import './Contacts.scss';
import { Phone } from '../SVG/Icon/Phone';
import { Mail } from '../SVG/Icon/Mail';
import { GPS } from '../SVG/Icon/GPS';
import { Time } from '../SVG/Icon/Time';
import { PageHeadingTwice } from '../PageHeading/PageHeading';

export const Contacts = () => {
    return (
        <>
            <div className="contacts">
                <div className="container">
                    <PageHeadingTwice>Контакты</PageHeadingTwice>
                    <div className="contacts__company-data">
                        <div className="contacts__data-top">
                            <div className="contacts__details-items">
                                <div className="contacts__details-item"><div className="contacts__icon"><div className="circle-icon"><GPS /></div></div><p className="contacts__adress">Украина, Винницкая область, Винница, Хмельницкое шоссе, 122</p></div>
                                <div className="contacts__details-item"><div className="contacts__icon"><div className="circle-icon"><Time /></div></div><p><span className="contacts__text-days">Пн-Пт</span><br /> 9.00-18.00 </p></div>
                                <div className="contacts__details-item"><div className="contacts__icon"><div className="circle-icon"><Mail /></div></div> <p>shop@ukrsemena.com</p></div>
                            </div>
                        </div>
                        <span className="contacts__separator-horizontal" />
                        <div className="contacts__data-bottom">
                            <h4 className="contacts__heading">Отдел продаж и агрономического сопровождения</h4>
                            <p className="contacts__text contacts__text_top">
                                Если вам нужна помощь при оформлении заказа, консультация по использованию
                                товаров, есть вопросы что к вашим заказам обращайтесь сюда:
                            </p>
                            <div className="contacts__details-items">
                                <div className="contacts__details-item"><div className="contacts__icon"><div className="circle-icon"><Time /></div></div><p><span className="contacts__text-days">Пн-Пт</span><br />  9-00-17-00</p></div>
                                <div className="contacts__details-item"><div className="contacts__icon"><div className="circle-icon"><Phone /></div></div>
                                    <div><p>(050) 42-42-820</p> <p>(050) 42-42-824</p></div>
                                </div>
                                <div className="contacts__details-item"><div className="contacts__icon"><div className="circle-icon"><Phone /></div></div>
                                    <div><p>(097) 182-51-41</p><p>(098) 123-70-00</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PageHeadingTwice> Напишите нам</PageHeadingTwice>
                    <div className="contacts__personal-data">
                        <p className="contacts__text contacts__text_bottom">Введите ваши контактные данные и текст сообщения, если у вас возникли вопросы или
                            предложения, и мы в ближайшее время ответим вам.</p>
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
                            <div className="contacts-form__btn">Отправить</div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}