import { Link } from 'react-router-dom';
import { Cart } from '../SVG/Icon/Cart';
import { Comparison } from '../SVG/Icon/Comparison';
import './ProductСard.scss';

export const ProductCard = ({ product }) => {
    const { id, name, alt, img, price, to } = product;

    return (
        <>
            <div className="product-card" key={id}>
                <img className="product-card__main-img" src={img[0]} alt={alt} />
                <div className="product-card__comparison"><Comparison /></div>
                <div className="product-card__info-product">
                    <div className="product-card__text">
                        <p className="product-card__name">
                            <Link to={`/product/${to}`} className="product-card__link">{name}</Link>
                        </p>
                        <p className="product-card__price">{price}</p>
                        <p className="product-card__quantity">1 шт</p>
                    </div>
                    <div className="product-card__cart">
                        <div className="circle-icon circle-icon_hover"><Cart /></div>
                    </div>
                </div>
            </div>
        </>
    )
}