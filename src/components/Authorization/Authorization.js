import { Link } from 'react-router-dom';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import './Authorization.scss';
import { useState } from 'react';
import { ButtonForm } from '../Button/ButtonForm';
import { login } from '../../services/firebase';

export const Authorization = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState("");

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePass = (e) => {
        setPass(e.target.value);
    }

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
                    <input className="authorization__input" type="text" placeholder="Логин"
                        value={email} onChange={handleChangeEmail} />
                    <input className="authorization__input" type="password" placeholder="Пароль"
                        value={pass} onChange={handleChangePass} />
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