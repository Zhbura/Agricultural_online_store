import { Link } from 'react-router-dom';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import './Authorization.scss';
import { useState } from 'react';
import { ButtonForm } from '../Button/ButtonForm';
import { login } from '../../services/firebase';
import { InputBig } from '../Inputs/InputBig';

export const Authorization = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState("");

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
                    <InputBig placeholder="Логин" type="email" value={email} setFunc={setEmail} />
                    <InputBig placeholder="Пароль" type="password" value={pass} setFunc={setPass} />
                    <ButtonForm>  Войти </ButtonForm>
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