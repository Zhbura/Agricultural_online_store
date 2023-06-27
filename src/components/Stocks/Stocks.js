import './Stocks.scss';
import { Button } from '../Button/Button';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { ProductCard } from '../ProductСard/ProductСard';
import { Arrow, ArrowRight } from '../SVG/Arrow/Arrow';
import { Slider } from '../Slider/Slider';
import { useState } from 'react';

export const Stocks = ({ products }) => {
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
                <div className="products">
                    <div className="arrow-circle arrow-circle_left" onClick={prev}>
                        <Arrow />
                    </div>
                    <div className="carousel">
                        <div className="carousel__items carousel__items_big"
                            style={{ transform: `translateX(${-currentProduct * 1100}px)` }}
                        >
                            {products[2].map((product, index) => (
                                <ProductCard key={index} id={product.id} name={product.name} alt={product.alt} img={product.img[0]} price={product.price} to={product.to} />
                            ))}
                            {products[3].map((product, index) => (
                                <ProductCard key={index} id={product.id} name={product.name} alt={product.alt} img={product.img[0]} price={product.price} to={product.to} />
                            ))}
                            {products[1].map((product, index) => (
                                <ProductCard key={index} id={product.id} name={product.name} alt={product.alt} img={product.img[0]} price={product.price} to={product.to} />
                            ))}
                            {products[0].map((product, index) => (
                                <ProductCard key={index} id={product.id} name={product.name} alt={product.alt} img={product.img[0]} price={product.price} to={product.to} />
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
                <div className="stocks__slider">
                    <div className="slider">
                        {products.map((slide, index) => (
                            <div
                                className={`slider__notActive slider__notActive_green${currentProduct === index ? ' slider__active slider__active_green' : ''}`} onClick={() => switchIndex(index)} key={index}>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="stocks__btn">
                    <Button>Смотреть все товары</Button>
                </div>
            </div>
        </>
    )
}