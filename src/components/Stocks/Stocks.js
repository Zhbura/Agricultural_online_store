import './Stocks.scss';
import { Button } from '../Button/Button';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { ProductCard } from '../ProductСard/ProductСard';
import { Arrow, ArrowRight } from '../SVG/Arrow/Arrow';
import { Slider } from '../Slider/Slider';

export const Stocks = () => {
    return (
        <>
            <div className="stocks">
                <div className="page-heading_white">
                    <PageHeadingTwice>Акции</PageHeadingTwice>
                </div>
                <div className="products">
                    <div className="arrow-circle">
                        <Arrow />
                    </div>
                    <div className="products__items">
                        <ProductCard name="Петуния Софистика" alt="Петуния Софистика F1" img={require("../../img/product/petunia/petunia.png")} price="100" to="petunia" />
                        <ProductCard name="Скор" alt="Скор" img={require("../../img/product/skor/skor.png")} price="190" to="skor" />
                        <ProductCard name="Хорус" alt="Хорус" img={require("../../img/product/horys/horys.png")} price="230" to="horys" />
                        <ProductCard name="Агрикола" alt="Агрикола, удобрение для орхидей" img={require("../../img/product/agrikola/agrikola.png")} price="317" to="agrikola" />
                    </div>
                    <div className="arrow-circle">
                        <ArrowRight />
                    </div>
                </div>
                <div className="stocks__slider">
                    <Slider classSmall="slider__notActive slider__notActive_green"
                        classBig="slider__active slider__active_green" />
                </div>
                <div className="stocks__btn">
                    <Button>Смотреть все товары</Button>
                </div>
            </div>
        </>
    )
}