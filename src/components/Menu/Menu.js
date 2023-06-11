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
import { CartComp } from '../Cart/Cart';
import { useState } from 'react';

export const Menu = ({ active, setActive }) => {
    const [cartActive, setCartActive] = useState(false);
    const [phoneActive, setPhoneActive] = useState(false);

    return (
        <>
            <div className={active ? 'menu menu_active' : 'menu'}>
                <div className="menu__top-bar">
                    <div className="container">
                        <div className="top-bar__login menu__login">
                            <img src={logOut} alt="Войти" />
                            <Link to='/registration' className="top-bar__text">Вход | Регистрация</Link>
                        </div>
                        <div className="menu__close" onClick={() => setActive(false)}>
                            <img src={closeMenu} alt="Меню" />
                        </div>
                    </div>
                </div>
                <header className="header menu__header">
                    <div className="container">
                        <div className="menu-wrap">
                            <div className="header__logo menu__logo">
                                <Link to='/'><img src={logoWhite} alt="Логотип компании" /></Link>
                            </div>
                            <div className="header__toolBar">
                                <div className="icon-quantity">
                                    <div className="circle-icon circle-icon_white"><Comparison /><span>2</span></div>
                                </div>
                                <div className="icon-quantity" onClick={() => setCartActive(!cartActive)}>
                                    <div className="circle-icon circle-icon_white"><Cart /><span>1</span></div>
                                </div>
                                <CartComp active={cartActive} setActive={setCartActive} />
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
                                <div className="contact-details__number" onClick={() => setPhoneActive(!phoneActive)}>
                                    <p>+7 (900) 800 30 20</p>
                                </div>
                                <p className="contact-details__text">Заказать обратную связь</p>
                            </div>
                            <div className={phoneActive ? 'contact-popUp active' : 'contact-popUp'}>
                                <div className="wrap-contact__popUp">
                                    <div className="circle-icon"> <Phone /></div>
                                    <div>
                                        <div className="contact-details">
                                            <div className="contact-details__phone-info">
                                                <div className="contact-details__number" onClick={() => setPhoneActive(false)}>
                                                    <p>+7(900)8003020</p>
                                                </div>
                                                <p className="contact-details__text">Заказать обратную связь</p>
                                            </div>
                                        </div>
                                        <p className="contact-details__number-text">+7(900)8003030</p>
                                        <p className="contact-details__number-text">+7(900)8003040</p>
                                    </div>
                                </div>
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