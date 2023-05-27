import './Footer.scss';
import { Logo } from '../Logo/Logo';
import { Phone } from '../SVG/Icon/Phone';
import { Mail } from '../SVG/Icon/Mail';
import { useState } from 'react';
import { Arrow } from '../SVG/Arrow/Arrow';
import { Link } from 'react-router-dom';

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
                                <li><Link to='/aboutcompany' className="footer__link">О компании</Link></li>
                                <li><Link to='/pay' className="footer__link">Оплата | доставка</Link></li>
                                <li><Link to='/partners' className="footer__link">Партнеры</Link></li>
                                <li><Link to='/privacypolicy' className="footer__link">Политика конфиденциальности</Link></li>
                                <li><Link to='/refund' className="footer__link">Возврат и обмен товара</Link></li>
                            </ul>
                        </div>
                        <div className="footer__text">
                            <h3 className="footer__heading">Товары</h3>
                            <ul className="footer__list">
                                <li><Link to='/catalog_seeds' className="footer__link">Семена</Link></li>
                                <li><Link to='/catalog_plant_protection' className="footer__link">Средства защиты растений</Link></li>
                                <li><Link to='/catalog_fertilizers' className="footer__link">Удобрения</Link></li>
                                <li><Link to='/catalog_feed_group' className="footer__link">Кормовая группа</Link></li>
                                <li><Link to='/catalog_farmer_help' className="footer__link">Агроному в помощь</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__text">
                        <h3 className="footer__heading">Контакты</h3>
                        <div className="contact-details">
                            <div className="circle-icon"> <Phone /></div>
                            <div className="contact-details__phone-info">
                                <div className="contact-details__number" onClick={() => setPhoneActive(!phoneActive)}>
                                    <p>+7(900)8003020</p>
                                </div>
                                <p className="contact-details__text">Заказать обратную связь</p>
                            </div>
                            <div className={phoneActive ? 'contact-popUp active' : 'contact-popUp'}>
                                <div className="wrap-contact__popUp">
                                    <div className="circle-icon"> <Phone /></div>
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
                            <div className="circle-icon"> <Mail /></div>
                            <div className="contact-details__mail-info">
                                <p>DAT@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="footer__line" />
                <p className="footer__сopyright">&#169; 2022 DAT</p>
                <div className="footer__wrap-popUp">
                    <div className="footer__pop-up arrow_up">
                        <Arrow />
                    </div>
                </div>
            </footer >
        </>
    )
}