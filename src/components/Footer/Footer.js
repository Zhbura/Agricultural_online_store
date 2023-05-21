import './Footer.scss';
import { Logo } from '../Logo/Logo';
import { Phone } from '../SVG/Icon/Phone';
import { Mail } from '../SVG/Icon/Mail';
import arrowUp from '../../img/arrowUp.svg';
import { useState } from 'react';

export const Footer = () => {
    const [phoneActive, setPhoneActive] = useState(false);

    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer__logo">
                        <Logo />
                        <p className="footer__text-logo">Предлагаем покупателям широкий выбор семян овощей</p>
                    </div>
                    <div className="footer__middle-text">
                        <div className="footer__text">
                            <h3 className="footer__heading">Информация</h3>
                            <ul className="footer__list">
                                <li className="footer__link">О компании</li>
                                <li className="footer__link">Оплата | доставка</li>
                                <li className="footer__link">Партнеры</li>
                                <li className="footer__link">Политика конфиденциальности</li>
                                <li className="footer__link">Возврат и обмен товара</li>
                            </ul>
                        </div>
                        <div className="footer__text">
                            <h3 className="footer__heading">Товары</h3>
                            <ul className="footer__list">
                                <li className="footer__link"> Каталог продукции</li>
                                <li className="footer__link"> Средства защиты растений </li>
                                <li>Семена</li>
                                <li>Удобрения</li>
                                <li>Агроному в помощь</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__text">
                        <h3 className="footer__heading">Контакты</h3>
                        <div className="contact-details">
                            <a href="#"><div className="circle-icon"> <Phone /></div></a>
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

                        <div className="contact-details">
                            <a href="#"> <div className="circle-icon"> <Mail /></div></a>
                            <div className="contact-details__mail-info">
                                <p>DAT@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="footer__line" />
                <p className="footer__сopyright">© 2022 DAT</p>
                <div className="footer__wrap-popUp">
                    <div className="footer__pop-up">
                        <img src={arrowUp} alt="Вверх" />
                    </div>
                </div>
            </footer >
        </>
    )
}