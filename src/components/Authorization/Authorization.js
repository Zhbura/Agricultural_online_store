import { Link } from 'react-router-dom';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import './Authorization.scss';
import { useEffect, useState } from 'react';
import { ButtonForm } from '../Button/ButtonForm';
import { login } from '../../services/firebase';
import { InputBig } from '../Inputs/InputBig';

export const Authorization = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState("");

    // Для проверки валидности формы
    const [emailError, setEmailError] = useState(`*Обязательное поле для ввода`);
    const [passwordError, setPasswordError] = useState(`*Обязательное поле для ввода`);

    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);

    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const blurHandler = (e) => {
        switch (e.target.title) {
            case `email`:
                setEmailDirty(true)
                break
            case `password`:
                setPasswordDirty(true)
                break
        }
    }

    const regExpEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;
    const regExpPassword = /[0-9a-zA-Z!@#$%^&*]{8,}$/;

    // Для аутентификации через firebase
    const handleSignIn = async () => {
        try {
            await login(email, pass);
        } catch (e) {
            setError(e.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        handleSignIn();

        setEmail('');
        setPass('');
    }

    return (
        <>
            <div className="authorization">
                <PageHeadingTwice>Вход</PageHeadingTwice>
                <p className="authorization__text">
                    Войдите, чтобы использовать все возможности личного кабинета: отслеживание заказов,
                    настройки, подписки, связи с социальными сетями и другие. Мы никогда и ни при каких
                    условиях не разглашаем личные данные клиентов. Контактная информация будет использована
                    только для оформления заказов и более удобной работы с сайтом.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="wrap-input wrap-input_margin">
                        {(emailDirty && emailError) &&
                            <p className="wrap-input__error-msg">{emailError}</p>}
                        <InputBig
                            placeholder="Логин"
                            type="email"
                            value={email}
                            setFunc={setEmail}
                            title='email'
                            funcBlur={blurHandler}
                            regExp={regExpEmail}
                            setMsgErr={setEmailError} />
                    </div>
                    <div className="wrap-input">
                        {(passwordDirty && passwordError) &&
                            <p className="wrap-input__error-msg">{passwordError}</p>}
                        <InputBig
                            placeholder="Пароль"
                            type="password"
                            value={pass}
                            setFunc={setPass}
                            title='password'
                            funcBlur={blurHandler}
                            regExp={regExpPassword}
                            setMsgErr={setPasswordError}
                        />
                    </div>
                    <ButtonForm formValid={formValid}>  Войти </ButtonForm>
                    {error && <span className="err-msg">{error}</span>}
                </form>
                <p className="authorization__text">
                    Если вы ещё не зарегистрированы на сайте, пожалуйста
                    <Link to="registration"> зарегистрируйтесь</Link>.
                </p>
            </div>
        </>
    )
}