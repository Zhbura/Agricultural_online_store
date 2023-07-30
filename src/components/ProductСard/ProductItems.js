import { ProductCard } from "./ProductСard"
import { Arrow, ArrowRight } from "../SVG/Arrow/Arrow"

export const ProductItems = ({ products, prevEl, nextEl, currentIndex }) => {
    return (
        <>
            <div className="products">
                <div className="arrow-circle arrow-circle_left" onClick={prevEl}>
                    <Arrow />
                </div>
                <div className="carousel">
                    <div className="carousel__items carousel__items_big"
                        style={{ transform: `translateX(${-currentIndex * 1100}px)` }}
                    >
                        {products.map((arrayProducts, index) => (
                            arrayProducts.map(product => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))
                        ))}
                    </div>
                    <div className="carousel__items carousel__items_small"
                        style={{ transform: `translateX(${-currentIndex * 275}px)` }}
                    >
                        {products[0].map((product, index) => (
                            <ProductCard
                                key={index}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
                <div className="arrow-circle arrow-circle_right" onClick={nextEl}>
                    <ArrowRight />
                </div>
            </div>
        </>
    )
}