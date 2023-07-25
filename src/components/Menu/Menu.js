import './Menu.scss';
import logOut from '../../img/logOut.svg';
import search from '../../img/search.svg';
import closeMenu from '../../img/closeMenu.svg';
import logoWhite from '../../img/logoWhite.svg';
import { Comparison } from '../SVG/Icon/Comparison';
import { Cart } from '../SVG/Icon/Cart';
import { Heart } from '../SVG/Icon/Heart';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectShowMenu } from '../../store/menu/selectors';
import { changeMenuShow } from '../../store/menu/actions';
import { ContactDetails } from '../ContactDetails/ContactDetails';

export const Menu = ({ total, totalWish }) => {

    const showMenu = useSelector(selectShowMenu);

    const dispatch = useDispatch();

    const hideMenu = () => {
        dispatch(changeMenuShow);
    };
    return (
        <>
            <div className={showMenu ? 'menu menu_active' : 'menu'}>
                <div className="menu__top-bar">
                    <div className="container">
                        <div className="top-bar__login menu__login">
                            <img src={logOut} alt="Войти" />
                            <Link to='/registration' className="top-bar__text">Вход | Регистрация</Link>
                        </div>
                        <div className="menu__close" onClick={hideMenu}>
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
                                    <div className="circle-icon circle-icon_white">
                                        <Link to='/wish_list'><Heart /><span>{totalWish}</span></Link>
                                    </div>
                                </div>
                                <div className="icon-quantity">
                                    <div className="circle-icon circle-icon_white">
                                        <Link to='/cart'><Cart /><span>{total.count}</span></Link>
                                    </div>
                                </div>
                                <p className="header__price header__price_white">{total.cost} руб</p>
                            </div>
                        </div>
                        <div className="menu-wrap menu-wrap_margin">
                            <div className="circle-icon circle-icon_white"><Comparison /></div>
                            <form className="header__search-form header__search-form_small">
                                <input type="text" placeholder="Поиск..." />
                                <span />
                                <img src={search} alt="Поиск" />
                            </form>
                        </div>
                        <ContactDetails
                            classContactDetails="contact-details"
                            icon="circle-icon circle-icon_white"
                            phoneInfo="contact-details__phone-info contact-details__phone-info_white"
                        />
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