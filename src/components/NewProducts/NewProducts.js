import './NewProducts.scss';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { useState } from 'react';
import { Slider } from "../Slider/Slider";
import { ProductItems } from '../ProductСard/ProductItems';

export const NewProducts = ({ products }) => {
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
            <div className="new-products">
                <PageHeadingTwice>Новинки</PageHeadingTwice>
                <ProductItems
                    products={products}
                    prevEl={prev} nextEl={next}
                    currentIndex={currentProduct}
                />

                <div className="new-products__slider">
                    <Slider
                        classSmall="slider__notActive"
                        classBig="slider__active"
                        products={products}
                        currentIndex={currentProduct}
                        switchIndex={switchIndex}
                    />
                </div>
            </div>
        </>
    )
}