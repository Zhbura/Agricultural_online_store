import { Link } from 'react-router-dom';
import { Cart } from '../SVG/Icon/Cart';
import './ProductСard.scss';
import { Heart } from '../SVG/Icon/Heart';
import cancel from '../../img/cancelGrey.svg';
import { useDispatch } from 'react-redux';
import { addProductCart } from '../../store/cart/action';
import { addToWishList, deleteProductWishList } from '../../store/wishList/action';
import { useState } from 'react';

export const ProductCard = ({ product }) => {
    const { id, name, alt, img, price, to } = product;

    const dispatch = useDispatch();

    const [click, setClick] = useState(true);

    const addProductWishList = (id, product) => {
        dispatch(addToWishList(id, product))
        setClick(false)
    }
    return (
        <>
            <div className="product-card" key={id}>
                <div className="product-card__main-img">
                    <Link to={`/product/${to}`}>
                        <img src={img[0]} alt={alt} />
                    </Link>
                </div>
                <div onClick={() => addProductWishList(id, product)}
                    className={click ? "product-card__heart" : "product-card__heart product-card__heart_click"}
                >
                    <div className={click ? "circle-icon circle-icon_hover" : "circle-icon circle-icon_click"}>
                        <Heart />
                    </div>
                </div>
                <button
                    className="product-card__btn-delete"
                    onClick={() => dispatch(deleteProductWishList(id))}
                >
                    <img src={cancel} alt="Удалить выбранный товар"
                    />
                </button>
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