import './Stocks.scss';
import { Button } from '../Button/Button';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { useState } from 'react';
import { Slider } from "../Slider/Slider";
import { ProductItems } from '../ProductСard/ProductItems';
import { products } from '../../productsData';
import { Link } from 'react-router-dom';

export const Stocks = () => {
    const stocks = [
        products.slice(16, 20),
        products.slice(20, 24),
        products.slice(24, 28),
        products.slice(4, 8)
    ];

    const [currentProduct, setCurrentProduct] = useState(0);

    const prev = () => {
        const index = currentProduct > 0 ? currentProduct - 1 : stocks.length - 1;
        setCurrentProduct(index)
    }

    const next = () => {
        const index = currentProduct < stocks.length - 1 ? currentProduct + 1 : 0;
        setCurrentProduct(index)
    }

    const switchIndex = (index) => {
        setCurrentProduct(index);
    }
    return (
        <>
            <div className="stocks">
                <div className="page-heading_white">
                    <PageHeadingTwice>Акции</PageHeadingTwice>
                </div>
                <ProductItems
                    products={stocks}
                    prevEl={prev}
                    nextEl={next}
                    currentIndex={currentProduct}
                />
                <div className="stocks__slider">
                    <Slider
                        classSmall="slider__notActive slider__notActive_green"
                        classBig="slider__active slider__active_green"
                        products={stocks}
                        currentIndex={currentProduct}
                        switchIndex={switchIndex}
                    />
                </div>
                <div className="stocks__btn">
                    <Button> <Link to='/catalog'>Смотреть все товары</Link> </Button>
                </div>
            </div>
        </>
    )
}