import './Header.scss';
import { Logo } from '../Logo/Logo';
import search from '../../img/search.svg';
import { Phone } from '../SVG/Icon/Phone';
import { Comparison } from '../SVG/Icon/Comparison';
import { Cart } from '../SVG/Icon/Cart';
import { Heart } from '../SVG/Icon/Heart';

export const Header = () => {
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
                                    <div className="contact-details__number">
                                        <p>+7(900)8003020</p>
                                    </div>
                                    <p className="contact-details__text">Заказать обратную связь</p>
                                </div>
                            </div>
                            <div className="header__toolBar">
                                <div className="icon-quantity">
                                    <a><div className="circle-icon circle-icon_hover circle-icon_hidden"> <Heart /></div></a>
                                </div>
                                <div className="icon-quantity">
                                    <a><div className="circle-icon circle-icon_hover"><Comparison /><span>2</span></div></a>
                                </div>
                                <div className="icon-quantity">
                                    <a> <div className="circle-icon circle-icon_hover"><Cart /><span>1</span></div> </a>
                                </div>
                                <p className="header__price">0,0 руб</p>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        </>
    )
}