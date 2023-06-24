import './TopBar.scss';
import logOut from '../../img/logOut.svg';
import menu from '../../img/menu.svg';
import { useState } from 'react';
import { Menu } from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeMenuShow } from '../../store/menu/actions';

export const TopBar = () => {
    const [popUpActive, setPopUpActive] = useState(false);

    const setActive = ({ isActive }) => isActive ? 'top-bar__text top-bar__active-link' : 'top-bar__text';

    const dispatch = useDispatch();

    const showMenu = () => {
        dispatch(changeMenuShow);
    };
    return (
        <>
            <div className="top-bar">
                <div className="container">
                    <nav className="top-bar__navigation top-bar__navigation_hidden">
                        <div className={popUpActive ? 'top-bar__popUp_active' : 'top-bar__popUp'} onClick={() => setPopUpActive(!popUpActive)}>
                            <span className="top-bar__text">Про нас</span>
                        </div>
                        <div className={popUpActive ? 'popUp active' : 'popUp'}>
                            <NavLink to='/aboutcompany' className="top-bar__text">О компании</NavLink>
                            <NavLink to='/teemcompany' className="top-bar__text">Наша команда</NavLink>
                            <NavLink to='/agreement' className="top-bar__text">Договор</NavLink>
                        </div>
                        <NavLink to='/catalog' className={setActive}> Каталог продукции</NavLink>
                        <NavLink to='/pay' className={setActive}>Оплата | доставка</NavLink>
                        <NavLink to='/partners' className={setActive}>Партнеры</NavLink>
                        <NavLink to='/news' className={setActive}>Новости</NavLink>
                        <NavLink to='/contacts' className={setActive}>Контакты</NavLink>
                    </nav>
                    <span className="top-bar__line" />
                    <div className="top-bar__login">
                        <img src={logOut} alt="Войти" />
                        <NavLink to='/registration' className={setActive}>Вход | Регистрация</NavLink>
                    </div>
                    <div className="top-bar__menu" onClick={showMenu}>
                        <img src={menu} alt="Меню" />
                    </div>
                    <Menu />
                </div>
            </div>
        </>)
}