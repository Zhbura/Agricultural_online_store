import './TopBar.scss';
import logOut from '../../img/logOut.svg';
import menu from '../../img/menu.svg';
import { useState } from 'react';
import { Menu } from '../Menu/Menu';
import { Link } from 'react-router-dom';

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
                            <Link to='/aboutcompany' className="top-bar__text">О компании</Link>
                            <Link to='/teemcompany' className="top-bar__text">Наша команда</Link>
                            <Link to='/agreement' className="top-bar__text">Договор</Link>
                        </div>
                        <Link to='/catalog_plant_protection' className="top-bar__text"> Каталог продукции</Link>
                        <Link to='/pay' className="top-bar__text">Оплата | доставка</Link>
                        <Link to='/partners' className="top-bar__text">Партнеры</Link>
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