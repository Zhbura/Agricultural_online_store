import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import './ChangePassword.scss';

export const ChangePassword = () => {
    const breadcrumbs = [
        {
            name: "Личный кабинет",
            to: "/personal_account"
        },
        {
            name: "Изменить пароль",
            to: "/change_password"
        },
    ];
    return (
        <>
            <div className="change-password">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
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
                    <button className="cabinet-btn">Изменить пароль</button>
                </form>
            </div>
        </>
    )
}