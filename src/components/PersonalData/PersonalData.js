import './PersonalData.scss';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRegistered } from '../../store/registration/selectors';
import {
    registerAdress,
    registerEmail,
    registerName,
    registerPhone,
    registerSurname
}
    from '../../store/registration/action';
import { InputBox } from '../Inputs/InputBox';

export const PersonalData = () => {
    const breadcrumbs = [
        {
            name: "Личный кабинет",
            to: "/Agricultural_online_store/personal_account"
        },
        {
            name: "Личные данные",
            to: "/Agricultural_online_store/personal_data"
        },
    ];
    const dispatch = useDispatch();

    const { name, surname, phone, email, adress } = useSelector(selectUserRegistered);

    return (
        <>
            <div className="personal-data">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <PageHeadingTwice>Личные данные</PageHeadingTwice>
                <div className="personal-data__form">
                    <div className="wrap-data">
                        <InputBox text="Имя" value={name} dispatchRegister={registerName} />
                        <InputBox text="Фамилия" value={surname} dispatchRegister={registerSurname} />
                    </div>
                    <div className="wrap-data wrap-data_margin">
                        <InputBox text="Телефон" value={phone} dispatchRegister={registerPhone} />
                        <InputBox text="Почта" value={email} dispatchRegister={registerEmail} />
                    </div >
                    <div className="input-box">Адрес для доставки
                        <div className="personal-data__input-adress">
                            <input type="adress"
                                value={adress} onChange={(e) => dispatch(registerAdress(e.target.value))} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}