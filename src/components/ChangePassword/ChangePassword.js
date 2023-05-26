import { PageHeadingTwice } from '../PageHeading/PageHeading';
import './ChangePassword.scss';

export const ChangePassword = () => {
    return (
        <>
            <div className="change-password">
                <PageHeadingTwice>Изменить пароль</PageHeadingTwice>
                <form className="change-password__form">
                    <label className="change-password__label">Старый пароль
                        <input className="change-password__input" type="password" />
                    </label>
                    <label className="change-password__label">Новый пароль
                        <input className="change-password__input" type="password" />
                    </label>
                    <label className="change-password__label">Подтвердить пароль
                        <input className="change-password__input" type="password" />
                    </label>
                    <div className="cabinet-btn">Изменить пароль</div>
                </form>
            </div>
        </>
    )
}