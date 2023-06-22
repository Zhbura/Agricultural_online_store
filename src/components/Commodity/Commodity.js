import { Cart } from '../SVG/Icon/Cart'
import { Comparison } from '../SVG/Icon/Comparison'
import { Heart } from '../SVG/Icon/Heart'
import { Phone } from '../SVG/Icon/Phone'
import './Commodity.scss'
import fabricator from '../../img/fabricator.svg';
import money from '../../img/money.svg';
import mastercard from '../../img/mastercard.svg';
import visa from '../../img/visa.svg';
import availabilityImg from '../../img/availability.svg';
import { ImageSlider } from '../ImageSlider/ImageSlider'

export const Commodity = ({ availability, img, imgTwo, imgThree, imgFour, name, price, priceFor }) => {
    return (
        <>
            <div className="commodity-info">
                <ImageSlider img={img} imgTwo={imgTwo} name={name} imgThree={imgThree} imgFour={imgFour} />
                <div className="commodity-info_right">
                    <h2 className="commodity-info__title">{name}</h2>
                    <div className="commodity-info__availability">
                        <img src={availabilityImg} alt="Продукт находится в наличии" />
                        {availability}
                    </div>
                    <div className="wrap_top-info">
                        <div>
                            <div className="commodity-info__fabricator">
                                <h5 className="commodity-info__heading">Производитель</h5>
                                <img src={fabricator} alt="Производитель лого ФМС Казахстан" />
                                <span className="commodity-info__text commodity-info__text_margin">ФМС Казахстан</span>
                            </div>
                            <div className="commodity-info__payment-method">
                                <h5 className="commodity-info__heading">Оплата</h5>
                                <div className="commodity-info__payment"><img src={money} alt="money" /></div>
                                <div className="commodity-info__payment"><img src={mastercard} alt="mastercard" /></div>
                                <div className="commodity-info__payment"><img src={visa} alt="visa" /></div>
                            </div>
                        </div>
                        <span className="commodity-info__separator-vertical" />
                        <div className="commodity-info__delivery">
                            <h5 className="commodity-info__heading">Доставка</h5>
                            <span className="commodity-info__text commodity-info__text_width">Завтра в соответствии с тарифами перевозчика</span>
                            <div className="product-btn icon_orange">
                                <Phone />
                                Заказать звонок
                            </div>
                        </div>
                    </div>
                    <span className="commodity-info__separator-horizontal" />
                    <div className="wrap_bottom-info">
                        <div className="commodity-info__price-quantity">
                            <p >{price} рублей</p>
                            <p className="commodity-info__text">Цена за {priceFor}</p>
                        </div>
                        <div className="commodity-info__toolbar">
                            <div className="product-btn product-btn_orange icon_white">
                                <Cart />
                                Купить
                            </div>
                            <div className="circle-icon circle-icon_hover"> <Heart /></div>
                            <div className="icon-quantity">
                                <div className="circle-icon circle-icon_hover"><Comparison /><span>2</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}