import './TopBar.scss';
import logOut from '../../img/logOut.svg';
import menu from '../../img/menu.svg';
import { useState } from 'react';
import { Menu } from '../Menu/Menu';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeMenuShow } from '../../store/menu/actions';

export const TopBar = ({ totalWish }) => {
    const [popUpActive, setPopUpActive] = useState(false);

    const setActive = ({ isActive }) => isActive ? 'top-bar__link top-bar__link_active' : 'top-bar__link';

    const dispatch = useDispatch();

    const showMenu = () => {
        dispatch(changeMenuShow);
    };
    return (
        <>
            <div id="navigation" className="top-bar">
                <div className="container">
                    <nav className="top-bar__navigation top-bar__navigation_hidden">
                        <div className={popUpActive ? 'top-bar__pop-up top-bar__pop-up_active' : 'top-bar__pop-up'} onClick={() => setPopUpActive(!popUpActive)}>
                            <span className="top-bar__link">Про нас</span>
                        </div>
                        <div className={popUpActive ? 'pop-up pop-up_active' : 'pop-up'}>
                            <Link to='/aboutcompany' className="top-bar__link">О компании</Link>
                            <Link to='/teemcompany' className="top-bar__link">Наша команда</Link>
                            <Link to='/agreement' className="top-bar__link">Договор</Link>
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
                    <Menu totalWish={totalWish} />
                </div>
            </div>
        </>)
}