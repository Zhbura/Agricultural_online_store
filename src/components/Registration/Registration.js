import './Registration.scss';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { useEffect, useState } from 'react';
import { ButtonForm } from '../Button/ButtonForm';
import { signUp } from '../../services/firebase';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/registration/action';
import { InputContacts } from '../Inputs/InputContacts';
import { InputBig } from '../Inputs/InputBig';
import { InputPassConfirm } from '../Inputs/InputPassConfirm';

export const Registration = () => {
    const breadcrumbs = [
        {
            name: "Регистрация",
            to: "/registration"
        },
    ];
    const [error, setError] = useState("");
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passConfirm, setPassConfirm] = useState('');
    const [checked, setChecked] = useState(false);

    const dispatch = useDispatch();

    const handleSignUp = async () => {
        try {
            await signUp(email, password);
        } catch (e) {
            setError(e.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        handleSignUp();

        dispatch(registerUser(name, surname, phone, email, password, passConfirm));

        setName('');
        setSurname('');
        setPhone('');
        setEmail('');
        setPassword('');
        setPassConfirm('');
    }

    // Для проверки валидности формы регистрации

    const [nameError, setNameError] = useState(`*Обязательное поле для ввода`);
    const [surnameError, setSurnameError] = useState(`*Обязательное поле для ввода`);
    const [emailError, setEmailError] = useState(`*Обязательное поле для ввода`);
    const [phoneError, setPhoneError] = useState(`*Обязательное поле для ввода`);
    const [passwordError, setPasswordError] = useState(`*Обязательное поле для ввода`);
    const [passConfirmError, setPassConfirmError] = useState(`*Обязательное поле для ввода`);

    const [nameDirty, setNameDirty] = useState(false);
    const [surnameDirty, setSurnameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passConfirmDirty, setPassConfirmDirty] = useState(false);

    const [formValid, setFormValid] = useState(false);

    const [passСomparison, setPassComparison] = useState(false);

    // Форма не будет также валидна пока пароль и подтверждение пароля не будут совпадать !passСomparison
    // checked Для согласия обработки данных
    useEffect(() => {
        if (nameError || surnameError || emailError || phoneError || passwordError || passConfirmError || !passСomparison || !checked) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [nameError, surnameError, emailError, phoneError, passwordError, passConfirmError, passСomparison, checked])

    const blurHandler = (e) => {
        switch (e.target.title) {
            case `name`:
                setNameDirty(true)
                break
            case `surname`:
                setSurnameDirty(true)
                break
            case `email`:
                setEmailDirty(true)
                break
            case `phone`:
                setPhoneDirty(true)
                break
            case `password`:
                setPasswordDirty(true)
                break
            case `passConfirm`:
                setPassConfirmDirty(true)
                break
        }
    }

    const regExpName = /^[А-Я][а-яё]*$/;
    const regExpEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;
    const regExpPhone = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    const regExpPassword = /[0-9a-zA-Z!@#$%^&*]{8,}$/;

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
                            <div className="wrap-input">
                                {(nameDirty && nameError) &&
                                    <p className="wrap-input__error-msg">{nameError}</p>}
                                <InputContacts
                                    placeholder="Имя"
                                    type="text"
                                    value={name}
                                    setFunc={setName}
                                    title='name'
                                    funcBlur={blurHandler}
                                    regExp={regExpName}
                                    setMsgErr={setNameError}
                                />
                            </div>
                            <div className="wrap-input">
                                {(surnameDirty && surnameError) &&
                                    <p className="wrap-input__error-msg">{surnameError}</p>}
                                <InputContacts
                                    placeholder="Фамилия"
                                    type="text"
                                    value={surname}
                                    setFunc={setSurname}
                                    title='surname'
                                    funcBlur={blurHandler}
                                    regExp={regExpName}
                                    setMsgErr={setSurnameError}
                                />
                            </div>
                        </div>
                        <div className="contacts-form__wrap-data">
                            <div className="wrap-input">
                                {(phoneDirty && phoneError) &&
                                    <p className="wrap-input__error-msg">{phoneError}</p>}
                                <InputContacts
                                    placeholder="Телефон"
                                    type="text"
                                    value={phone}
                                    setFunc={setPhone}
                                    title='phone'
                                    funcBlur={blurHandler}
                                    regExp={regExpPhone}
                                    setMsgErr={setPhoneError}
                                />
                            </div>
                            <div className="wrap-input">
                                {(emailDirty && emailError) &&
                                    <p className="wrap-input__error-msg">{emailError}</p>}
                                <InputContacts
                                    placeholder="E-mail"
                                    type="email"
                                    value={email}
                                    setFunc={setEmail}
                                    title='email'
                                    funcBlur={blurHandler}
                                    regExp={regExpEmail}
                                    setMsgErr={setEmailError}
                                />
                            </div>
                        </div>
                        <div className="registration__wrap-inputs">
                            <div className="wrap-input wrap-input_margin">
                                {(passwordDirty && passwordError) &&
                                    <p className="wrap-input__error-msg">{passwordError}</p>}
                                <InputBig
                                    placeholder="Пароль"
                                    type="password"
                                    value={password}
                                    setFunc={setPassword}
                                    title='password'
                                    funcBlur={blurHandler}
                                    regExp={regExpPassword}
                                    setMsgErr={setPasswordError}
                                    passwordDirty={passwordDirty}
                                    passConfirmDirty={passConfirmDirty}
                                    setPassComparison={setPassComparison}
                                    passConfirm={passConfirm}
                                />
                            </div>
                            <div className="wrap-input">
                                {(passConfirmDirty && passConfirmError) &&
                                    <p className="wrap-input__error-msg">{passConfirmError}</p>}
                                <InputPassConfirm
                                    value={passConfirm}
                                    setFunc={setPassConfirm}
                                    passСomparison={passСomparison}
                                    setPassComparison={setPassComparison}
                                    password={password}
                                    title='passConfirm'
                                    funcBlur={blurHandler}
                                    regExp={regExpPassword}
                                    setMsgErr={setPassConfirmError}
                                />
                            </div>
                        </div>
                        <label className="registration__data-protection">я согласен на обработку и защиту
                            <span className="registration__data-protection_span"> персональных данных</span>
                            <input type="checkbox" name="radio" checked={checked}
                                onChange={() => setChecked(!checked)}
                            />
                            <span className="registration__data-protection_checkmark"></span>
                        </label>
                        <ButtonForm formValid={formValid}>Зарегистрироваться</ButtonForm>
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