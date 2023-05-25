import './Registration.scss';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { TopBar } from '../TopBar/TopBar';
import { Header } from '../Header/Header';
import { BottomBar } from '../BottomBar/BottomBar';
import { Footer } from '../Footer/Footer';
import { Link } from 'react-router-dom';

export const Registration = () => {
    return (
        <>
            <div className="wrapper">
                <div className="top">
                    <TopBar />
                    <Header />
                    <BottomBar />
                    <div className="registration">
                        <PageHeadingTwice>Регистрация</PageHeadingTwice>
                        <p className="registration__text">
                            Войдите, чтобы использовать все возможности Личного кабинета: отслеживание заказов,
                            Настройки Подписки, связи с социальными сетями и другие. Мы никогда и ни при каких
                            условиях не разглашаем личные данные клиентов. Контактная информация будет использована
                            только для оформления заказов и более удобной работы с сайтом
                        </p>
                        <div className="registration__data">
                            <form className="contacts-form">
                                <div className="contacts-form__wrap-data">
                                    <input className="contacts-form__data" type="text" value="Имя" />
                                    <input className="contacts-form__data" type="text" value="Фамилия" />
                                </div>
                                <div className="contacts-form__wrap-data">
                                    <input className="contacts-form__data" type="text" value="Телефон" />
                                    <input className="contacts-form__data" type="email" value="E-mail" />
                                </div>
                                <input className="contacts-form__password" type="text" value="Пароль" />
                                <input className="contacts-form__password contacts-form__password_margin" type="text" value="Подтвердите пароль" />
                                <label className="registration__data-protection">я согласен на обработку и защиту <span className="registration__data-protection_span">персональных данных</span>
                                    <input type="checkbox" name="radio" />
                                    <span className="registration__data-protection_checkmark"></span>
                                </label>
                                <div className="contacts-form__btn"><Link to="/personal_account" className="registration__link">Зарегистрироваться</Link></div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}