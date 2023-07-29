import { Link } from 'react-router-dom';
import { Cart } from '../SVG/Icon/Cart';
import './ProductСard.scss';
import { Heart } from '../SVG/Icon/Heart';
import cancel from '../../img/cancelGrey.svg';
import { useDispatch } from 'react-redux';
import { addProductCart } from '../../store/cart/action';

export const ProductCard = ({ product, addToWishList, deleteProductWishList }) => {
    const { id, name, alt, img, price, to } = product;
    const dispatch = useDispatch();

    return (
        <>
            <div className="product-card" key={id}>
                <img className="product-card__main-img" src={img[0]} alt={alt} />
                <div className="product-card__heart" onClick={() => addToWishList(id, product)}>
                    <div className="circle-icon circle-icon_hover"><Heart /></div>
                </div>
                <img className="product-card__cancel" src={cancel} alt="Удалить выбранный товар"
                    onClick={() => deleteProductWishList(id)}
                />
                <div className="product-card__info-product">
                    <div className="product-card__text">
                        <p className="product-card__name">
                            <Link to={`/product/${to}`} className="product-card__link">{name}</Link>
                        </p>
                        <p className="product-card__price">{price} руб.</p>
                        <p className="product-card__quantity">1 шт</p>
                    </div>
                    <div className="product-card__cart"
                        onClick={() => dispatch(addProductCart(product, id))}>
                        <div className="circle-icon circle-icon_hover"><Cart /></div>
                    </div>
                </div>
            </div >
        </>
    )
}