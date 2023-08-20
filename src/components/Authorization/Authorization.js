import { Link } from 'react-router-dom';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import './Authorization.scss';
import { useState } from 'react';
import { ButtonForm } from '../Button/ButtonForm';

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
                <form>
                    <input className="authorization__input" type="text" placeholder="Логин"
                        value={email} onChange={handleChangeEmail} />
                    <input className="authorization__input" type="password" placeholder="Пароль"
                        value={pass} onChange={handleChangePass} />
                    <ButtonForm>
                        <Link to="/personal_account" className="btn-form__link">Войти</Link>
                    </ButtonForm>
                    {error && <span>{error}</span>}
                </form>
                <p className="authorization__text">
                    Если вы ещё не зарегистрированы на сайте, пожалуйста
                    <Link to="/registration"> зарегистрируйтесь</Link>.
                </p>
            </div>
        </>
    )
}