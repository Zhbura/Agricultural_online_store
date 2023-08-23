import './Registration.scss';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { useState } from 'react';
import { ButtonForm } from '../Button/ButtonForm';
import { signUp } from '../../services/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { registerEmail, registerName, registerPass, registerPassConfirm, registerPhone, registerSurname } from '../../store/registration/action';
import { selectUserEmail, selectUserName, selectUserPass, selectUserPassConfirm, selectUserPhone, selectUserSurname } from '../../store/registration/selectors';

export const Registration = () => {
    const breadcrumbs = [
        {
            name: "Регистрация",
            to: "/registration"
        },
    ];
    const [error, setError] = useState("");

    const dispatch = useDispatch();

    const handleSignUp = async () => {
        try {
            await signUp(email, pass);
        } catch (e) {
            setError(e.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        handleSignUp();
    }

    const userName = useSelector(selectUserName);
    const userSurname = useSelector(selectUserSurname);
    const phone = useSelector(selectUserPhone);
    const passConfirm = useSelector(selectUserPassConfirm);
    const pass = useSelector(selectUserPass);
    const email = useSelector(selectUserEmail);

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
                    <form className="contacts-form" onSubmit={handleSubmit}>
                        <div className="contacts-form__wrap-data">
                            <input className="contacts-form__data" type="text" placeholder="Имя"
                                value={userName} onChange={(e) => dispatch(registerName(e.target.value))} />
                            <input className="contacts-form__data" type="text" placeholder="Фамилия"
                                value={userSurname} onChange={(e) => dispatch(registerSurname(e.target.value))} />
                        </div>
                        <div className="contacts-form__wrap-data">
                            <input className="contacts-form__data" type="text" placeholder="Телефон"
                                value={phone} onChange={(e) => dispatch(registerPhone(e.target.value))} />
                            <input className="contacts-form__data" type="email" placeholder="E-mail"
                                value={email} onChange={(e) => dispatch(registerEmail(e.target.value))} />
                        </div>
                        <input className="contacts-form__password" type="password" placeholder="Пароль"
                            value={pass} onChange={(e) => dispatch(registerPass(e.target.value))} />
                        <input className="contacts-form__password contacts-form__password_margin"
                            type="text" placeholder="Подтвердите пароль"
                            value={passConfirm} onChange={(e) => dispatch(registerPassConfirm(e.target.value))} />
                        <label className="registration__data-protection">я согласен на обработку и защиту
                            <span className="registration__data-protection_span"> персональных данных</span>
                            <input type="checkbox" name="radio" />
                            <span className="registration__data-protection_checkmark"></span>
                        </label>
                        <ButtonForm>Зарегистрироваться</ButtonForm>
                        {error && <span className="err-msg">{error}</span>}
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