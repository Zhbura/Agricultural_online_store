import { Cart } from '../SVG/Icon/Cart'
import { Comparison } from '../SVG/Icon/Comparison'
import { Heart } from '../SVG/Icon/Heart'
import { Phone } from '../SVG/Icon/Phone'
import './Product.scss'
import fabricator from '../../img/fabricator.svg';
import money from '../../img/money.svg';
import mastercard from '../../img/mastercard.svg';
import visa from '../../img/visa.svg';
import availabilityImg from '../../img/availability.svg';
import { ImageSlider } from '../ImageSlider/ImageSlider';
import { Details } from '../Details/Details';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList } from '../../store/wishList/action';
import { countWishList } from '../../store/wishList/selectors'

export const Product = ({ product }) => {
    const { id, img, name, priceFor, price, availability } = product;

    const dispatch = useDispatch();

    const totalWish = useSelector(countWishList);
    return (
        <>
            <div className="product">
                <ImageSlider images={img} name={name} />
                <div className="product_right">
                    <h2 className="product__title">{name}</h2>
                    <div className="product__availability">
                        <img src={availabilityImg} alt="Продукт находится в наличии" />
                        {availability}
                    </div>
                    <div className="product__wrap-top">
                        <div>
                            <div className="product__fabricator">
                                <h5 className="product__heading">Производитель</h5>
                                <img src={fabricator} alt="Производитель лого ФМС Казахстан" />
                                <span className="product__text product__text_margin">
                                    ФМС Казахстан
                                </span>
                            </div>
                            <div className="product__payment-method">
                                <h5 className="product__heading">Оплата</h5>
                                <div className="product__payment">
                                    <img src={money} alt="money" />
                                </div>
                                <div className="product__payment">
                                    <img src={mastercard} alt="mastercard" />
                                </div>
                                <div className="product__payment">
                                    <img src={visa} alt="visa" />
                                </div>
                            </div>
                        </div>
                        <span className="product__separator-vertical" />
                        <div className="product__delivery">
                            <h5 className="product__heading">Доставка</h5>
                            <span className="product__text product__text_width">Завтра в соответствии с тарифами перевозчика</span>
                            <div className="product-btn icon_orange">
                                <Phone />
                                Заказать звонок
                            </div>
                        </div>
                    </div>
                    <span className="product__separator-horizontal" />
                    <div className="product__wrap-bottom">
                        <div className="product__price-quantity">
                            <p >{price} руб</p>
                            <p className="product__text">Цена за {priceFor[0]} шт</p>
                        </div>
                        <div className="product__toolbar">
                            <div className="product-btn product-btn_orange icon_white">
                                <Cart />
                                Купить
                            </div>
                            <div className="icon-quantity" onClick={() => dispatch(addToWishList(id, product))}>
                                <div className="circle-icon circle-icon_hover">
                                    <Heart /><span>{totalWish}</span>
                                </div>
                            </div>
                            <div className="circle-icon circle-icon_hover"><Comparison /></div>
                        </div>
                    </div>
                </div>
            </div>
            <Details name={name} />
        </>
    )
}