import './Partners.scss';
import { ArrowLeft } from '../SVG/ArrowFlip/ArrowLeft';
import { ArrowRight } from '../SVG/ArrowFlip/ArrowRight';
import partnerLogo1 from '../../img/partnerLogo1.svg';
import partnerLogo2 from '../../img/partnerLogo2.svg';
import partnerLogo3 from '../../img/partnerLogo3.svg';
import partnerLogo5 from '../../img/partnerLogo5.svg';
import { PageHeadingTwice } from '../PageHeading/PageHeading';

export const Partners = () => {
    return (
        <>
            <div className="partners">
                <PageHeadingTwice> Партнеры</PageHeadingTwice>
                <div className="partners__items">
                    <ArrowLeft />
                    <div className="partners__logo">
                        <img src={partnerLogo1} alt="partnerLogo1" />
                    </div>
                    <div className="partners__logo">
                        <img src={partnerLogo2} alt="partnerLogo2" />
                    </div>
                    <div className="partners__logo">
                        <img src={partnerLogo3} alt="partnerLogo3" />
                    </div>
                    <div className="partners__logo">
                        <img src={partnerLogo5} alt="partnerLogo5" />
                    </div>
                    <ArrowRight />
                </div>
                <div className="partners__slider">
                    <div className="slider">
                        <span className="slider__notActive"></span>
                        <span className="slider__notActive"></span>
                        <span className="slider__active"></span>
                        <span className="slider__notActive"></span>
                        <span className="slider__notActive"></span>
                    </div>
                </div>

            </div>
        </>
    )
}