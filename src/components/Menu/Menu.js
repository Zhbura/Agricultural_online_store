import './Menu.scss';
import login from '../../img/login.svg';
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
import { costCart, countCart } from '../../store/cart/selectors';
import { countWishList } from '../../store/wishList/selectors';
import { SearchForm } from '../Header/SearchForm';
import { useEffect, useRef } from 'react';

export const Menu = () => {

    const showMenu = useSelector(selectShowMenu);

    const dispatch = useDispatch();

    const hideMenu = () => {
        dispatch(changeMenuShow(false));
    };

    const totalCount = useSelector(countCart);
    const costTotal = useSelector(costCart);

    const totalWish = useSelector(countWishList);

    //Создание рефа на компонент меню для закрытия его при клике вне данного компонента
    const menuRef = useRef(null);

    const handleClick = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            dispatch(changeMenuShow(false))
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClick)
        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [])
    return (
        <>
            <div className={showMenu ? 'menu menu_active' : 'menu'} ref={menuRef}>
                <div className="menu__top-bar">
                    <div className="container">
                        <div className="top-bar__login menu__login">
                            <img src={login} alt="Войти" />
                            <Link to='registration' className="top-bar__link">Вход | Регистрация</Link>
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
                                <Link to='/Agricultural_online_store'><img src={logoWhite} alt="Логотип компании" /></Link>
                            </div>
                            <div className="header__toolBar">
                                <div className="icon-quantity">
                                    <div className="circle-icon circle-icon_white">
                                        <Link to='wish_list'><Heart /><span>{totalWish}</span></Link>
                                    </div>
                                </div>
                                <div className="icon-quantity">
                                    <div className="circle-icon circle-icon_white">
                                        <Link to='cart'><Cart /><span>{totalCount}</span></Link>
                                    </div>
                                </div>
                                <p className="header__price header__price_white">{costTotal} руб</p>
                            </div>
                        </div>
                        <div className="menu-wrap menu-wrap_margin">
                            <div className="circle-icon circle-icon_white"><Comparison /></div>
                            <SearchForm />
                        </div>
                        <ContactDetails
                            classContactDetails="contact-details"
                            icon="circle-icon circle-icon_white"
                            phoneInfo="contact-details__phone-info contact-details__phone-info_white"
                        />
                    </div>
                </header>
                <nav className="menu__navigation">
                    <Link to='aboutcompany' className="menu__text">О компании</Link>
                    <Link to='catalog' className="menu__text"> Каталог продукции</Link>
                    <Link to='pay' className="menu__text">Оплата | доставка</Link>
                    <Link to='partners' className="menu__text">Партнеры</Link>
                    <Link to='contacts' className="menu__text">Контакты</Link>
                </nav>
            </div>
        </>
    )
}