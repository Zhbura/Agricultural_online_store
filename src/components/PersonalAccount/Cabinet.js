import { Link } from "react-router-dom"
import { ClipBoard } from "../SVG/Icon/ClipBoard"
import { PersonalData } from "../SVG/Icon/PersonalData"
import { History } from "../SVG/Icon/History"
import { Unlock } from "../SVG/Icon/Unlock"
import { PageHeadingTwice } from "../PageHeading/PageHeading"

export const Cabinet = () => {
    return (
        <>
            <div className="cabinet">
                <PageHeadingTwice>Личный кабинет</PageHeadingTwice>
                <div className="personal-account__items">
                    <div className="personal-account__item icon_green">
                        <Link to="current_orders" className="personal-account__link"><ClipBoard />
                            Текущие заказы
                        </Link>
                    </div>
                    <div className="personal-account__item">
                        <Link to="personal_data" className="personal-account__link"><PersonalData />
                            Личные данные
                        </Link>
                    </div>
                    <div className="personal-account__item">
                        <Link to="order_history" className="personal-account__link"><History />
                            История заказов
                        </Link>
                    </div>
                    <div className="personal-account__item">
                        <Link to="change_password" className="personal-account__link"> <Unlock />
                            Изменить пароль
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}