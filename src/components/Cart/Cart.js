import './Cart.scss';
import { Cart } from '../SVG/Icon/Cart';
import { ClipBoard } from '../SVG/Icon/ClipBoard';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { CartProduct } from '../CartProduct/CartProduct';
import { useEffect, useState } from 'react';

export const CartComp = ({ products }) => {
    const [cartProducts, setCartProducts] = useState(products[0]);

    const [total, setTotal] = useState({
        count: cartProducts.reduce((prev, current) => prev + current.count, 0),
        totalPrice: cartProducts.reduce((prev, current) => prev + current.totalPrice, 0),
    })

    useEffect(() => {
        setTotal({
            count: cartProducts.reduce((prev, current) => (prev + current.count), 0),
            totalPrice: cartProducts.reduce((prev, current) => (prev + current.totalPrice), 0),
        })
    },
        [cartProducts])

    const breadcrumbs = [
        {
            name: "Корзина",
            to: "/cart"
        },
    ];

    const deleteProduct = (id) => {
        setCartProducts((cartProducts) => cartProducts.filter((product) => id !== product.id));
    }

    const increase = (id) => {
        setCartProducts((cartProducts) => {
            return cartProducts.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        count: product.count + 1,
                        totalPrice: (product.count + 1) * product.price,
                    }
                }
                return product
            })
        })
    }

    const decrease = (id) => {
        setCartProducts((cartProducts) => {
            return cartProducts.map((product) => {
                const newCount = product.count > 1 ? product.count - 1 : 1
                if (product.id === id) {
                    return {
                        ...product,
                        count: newCount,
                        totalPrice: (newCount) * product.price,
                    }
                }
                return product
            })
        })
    }

    const changeValue = (id, value) => {
        setCartProducts((cartProducts) => {
            return cartProducts.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        count: value,
                        totalPrice: product.price * value,
                    }
                }
                return product
            })
        })
    }

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="cart">
                <PageHeadingTwice>Корзина</PageHeadingTwice>
                <span className="cart__separator-horizontal" />
                {cartProducts.map((product) => (
                    <CartProduct
                        id={product.id}
                        key={product.id}
                        name={product.name}
                        totalPrice={product.totalPrice}
                        priceFor={product.priceFor}
                        img={product.img[0]}
                        count={product.count}
                        deleteProduct={deleteProduct}
                        increase={increase}
                        decrease={decrease}
                        changeValue={changeValue}
                    />
                ))}
                <span className="cart__separator-horizontal" />
                {/* временно, не забыть удалить */}
                <div className="order__buy-product">
                    <p className="order__buy-product_margin">Итого: <span>{total.count} единиц </span></p>
                    <p>На сумму: <span>{total.totalPrice}</span></p>
                </div>

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