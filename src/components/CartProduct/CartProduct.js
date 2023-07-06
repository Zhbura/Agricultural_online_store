import './CartProduct.scss';
import fabricator from '../../img/fabricator.svg';
import { DropdownCart } from '../Dropdown/DropdownCart';
import { useState } from 'react';
import cancel from '../../img/cancelGrey.svg';
import { Counter } from '../Counter/Counter';

export const CartProduct = ({ product }) => {
    const { id, img, name, totalPrice, priceFor, deleteProduct, count, increase, decrease, changeValue } = product;
    
    const [selected, setSelected] = useState('');

    return (
        <>
            <div className="cart-product">
                <h3 className="cart-product__title">{name}
                    <img className="cart-product__cancel" src={cancel} alt="Удалить выбранный товар"
                        onClick={() => deleteProduct(id)}
                    />
                </h3>
                <div className="cart-product__info">
                    <div className="cart-product__info-left">
                        <div className="cart-product__img">
                            <img src={img} alt={name} />
                        </div>
                    </div>
                    <div className="cart-product__info-middle">
                        <div className="cart-product__price-quantity">
                            <p className="cart-product__price-quantity_margin">{totalPrice} рублей</p>
                            <p className="cart-product__text">Цена за {priceFor}</p>
                        </div>
                        <div className="cart-product__fabricator">
                            <h5 className="cart-product__heading">Производитель</h5>
                            <img src={fabricator} alt="Производитель лого" />
                            <span className="cart-product__text cart-product__text_margin">ФМС Беларусь</span>
                        </div>
                    </div>
                    <div className="cart-product__info-right">
                        <DropdownCart selected={selected} setSelected={setSelected} />
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