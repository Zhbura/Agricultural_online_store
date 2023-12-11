import './NewProducts.scss';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { useState } from 'react';
import { Slider } from "../Slider/Slider";
import { ProductItems } from '../ProductСard/ProductItems';
import { products } from '../../productsData';

export const NewProducts = () => {
    const newProducts = [
        products.slice(0, 4),
        products.slice(4, 8),
        products.slice(8, 12),
        products.slice(12, 16)
    ];

    const [currentProduct, setCurrentProduct] = useState(0);

    const prev = () => {
        const index = currentProduct > 0 ? currentProduct - 1 : newProducts.length - 1;
        setCurrentProduct(index)
    }

    const next = () => {
        const index = currentProduct < newProducts.length - 1 ? currentProduct + 1 : 0;
        setCurrentProduct(index)
    }

    const switchIndex = (index) => {
        setCurrentProduct(index);
    }
    return (
        <>
            <div className="new-products">
                <PageHeadingTwice>Новинки</PageHeadingTwice>
                <ProductItems
                    products={newProducts}
                    prevEl={prev} nextEl={next}
                    currentIndex={currentProduct}
                />

                <div className="new-products__slider">
                    <Slider
                        classSmall="slider__notActive"
                        classBig="slider__active"
                        products={newProducts}
                        currentIndex={currentProduct}
                        switchIndex={switchIndex}
                    />
                </div>
            </div>
        </>
    )
}