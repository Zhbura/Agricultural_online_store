import './Registration.scss';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { useState } from 'react';
import { ButtonForm } from '../Button/ButtonForm';
import { signUp } from '../../services/firebase';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/registration/action';
import { InputContacts } from '../Inputs/InputContacts';
import { InputBig } from '../Inputs/InputBig';

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
                    <form className="contacts-form" onSubmit={handleSubmit}>
                        <div className="contacts-form__wrap-data">
                            <InputContacts placeholder="Имя" type="text" value={name} setFunc={setName} />
                            <InputContacts placeholder="Фамилия" type="text" value={surname} setFunc={setSurname} />
                        </div>
                        <div className="contacts-form__wrap-data">
                            <InputContacts placeholder="Телефон" type="text" value={phone} setFunc={setPhone} />
                            <InputContacts placeholder="E-mail" type="email" value={email} setFunc={setEmail} />
                        </div>
                        <div className="registration__wrap-inputs">
                            <InputBig placeholder="Пароль" type="password" value={password} setFunc={setPassword} />
                            <InputBig placeholder="Подтвердите пароль" type="password" value={passConfirm} setFunc={setPassConfirm} />
                        </div>
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