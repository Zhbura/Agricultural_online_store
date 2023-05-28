import './Partners.scss';
import partnerLogo1 from '../../img/partnerLogo1.svg';
import partnerLogo2 from '../../img/partnerLogo2.svg';
import partnerLogo3 from '../../img/partnerLogo3.svg';
import partnerLogo5 from '../../img/partnerLogo5.svg';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { Arrow, ArrowRight } from '../SVG/Arrow/Arrow';
import { Slider } from '../Slider/Slider';

export const Partners = () => {
    return (
        <>
            <div className="partners">
                <PageHeadingTwice> Партнеры</PageHeadingTwice>
                <div className="partners__items">
                    <div className="arrow-circle">
                        <Arrow />
                    </div>
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
                    <div className="arrow-circle">
                        <ArrowRight />
                    </div>
                </div>
                <div className="partners__slider">
                    <Slider classSmall="slider__notActive"
                        classBig="slider__active" />
                </div>

            </div>
        </>
    )
}