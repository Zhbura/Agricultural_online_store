import './CartProduct.scss';
import fabricator from '../../img/fabricator.svg';
import { DropdownCart } from '../Dropdown/DropdownCart';
import cancel from '../../img/cancelGrey.svg';
import { Counter } from '../Counter/Counter';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const CartProduct = ({ product, increase, decrease, changeValue, deleteProduct }) => {
    const { id, img, name, totalPrice, priceFor, count, to } = product;
    const [selected, setSelected] = useState(priceFor[0]);

    return (
        <>
            <div className="cart-product">
                <h3 className="cart-product__title"><Link className="cart-product__link" to={`/product/${to}`}>{name}</Link>
                    <img className="cart-product__cancel" src={cancel} alt="Удалить выбранный товар"
                        onClick={() => deleteProduct(id)}
                    />
                </h3>
                <div className="cart-product__info">
                    <div className="cart-product__info-left">
                        <div className="cart-product__img">
                            <img src={img[0]} alt={name} />
                        </div>
                    </div>
                    <div className="cart-product__info-middle">
                        <div className="cart-product__price-quantity">
                            <p className="cart-product__price-quantity_margin">
                                {totalPrice} рублей
                            </p>
                            <p className="cart-product__text">
                                В упаковке по {selected} шт
                            </p>
                        </div>
                        <div className="cart-product__fabricator">
                            <h5 className="cart-product__heading">Производитель</h5>
                            <img src={fabricator} alt="Производитель лого" />
                            <span className="cart-product__text cart-product__text_margin">ФМС Беларусь</span>
                        </div>
                    </div>
                    <div className="cart-product__info-right">
                        <DropdownCart
                            selected={selected}
                            setSelected={setSelected}
                            options={priceFor}
                        />
                        <div className="cart-product__quantity">
                            <p className="cart-product__quantity-text">Количество</p>
                            <Counter count={count}
                                increase={increase}
                                decrease={decrease}
                                changeValue={changeValue}
                                id={id}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}