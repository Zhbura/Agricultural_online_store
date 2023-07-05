import './Cart.scss';
import { Cart } from '../SVG/Icon/Cart';
import { ClipBoard } from '../SVG/Icon/ClipBoard';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { CartProduct } from '../CartProduct/CartProduct';
import { useState } from 'react';

export const CartComp = ({ products }) => {
    const [cartProducts, setCartProducts] = useState(products[0]);

    const breadcrumbs = [
        {
            name: "Корзина",
            to: "/cart"
        },
    ];
    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="cart">
                <PageHeadingTwice>Корзина</PageHeadingTwice>
                <span className="cart__separator-horizontal" />
                {cartProducts.map((product) => (
                    <CartProduct key={product.id} name={product.name} price={product.price} priceFor={product.priceFor} img={product.img[0]} />
                ))}
                <span className="cart__separator-horizontal" />
                <div className="cart__info-bottom">
                    <div className="btn-cart icon_orange">
                        <Link to='/catalog_plant_protection' className="btn-cart__link btn-cart__link_orange">
                            <Cart />Продолжить покупки
                        </Link>
                    </div>
                    <div className="btn-cart btn-cart_orange icon_white">
                        <Link to="/order" className="btn-cart__link"><ClipBoard />Оформить заказ</Link>
                    </div>
                </div>
            </div>
        </>
    )
}