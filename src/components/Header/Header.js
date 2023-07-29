import './Header.scss';
import { Logo } from '../Logo/Logo';
import search from '../../img/search.svg';
import { Comparison } from '../SVG/Icon/Comparison';
import { Cart } from '../SVG/Icon/Cart';
import { Heart } from '../SVG/Icon/Heart';
import { Link } from 'react-router-dom';
import { ContactDetails } from '../ContactDetails/ContactDetails';

export const Header = ({ total, totalWish }) => {

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__logo">
                        <Logo />
                    </div>
                    <form className="header__search-form header__search-form_hidden">
                        <input type="text" placeholder="Поиск..." />
                        <span />
                        <img src={search} alt="Поиск" />
                    </form>
                    <ContactDetails
                        classContactDetails="contact-details contact-details_hidden"
                        icon="circle-icon"
                        phoneInfo="contact-details__phone-info"
                    />
                    <div className="header__toolBar">
                        <div className="icon-quantity">
                            <div className="circle-icon circle-icon_hover">
                                <Link to='/wish_list' className="header__link">
                                    <Heart /><span>{totalWish}</span></Link>
                            </div>
                        </div>
                        <div className="icon-quantity">
                            <div className="circle-icon circle-icon_hover circle-icon_hidden">
                                <Comparison />
                            </div>
                        </div>
                        <div className="icon-quantity">
                            <div className="circle-icon circle-icon_hover">
                                <Link to='/cart' className="header__link">
                                    <Cart /><span>{total.count}</span></Link>
                            </div>
                        </div>
                        <p className="header__price">{total.cost} руб</p>
                    </div>
                </div>
            </header>
        </>
    )
}