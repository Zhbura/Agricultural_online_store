import './PersonalAccount.scss';
import { ArrowCheckbox } from '../SVG/ArrowCheckbox/ArrowCheckbox';
import { useState } from 'react';
import { ClipBoard } from '../SVG/Icon/ClipBoard';
import { PersonalData } from '../SVG/Icon/PersonalData';
import { Unlock } from '../SVG/Icon/Unlock';
import { History } from '../SVG/Icon/History';
import { NavLink, Link, Outlet } from 'react-router-dom';
import { logOut } from '../../services/firebase';
import exit from '../../img/login.svg';

export const PersonalAccount = () => {
    const [popUpActive, setPopUpActive] = useState(false);
    const setActive = ({ isActive }) => isActive ? 'cabinet-popUp__link_active cabinet-popUp__link' : 'cabinet-popUp__link';

    const handleLogOut = async () => {
        try {
            await logOut();
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="personal-account">
                <div className="container">
                    <div className="cabinet-wrap">
                        <div className="cabinet-popUp_small" onClick={() => setPopUpActive(!popUpActive)}>
                            <Link to="" className="cabinet-popUp__link">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="#84C551" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_135_9727)">
                                        <path d="M10 0C4.48598 0 0 4.48598 0 10C0 15.514 4.48598 20 10 20C15.514 20 20 15.514 20 10C20 4.48598 15.514 0 10 0ZM13.5506 17.8148C12.4679 18.3087 11.2655 18.5842 10 18.5842C8.73445 18.5842 7.53203 18.3087 6.44941 17.8148V14.3541C6.44941 13.3787 7.24289 12.5853 8.2182 12.5853H11.7818C12.7571 12.5853 13.5506 13.3788 13.5506 14.3541V17.8148ZM14.9664 16.998V14.3541C14.9664 12.5981 13.5378 11.1695 11.7818 11.1695H11.6047C12.8555 10.5691 13.7213 9.29008 13.7213 7.81246C13.7213 5.76051 12.0519 4.09117 9.99996 4.09117C7.94801 4.09117 6.27863 5.76055 6.27863 7.81246C6.27863 9.29012 7.14441 10.5691 8.3952 11.1695H8.21813C6.46215 11.1695 5.03352 12.5981 5.03352 14.3541V16.998C2.84559 15.4407 1.41582 12.8841 1.41582 10C1.41582 5.26668 5.26668 1.41582 10 1.41582C14.7333 1.41582 18.5842 5.26668 18.5842 10C18.5842 12.8841 17.1544 15.4407 14.9664 16.998ZM10 10.1179C8.72875 10.1179 7.69449 9.08367 7.69449 7.81242C7.69449 6.54117 8.72875 5.50695 10 5.50695C11.2712 5.50695 12.3055 6.54121 12.3055 7.81242C12.3055 9.08375 11.2712 10.1179 10 10.1179Z" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_135_9727">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Мой кабинет<ArrowCheckbox />
                            </Link>
                        </div>
                        <div className={popUpActive ? 'cabinet-popUp__items_small cabinet-popUp__items active' : 'cabinet-popUp__items_small cabinet-popUp__items'}>
                            <Link to="current_orders" className="cabinet-popUp__link icon_green"><ClipBoard />
                                Текущие заказы</Link>
                            <span className="cabinet-popUp__separator" />
                            <Link to="personal_data" className="cabinet-popUp__link"><PersonalData />
                                Личные данные
                            </Link>
                            <span className="cabinet-popUp__separator" />
                            <Link to="order_history" className="cabinet-popUp__link"><History />
                                История заказов
                            </Link>
                            <span className="cabinet-popUp__separator" />
                            <Link to="change_password" className="cabinet-popUp__link"> <Unlock />
                                Изменить пароль
                            </Link>
                            <span className="cabinet-popUp__separator" />

                            <p className="cabinet-popUp__link" onClick={handleLogOut}>
                                <img src={exit} alt="Выйти" />
                                Выход
                            </p>
                        </div>
                        <div className="cabinet-popUp">
                            <NavLink end to="" className={setActive}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_135_9727)">
                                        <path d="M10 0C4.48598 0 0 4.48598 0 10C0 15.514 4.48598 20 10 20C15.514 20 20 15.514 20 10C20 4.48598 15.514 0 10 0ZM13.5506 17.8148C12.4679 18.3087 11.2655 18.5842 10 18.5842C8.73445 18.5842 7.53203 18.3087 6.44941 17.8148V14.3541C6.44941 13.3787 7.24289 12.5853 8.2182 12.5853H11.7818C12.7571 12.5853 13.5506 13.3788 13.5506 14.3541V17.8148ZM14.9664 16.998V14.3541C14.9664 12.5981 13.5378 11.1695 11.7818 11.1695H11.6047C12.8555 10.5691 13.7213 9.29008 13.7213 7.81246C13.7213 5.76051 12.0519 4.09117 9.99996 4.09117C7.94801 4.09117 6.27863 5.76055 6.27863 7.81246C6.27863 9.29012 7.14441 10.5691 8.3952 11.1695H8.21813C6.46215 11.1695 5.03352 12.5981 5.03352 14.3541V16.998C2.84559 15.4407 1.41582 12.8841 1.41582 10C1.41582 5.26668 5.26668 1.41582 10 1.41582C14.7333 1.41582 18.5842 5.26668 18.5842 10C18.5842 12.8841 17.1544 15.4407 14.9664 16.998ZM10 10.1179C8.72875 10.1179 7.69449 9.08367 7.69449 7.81242C7.69449 6.54117 8.72875 5.50695 10 5.50695C11.2712 5.50695 12.3055 6.54121 12.3055 7.81242C12.3055 9.08375 11.2712 10.1179 10 10.1179Z" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_135_9727">
                                            <rect width="20" height="20" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Мой кабинет
                            </NavLink>
                            <span className="cabinet-popUp__separator" />
                            <NavLink to="current_orders" className={setActive}><ClipBoard />
                                Текущие заказы
                            </NavLink>
                            <span className="cabinet-popUp__separator" />
                            <NavLink to="personal_data" className={setActive}><PersonalData />
                                Личные данные
                            </NavLink>
                            <span className="cabinet-popUp__separator" />
                            <NavLink to="order_history" className={setActive}><History />
                                История заказов
                            </NavLink>
                            <span className="cabinet-popUp__separator" />
                            <NavLink to="change_password" className={setActive}> <Unlock />
                                Изменить пароль
                            </NavLink>
                            <span className="cabinet-popUp__separator" />
                            <p className="cabinet-popUp__link" onClick={handleLogOut}>
                                <img src={exit} alt="Выйти" />
                                Выход
                            </p>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div >
        </>
    )
}