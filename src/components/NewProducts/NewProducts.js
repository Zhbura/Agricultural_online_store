import './NewProducts.scss';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { ProductCard } from '../ProductСard/ProductСard';
import { Arrow, ArrowRight } from '../SVG/Arrow/Arrow';
import { Slider } from '../Slider/Slider';
import { useState } from 'react';

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
                <div className="products">
                    <div className="arrow-circle arrow-circle_left" onClick={prev}>
                        <Arrow />
                    </div>
                    <div className="carousel">
                        <div className="carousel__items carousel__items_big"
                            style={{ transform: `translateX(${-currentProduct * 1100}px)` }}
                        >
                            {products[0].map((product, index) => (
                                <ProductCard key={index} id={product.id} name={product.name} alt={product.alt} img={product.img} price={product.price} to={product.to} />
                            ))}
                            {products[1].map((product, index) => (
                                <ProductCard key={index} id={product.id} name={product.name} alt={product.alt} img={product.img} price={product.price} to={product.to} />
                            ))}
                            {products[2].map((product, index) => (
                                <ProductCard key={index} id={product.id} name={product.name} alt={product.alt} img={product.img} price={product.price} to={product.to} />
                            ))}
                            {products[3].map((product, index) => (
                                <ProductCard key={index} id={product.id} name={product.name} alt={product.alt} img={product.img} price={product.price} to={product.to} />
                            ))}
                        </div>
                        <div className="carousel__items carousel__items_small"
                            style={{ transform: `translateX(${-currentProduct * 275}px)` }}
                        >
                            {products[0].map((product, index) => (
                                <ProductCard key={index} name={product.name} alt={product.alt} img={product.img} price={product.price} to={product.to} />
                            ))}
                        </div>
                    </div>
                    <div className="arrow-circle arrow-circle_right" onClick={next}>
                        <ArrowRight />
                    </div>
                </div>
                <div className="new-products__slider">
                    <div className="carousel__indicators">
                        {products.map((slide, index) => (
                            <div
                                className={`carousel__indicator${currentProduct === index ? ' carousel__indicator_active' : ''}`} onClick={() => switchIndex(index)} key={index}>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}