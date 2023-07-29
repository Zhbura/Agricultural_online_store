import './Partners.scss';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { Arrow, ArrowRight } from '../SVG/Arrow/Arrow';
import Carousel from 'react-multi-carousel';
import { partners, responsive } from '../../partnersData';
import 'react-multi-carousel/lib/styles.css';

export const Partners = () => {

    return (
        <>
            <div className="partners">
                <PageHeadingTwice> Партнеры</PageHeadingTwice>
                <div className="partners__items">
                    <Carousel
                        responsive={responsive}
                        showDots={true}
                        customRightArrow={<CustomRightArrow />}
                        customLeftArrow={<CustomLeftArrow />}
                        customDot={<CustomDot />}
                    >
                        {partners.map(logo => (
                            <div className="partner-logo" key={logo.id}>
                                <img src={logo.img} alt={logo.alt} />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    )
}

const CustomRightArrow = ({ onClick }) => {
    return <div className="partners__arrow-circle partners__arrow-circle_right" onClick={() => onClick()}><ArrowRight /> </div>;
};

const CustomLeftArrow = ({ onClick }) => {
    return <div className="partners__arrow-circle partners__arrow-circle_left" onClick={() => onClick()}><Arrow /> </div>;
};

const CustomDot = ({ onClick, ...rest }) => {
    const { active } = rest;

    return (
        <span
            className={active ? "partners__slider partners__slider_active" :
                "partners__slider partners__slider_notActive"}
            onClick={() => onClick()} />
    );
};