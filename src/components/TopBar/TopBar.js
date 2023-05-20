import './TopBar.scss';
import logOut from '../../img/logOut.svg';
import menu from '../../img/menu.svg';
import { useState } from 'react';
import { Menu } from '../Menu/Menu';

export const TopBar = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [popUpActive, setPopUpActive] = useState(false);

    return (
        <>
            <div className="top-bar">
                <div className="container">
                    <nav className="top-bar__navigation top-bar__navigation_hidden">
                        <div className={popUpActive ? 'top-bar__popUp_active' : 'top-bar__popUp'} onClick={() => setPopUpActive(!popUpActive)}>
                            <span className="top-bar__text">Про нас</span>
                        </div>
                        <div className={popUpActive ? 'popUp active' : 'popUp'}>
                            <p className="top-bar__text">О компании</p>
                            <p className="top-bar__text">Наша команда</p>
                            <p className="top-bar__text">Договор</p>
                        </div>
                        <p className="top-bar__text"> Каталог продукции</p>
                        <p className="top-bar__text">Оплата | доставка</p>
                        <p className="top-bar__text">Партнеры</p>
                        <p className="top-bar__text">Новости</p>
                        <p className="top-bar__text">Контакты</p>
                    </nav>
                    <span className="top-bar__line" />
                    <div className="top-bar__login">
                        <img src={logOut} alt="Войти" />
                        <p className="top-bar__text">Вход | Регистрация</p>
                    </div>
                    <div className="top-bar__menu" onClick={() => setMenuActive(!menuActive)}>
                        <img src={menu} alt="Меню" />
                    </div>
                    <Menu active={menuActive} setActive={setMenuActive} />
                </div>
            </div>
        </>)
}