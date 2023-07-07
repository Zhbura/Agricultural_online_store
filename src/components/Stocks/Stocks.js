import './Stocks.scss';
import { Button } from '../Button/Button';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { useState } from 'react';
import { Slider } from "../Slider/Slider";
import { ProductItems } from '../ProductСard/ProductItems';

export const Stocks = ({ products, addToCart }) => {
    const [currentProduct, setCurrentProduct] = useState(0);

    const prev = () => {
        const index = currentProduct > 0 ? currentProduct - 1 : products.length - 1;
        setCurrentProduct(index)
    }

    const next = () => {
        const index = currentProduct < products.length - 1 ? currentProduct + 1 : 0;
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
                <ProductItems products={products} prevEl={prev} nextEl={next} currentIndex={currentProduct} addToCart={addToCart} />
                <div className="stocks__slider">
                    <Slider
                        classSmall="slider__notActive slider__notActive_green"
                        classBig="slider__active slider__active_green"
                        products={products} currentIndex={currentProduct} switchIndex={switchIndex}
                    />
                </div>
                <div className="stocks__btn">
                    <Button>Смотреть все товары</Button>
                </div>
            </div>
        </>
    )
}