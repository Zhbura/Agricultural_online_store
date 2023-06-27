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
                        {products[0].map((product, index) => (
                            <ProductCard key={index} id={product.id} name={product.name} alt={product.alt} img={product.img[0]} price={product.price} to={product.to} />
                        ))}
                        {products[1].map((product, index) => (
                            <ProductCard key={index} id={product.id} name={product.name} alt={product.alt} img={product.img[0]} price={product.price} to={product.to} />
                        ))}
                        {products[2].map((product, index) => (
                            <ProductCard key={index} id={product.id} name={product.name} alt={product.alt} img={product.img[0]} price={product.price} to={product.to} />
                        ))}
                        {products[3].map((product, index) => (
                            <ProductCard key={index} id={product.id} name={product.name} alt={product.alt} img={product.img[0]} price={product.price} to={product.to} />
                        ))}
                    </div>
                    <div className="carousel__items carousel__items_small"
                        style={{ transform: `translateX(${-currentIndex * 275}px)` }}
                    >
                        {products[0].map((product, index) => (
                            <ProductCard key={index} name={product.name} alt={product.alt} img={product.img} price={product.price} to={product.to} />
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