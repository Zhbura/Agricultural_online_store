import './Menu.scss';
import logOut from '../../img/logOut.svg';
import search from '../../img/search.svg';
import closeMenu from '../../img/closeMenu.svg';
import logoWhite from '../../img/logoWhite.svg';
import { Phone } from '../SVG/Icon/Phone';
import { Comparison } from '../SVG/Icon/Comparison';
import { Cart } from '../SVG/Icon/Cart';
import { Heart } from '../SVG/Icon/Heart';
import { Link } from 'react-router-dom';

export const Menu = ({ active, setActive }) => {
    return (
        <>
            <div className={active ? 'menu active' : 'menu'}>
                <div className="top-bar top-bar_menu">
                    <div className="container">
                        <div className="top-bar__line"></div>
                        <div className="top-bar__login">
                            <img src={logOut} alt="Войти" />
                            <span className="top-bar__text">Вход | Регистрация</span>
                        </div>
                        <div className="top-bar__menu" onClick={() => setActive(false)}>
                            <img src={closeMenu} alt="Меню" />
                        </div>
                    </div>
                </div>
                <header className="header menu__header">
                    <div className="container">
                        <div className="menu-wrap">
                            <div className="header__logo menu__logo">
                                <img src={logoWhite} alt="Логотип компании" />
                            </div>
                            <div className="header__toolBar">
                                <div className="icon-quantity">
                                    <div className="circle-icon circle-icon_white"><Comparison /><span>2</span></div>
                                </div>
                                <div className="icon-quantity">
                                    <div className="circle-icon circle-icon_white"><Cart /><span>1</span></div>
                                </div>
                                <p className="header__price header__price_white">0,0 руб</p>
                            </div>
                        </div>
                        <div className="menu-wrap menu-wrap_margin">
                            <div className="circle-icon circle-icon_white"> <Heart /></div>
                            <form className="header__search-form header__search-form_small">
                                <input type="text" placeholder="Поиск..." />
                                <span></span>
                                <img src={search} alt="Поиск" />
                            </form>
                        </div>
                        <div className="contact-details">
                            <div className="circle-icon circle-icon_white"> <Phone /></div>
                            <div className="contact-details__phone-info contact-details__phone-info_white">
                                <div className="contact-details__number">
                                    <p>+7 (900) 800 30 20</p>
                                </div>
                                <p className="contact-details__text">Заказать обратную связь</p>
                            </div>
                        </div>
                    </div>
                </header>
                <nav className="menu__navigation">
                    <Link to='/aboutcompany' className="menu__text">О компании</Link>
                    <Link to='/catalog_plant_protection' className="menu__text"> Каталог продукции</Link>
                    <Link to='/pay' className="menu__text">Оплата | доставка</Link>
                    <Link to='/partners' className="menu__text">Партнеры</Link>
                    <Link to='/contacts' className="menu__text">Контакты</Link>
                </nav>
            </div>
        </>
    )
}