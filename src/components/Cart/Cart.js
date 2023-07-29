import './Cart.scss';
import { Cart } from '../SVG/Icon/Cart';
import { ClipBoard } from '../SVG/Icon/ClipBoard';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { CartProduct } from '../CartProduct/CartProduct';
import { useSelector } from 'react-redux';
import { selectCart } from '../../store/cart/selectors';

export const CartComp = () => {
    const breadcrumbs = [
        {
            name: "Корзина",
            to: "/cart"
        },
    ];

    const cartProducts = useSelector(selectCart);

    // const increase = (id) => {
    // setCartProducts((cartProducts) => {
    // return cartProducts.map((product) => {
    // if (product.id === id) {
    // return {
    // ...product,
    // count: product.count + 1,
    // totalPrice: (product.count + 1) * product.price,
    // }
    // }
    // return product
    // })
    // })
    // }

    // const decrease = (id) => {
    // setCartProducts((cartProducts) => {
    // return cartProducts.map((product) => {
    // const newCount = product.count > 1 ? product.count - 1 : 1
    // if (product.id === id) {
    // return {
    // ...product,
    // count: newCount,
    // totalPrice: (newCount) * product.price,
    // }
    // }
    // return product
    // })
    // })
    // }

    // const changeValue = (id, value) => {
    // setCartProducts((cartProducts) => {
    // return cartProducts.map((product) => {
    // if (product.id === id) {
    // return {
    // ...product,
    // count: value,
    // totalPrice: product.price * value,
    // }
    // }
    // return product
    // })
    // })
    // }
    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="cart">
                <PageHeadingTwice>Корзина</PageHeadingTwice>
                <span className="cart__separator-horizontal" />
                {cartProducts.length === 0 ? <h3 className="cart__text">Ваша корзина пуста!</h3> :
                    (cartProducts.map((product) => (
                        <CartProduct
                            product={product}
                            key={product.id}
                        />
                    )))
                }
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