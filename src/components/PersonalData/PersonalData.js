import './PersonalData.scss';
import pencil from '../../img/pencilCorrect.svg';
import { PageHeadingTwice } from '../PageHeading/PageHeading';

export const PersonalData = () => {
    return (
        <>
            <div className="personal-data">
                <PageHeadingTwice>Личный данные</PageHeadingTwice>
                <form className="personal-data__form">
                    <div className="wrap-personalData">
                        <div className="personal-data__text"> Имя
                            <div className="personal-data__input">
                                <input type="text" value="Людмила" />
                                <img src={pencil} alt="Исправить данные" />
                            </div>
                        </div>
                        <div className="personal-data__text">Фамилия
                            <div className="personal-data__input">
                                <input type="text" value="Жук" />
                                <img src={pencil} alt="Исправить данные" />
                            </div>
                        </div>
                    </div>
                    <div className="wrap-personalData">
                        <div className="personal-data__text personal-data__text_margin">Телефон
                            <div className="personal-data__input">
                                <input type="text" value="+38 (050)-528-85-95" />
                                <img src={pencil} alt="Исправить данные" />
                            </div>
                        </div>
                        <div className="personal-data__text personal-data__text_margin">Почта
                            <div className="personal-data__input">
                                <input type="mail" value="juchok@gmail.com" />
                                <img src={pencil} alt="Исправить данные" />
                            </div>
                        </div>
                    </div >
                    <div className="personal-data__text">Адрес для доставки
                        <div className="personal-data__input-adress">
                            <input type="adress" value="Львов, ул. Текстильная, д. 5" />
                            <img src={pencil} alt="Исправить данные" />
                        </div>
                    </div>
                    <div className="cabinet-btn">Сохранить</div>
                </form >
            </div >
        </>
    )
}