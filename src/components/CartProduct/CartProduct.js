import './CartProduct.scss';
import fabricator from '../../img/fabricator.svg';
import { DropdownCart } from '../Dropdown/DropdownCart';
import { useState } from 'react';
import cancel from '../../img/cancelGrey.svg';

export const CartProduct = ({ id, img, name, price, priceFor, deleteProduct }) => {
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
                            <p className="cart-product__price-quantity_margin">{price} рублей</p>
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
                            <div className="counter">
                                <div className="counter__quantity-circle_small">
                                    <span className="counter__minus" />
                                </div>
                                <div className="counter__quantity-circle">
                                    <span>1</span>
                                </div>
                                <div className="counter__quantity-circle_small">
                                    <span className="counter__plus" />
                                    <span className="counter__minus" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}