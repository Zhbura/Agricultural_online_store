import './Header.scss';
import { Logo } from '../Logo/Logo';
import search from '../../img/search.svg';
import { Comparison } from '../SVG/Icon/Comparison';
import { Cart } from '../SVG/Icon/Cart';
import { Heart } from '../SVG/Icon/Heart';
import { Link } from 'react-router-dom';
import { ContactDetails } from '../ContactDetails/ContactDetails';
import { useDispatch, useSelector } from 'react-redux';
import { costCart, countCart } from '../../store/cart/selectors';
import { countWishList } from '../../store/wishList/selectors';
import { useState } from 'react';
import { searchProducts } from '../../store/search/action';
import { products } from '../../productsData';

export const Header = () => {
    const totalCount = useSelector(countCart);
    const costTotal = useSelector(costCart);

    const totalWish = useSelector(countWishList);

    const [searchValue, setSearchValue] = useState('');
    const [isOpen, setIsOpen] = useState(true);
    const dispatch = useDispatch();

    const sendValueSearch = () => {
        dispatch(searchProducts(searchValue));
    }

    const newProducts = [...products[0].slice(0, 4), ...products[1].slice(0, 4), ...products[2].slice(0, 4), ...products[3].slice(0, 4)];

    let filterProducts = newProducts.filter((product) => {
        return product.name.toLowerCase().includes(searchValue.toLowerCase())
    })

    const itemClickHandler = (e) => {
        setSearchValue(e.target.textContent)
        setIsOpen(!isOpen)
    }

    const inputClickHandler = () => {
        setIsOpen(true)
    }
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__logo">
                        <Logo />
                    </div>
                    <form className="header__search-form header__search-form_hidden">
                        <input type="text" placeholder="Поиск..."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onClick={inputClickHandler}
                        />
                        <ul className="header__autocomplete">
                            {
                                searchValue && isOpen ?
                                    filterProducts.map((product) => (
                                        <li
                                            className="header__autocomplete-item"
                                            key={product.id}
                                            onClick={itemClickHandler} >
                                            {product.name}
                                        </li>
                                    )) : null}
                        </ul>
                        <span />
                        <div onClick={() => { sendValueSearch() }}>
                            <Link to='/catalog_product_filter'>
                                <img src={search} alt="Поиск" />
                            </Link>
                        </div>
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