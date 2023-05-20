import './Header.scss';
import { Logo } from '../Logo/Logo';
import search from '../../img/search.svg';
import { Phone } from '../SVG/Icon/Phone';
import { Comparison } from '../SVG/Icon/Comparison';
import { Cart } from '../SVG/Icon/Cart';
import { Heart } from '../SVG/Icon/Heart';
import { useState } from 'react';
import { CartComp } from '../Cart/Cart';

export const Header = () => {
    const [cartActive, setCartActive] = useState(false);
    const [phoneActive, setPhoneActive] = useState(false);

    return (
        <>
            <div className="wrapper">
                <div className="top">
                    <header className="header">
                        <div className="container">
                            <div className="header__logo">
                                <Logo />
                            </div>
                            <form className="header__search-form header__search-form_hidden">
                                <input type="text" placeholder="Поиск..." />
                                <span></span>
                                <img src={search} alt="Поиск" />
                            </form>
                            <div className="contact-details contact-details_hidden">
                                <a><div className="circle-icon"> <Phone /></div></a>
                                <div className="contact-details__phone-info">
                                    <div className="contact-details__number" onClick={() => setPhoneActive(!phoneActive)}>
                                        <p>+7(900)8003020</p>
                                    </div>
                                    <p className="contact-details__text">Заказать обратную связь</p>
                                </div>
                                <div className={phoneActive ? 'contact-popUp active' : 'contact-popUp'}>
                                    <div className="wrap-contact__popUp">
                                        <a href="#"> <div className="circle-icon"> <Phone /></div></a>
                                        <div>
                                            <div className="contact-details contact-details_hidden">
                                                <div className="contact-details__phone-info">
                                                    <div className="contact-details__number" onClick={() => setPhoneActive(!phoneActive)}>
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
                            <div className="header__toolBar">
                                <div className="icon-quantity">
                                    <a><div className="circle-icon circle-icon_hover circle-icon_hidden"> <Heart /></div></a>
                                </div>
                                <div className="icon-quantity">
                                    <a><div className="circle-icon circle-icon_hover"><Comparison /><span>2</span></div></a>
                                </div>
                                <div className="icon-quantity" onClick={() => setCartActive(!cartActive)}>
                                    <a> <div className="circle-icon circle-icon_hover"><Cart /><span>1</span></div> </a>
                                </div>
                                <CartComp active={cartActive} setActive={setCartActive} />
                                <p className="header__price">0,0 руб</p>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        </>
    )
}