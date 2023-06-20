import './NewProducts.scss';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { ProductCard } from '../ProductСard/ProductСard';
import { Arrow, ArrowRight } from '../SVG/Arrow/Arrow';
import { Slider } from '../Slider/Slider';

export const NewProducts = () => {
    return (
        <>
            <div className="new-products">
                <PageHeadingTwice>Новинки</PageHeadingTwice>
                <div className="products">
                    <div className="arrow-circle">
                        <Arrow />
                    </div>
                    <div className="products__items">
                        <ProductCard name="Петуния Софистика F1" alt="Петуния Софистика F1" img={require("../../img/newProducts1.png")} price="20" />
                        <ProductCard name="Скор 250 ЕС К. Э." alt="Скор 250 ЕС К. Э." img={require("../../img/newProducts3.png")} price="200" />
                        <ProductCard name="Хорус" alt="Хорус" img={require("../../img/newProducts4.png")} price="320" />
                        <ProductCard name="Агрикола" alt="Агрикола, удобрение для орхидей" img={require("../../img/newProducts2.png")} price="170" />
                    </div>
                    <div className="arrow-circle">
                        <ArrowRight />
                    </div>
                </div>
                <div className="new-products__slider">
                    <Slider classSmall="slider__notActive"
                        classBig="slider__active" />
                </div>
            </div>
        </>
    )
}