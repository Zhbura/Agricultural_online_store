import './PersonalData.scss';
import pencil from '../../img/pencilCorrect.svg';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserAdress, selectUserEmail, selectUserName, selectUserPhone, selectUserSurname } from '../../store/registration/selectors';
import { registerAdress, registerEmail, registerName, registerPhone, registerSurname } from '../../store/registration/action';

export const PersonalData = () => {
    const breadcrumbs = [
        {
            name: "Личный кабинет",
            to: "/personal_account"
        },
        {
            name: "Личные данные",
            to: "/personal_data"
        },
    ];
    const dispatch = useDispatch();

    const userName = useSelector(selectUserName);
    const userSurname = useSelector(selectUserSurname);
    const phone = useSelector(selectUserPhone);
    const email = useSelector(selectUserEmail);
    const adress = useSelector(selectUserAdress);

    return (
        <>
            <div className="personal-data">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <PageHeadingTwice>Личные данные</PageHeadingTwice>
                <form className="personal-data__form">
                    <div className="wrap-personalData">
                        <div className="personal-data__text"> Имя
                            <div className="personal-data__input">
                                <input type="text" value={userName} onChange={(e) => dispatch(registerName(e.target.value))} />
                                <img src={pencil} alt="Исправить данные" />
                            </div>
                        </div>
                        <div className="personal-data__text">Фамилия
                            <div className="personal-data__input">
                                <input type="text" value={userSurname} onChange={(e) => dispatch(registerSurname(e.target.value))} />
                                <img src={pencil} alt="Исправить данные" />
                            </div>
                        </div>
                    </div>
                    <div className="wrap-personalData">
                        <div className="personal-data__text personal-data__text_margin">Телефон
                            <div className="personal-data__input">
                                <input type="text" value={phone} onChange={(e) => dispatch(registerPhone(e.target.value))} />
                                <img src={pencil} alt="Исправить данные" />
                            </div>
                        </div>
                        <div className="personal-data__text personal-data__text_margin">Почта
                            <div className="personal-data__input">
                                <input type="mail" value={email} onChange={(e) => dispatch(registerEmail(e.target.value))} />
                                <img src={pencil} alt="Исправить данные" />
                            </div>
                        </div>
                    </div >
                    <div className="personal-data__text">Адрес для доставки
                        <div className="personal-data__input-adress">
                            <input type="adress" placeholder="Москва, ул. Текстильная, д. 5"
                                value={adress} onChange={(e) => dispatch(registerAdress(e.target.value))} />
                            <img src={pencil} alt="Исправить данные" />
                        </div>
                    </div>
                    <div className="cabinet-btn">Сохранить</div>
                </form >
            </div >
        </>
    )
}