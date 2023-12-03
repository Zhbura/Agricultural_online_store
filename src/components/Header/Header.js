import './Header.scss';
import { Logo } from '../Logo/Logo';
import { Comparison } from '../SVG/Icon/Comparison';
import { Cart } from '../SVG/Icon/Cart';
import { Heart } from '../SVG/Icon/Heart';
import { Link } from 'react-router-dom';
import { ContactDetails } from '../ContactDetails/ContactDetails';
import { useSelector } from 'react-redux';
import { costCart, countCart } from '../../store/cart/selectors';
import { countWishList } from '../../store/wishList/selectors';
import { SearchForm } from './SearchForm';

export const Header = () => {
    const totalCount = useSelector(countCart);
    const costTotal = useSelector(costCart);

    const totalWish = useSelector(countWishList);

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__logo">
                        <Logo />
                    </div>
                    <SearchForm />
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
                            <button className="circle-icon circle-icon_hover circle-icon_hidden">
                                <Comparison />
                            </button>
                        </div>
                        <div className="icon-quantity">
                            <div className="circle-icon circle-icon_hover">
                                <Link to='/cart' className="header__link">
                                    <Cart /><span>{totalCount}</span></Link>
                            </div>
                        </div>
                        <p className="header__price">{costTotal} руб</p>
                    </div>
                </div>
            </header>
        </>
    )
}