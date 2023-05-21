import { Cart } from '../SVG/Icon/Cart';
import { Comparison } from '../SVG/Icon/Comparison';
import './ProductCard.scss';

export const ProductCard = (props) => {
    return (
        <>
            <div className="product-card">
                <img className="product__main-img" src={props.img} alt={props.alt} />
                <div className="product__comparison"><Comparison /></div>
                <div className="product__info-product">
                    <div className="product__text">
                        <p className="product__name">
                            <p className="product__link">{props.name}</p>
                        </p>
                        <p className="product__price">{props.price}</p>
                        <p className="product__quantity">1 шт</p>
                    </div>
                    <div className="product__cart">
                        <a href="#"><div className="circle-icon circle-icon_hover"><Cart /></div></a>
                    </div>
                </div>
            </div>
        </>
    )
}