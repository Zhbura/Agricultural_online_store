import './Registration.scss';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { useState } from 'react';

export const Registration = () => {
    const breadcrumbs = [
        {
            name: "Регистрация",
            to: "/registration"
        },
    ];
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePass = (e) => {
        setPass(e.target.value);
    }

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="registration">
                <PageHeadingTwice>Регистрация</PageHeadingTwice>
                <p className="registration__text">
                    Зарегистрируйтесь, чтобы использовать все возможности личного кабинета: отслеживание заказов,
                    настройки, подписки, связи с социальными сетями и другие. Мы никогда и ни при каких
                    условиях не разглашаем личные данные клиентов. Контактная информация будет использована
                    только для оформления заказов и более удобной работы с сайтом.
                </p>
                <div className="registration__data">
                    <form className="contacts-form">
                        <div className="contacts-form__wrap-data">
                            <input className="contacts-form__data" type="text" value="Имя" />
                            <input className="contacts-form__data" type="text" value="Фамилия" />
                        </div>
                        <div className="contacts-form__wrap-data">
                            <input className="contacts-form__data" type="text" value="Телефон" />
                            <input className="contacts-form__data" type="email" placeholder="E-mail"
                                value={email} onChange={handleChangeEmail} />
                        </div>
                        <input className="contacts-form__password" type="password" placeholder="Пароль"
                            value={pass} onChange={handleChangePass} />
                        <input className="contacts-form__password contacts-form__password_margin"
                            type="text"
                            value="Подтвердите пароль" />
                        <label className="registration__data-protection">я согласен на обработку и защиту
                            <span className="registration__data-protection_span"> персональных данных</span>
                            <input type="checkbox" name="radio" />
                            <span className="registration__data-protection_checkmark"></span>
                        </label>
                        <div className="btn-form">
                            <Link to="/personal_account" className="btn-form__link">Зарегистрироваться</Link>
                        </div>
                    </form>
                    <p className="registration__text">
                        Если вы уже зарегистрированы на сайте, пожалуйста войдите в свою
                        <Link to="/authorization"> учетную запись</Link>.
                    </p>
                </div>
            </div>
        </>
    )
}