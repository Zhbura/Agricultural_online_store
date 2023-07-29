import { useState } from 'react';
import { Phone } from '../SVG/Icon/Phone';
import phone from '../../img/icon/phone.svg';
import './ContactDetails.scss';

export const ContactDetails = ({ classContactDetails, icon, phoneInfo }) => {
    const [phoneActive, setPhoneActive] = useState(false);

    return (
        <>
            <div className={`${classContactDetails}`} onClick={() => setPhoneActive(!phoneActive)}>
                <div className={`${icon}`}> <Phone /></div>
                <div className={`${phoneInfo}`}>
                    <div className="contact-details__number">
                        <p>+7 (900) 800 30 20</p>
                    </div>
                    <p className="contact-details__text">Заказать обратную связь</p>
                </div>
                {phoneActive && <div className='contact-details__pop-up'>
                    <div className="wrap-contact">
                        <div className="circle-icon">
                            <img src={phone} alt="phone" />
                        </div>
                        <div>
                            <div className="contact-details">
                                <div className="contact-details__phone-info">
                                    <div className="contact-details__number">
                                        <p>+7 (900) 800 30 20</p>
                                    </div>
                                    <p className="contact-details__text">Заказать обратную связь</p>
                                </div>
                            </div>
                            <p className="contact-details__number-text">+7 (900) 800 30 30</p>
                            <p className="contact-details__number-text">+7 (900) 800 30 40</p>
                        </div>
                    </div>
                </div>}
            </div>
        </>
    )
}