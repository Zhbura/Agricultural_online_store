import './Commodity.scss';
import { Button } from '../Button/Button';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Slider } from '../Slider/Slider';
import { ProductItems } from '../ProductСard/ProductItems';
import { products } from '../../productsData';

export const Commodity = () => {
    const advice = [
        products.slice(24, 28),
        products.slice(20, 24),
        products.slice(0, 4),
        products.slice(4, 8)
    ];

    const [currentProduct, setCurrentProduct] = useState(0);

    const prev = () => {
        const index = currentProduct > 0 ? currentProduct - 1 : advice.length - 1;
        setCurrentProduct(index)
    }

    const next = () => {
        const index = currentProduct < advice.length - 1 ? currentProduct + 1 : 0;
        setCurrentProduct(index)
    }

    const switchIndex = (index) => {
        setCurrentProduct(index);
    }
    return (
        <>
            <div className="commodity">
                <div className="container">
                    <Outlet />
                </div>
                <div className="stocks">
                    <div className="page-heading_white">
                        <PageHeadingTwice>Вам также понравится</PageHeadingTwice>
                    </div>
                    <ProductItems
                        products={advice}
                        prevEl={prev}
                        nextEl={next}
                        currentIndex={currentProduct}
                    />
                    <div className="stocks__slider">
                        <Slider classSmall="slider__notActive slider__notActive_green"
                            classBig="slider__active slider__active_green"
                            products={advice}
                            currentIndex={currentProduct}
                            switchIndex={switchIndex}
                        />
                    </div>
                    <div className="stocks__btn">
                        <Button>Смотреть все товары</Button>
                    </div>
                </div>
            </div>
        </>
    )
}