import { Link } from 'react-router-dom';
import { Cart } from '../SVG/Icon/Cart';
import './ProductСard.scss';
import { Heart } from '../SVG/Icon/Heart';

export const ProductCard = ({ product, addToCart, addToWishList }) => {
    const { id, name, alt, img, price, to } = product;

    return (
        <>
            <div className="product-card" key={id}>
                <img className="product-card__main-img" src={img[0]} alt={alt} />
                <div className="product-card__heart" onClick={() => addToWishList(id, product)}>
                    <div className="circle-icon circle-icon_hover"><Heart /></div>
                </div>
                <div className="product-card__info-product">
                    <div className="product-card__text">
                        <p className="product-card__name">
                            <Link to={`/product/${to}`} className="product-card__link">{name}</Link>
                        </p>
                        <p className="product-card__price">{price} руб.</p>
                        <p className="product-card__quantity">1 шт</p>
                    </div>
                    <div className="product-card__cart" onClick={() => addToCart(id, product)}>
                        <div className="circle-icon circle-icon_hover"><Cart /></div>
                    </div>
                </div>
            </div>
        </>
    )
}