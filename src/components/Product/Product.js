import './Product.scss';
import { Button } from '../Button/Button';
import fabricator from '../../img/fabricator.svg';
import money from '../../img/money.svg';
import mastercard from '../../img/mastercard.svg';
import visa from '../../img/visa.svg';
import availability from '../../img/availability.svg';
import { Heart } from '../SVG/Icon/Heart';
import { Comparison } from '../SVG/Icon/Comparison';
import productImgSmall from '../../img/productImgSmall.png';
import productImgBig from '../../img/productImgBig.png';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { BottomBar } from '../BottomBar/BottomBar';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { TopBar } from '../TopBar/TopBar';
import { ProductCard } from '../ProductСard/ProductСard';
import { Arrow } from '../SVG/Arrow';
import { Phone } from '../SVG/Icon/Phone';
import { Cart } from '../SVG/Icon/Cart';

export const Product = () => {
    return (
        <>
            <div className="wrapper">
                <div className="top">
                    <TopBar />
                    <Header />
                    <BottomBar />
                    <div className="commodity">
                        <div className="container">
                            <div className="commodity-info">
                                <div className="commodity-info_left">
                                    <div className="commodity-info__img commodity-info__img_big">
                                        <div className="arrow-scroll">
                                            <Arrow />
                                        </div>
                                        <img src={productImgBig} />
                                        <div className="arrow-scroll arrow_right">
                                            <Arrow />
                                        </div>
                                    </div>
                                    <div className="wrap-img">
                                        <div className="commodity-info__img commodity-info__img_small"><img src={productImgSmall} /></div>
                                        <div className="commodity-info__img commodity-info__img_small"><img src={productImgSmall} /></div>
                                        <div className="commodity-info__img commodity-info__img_small"><img src={productImgSmall} /></div>
                                    </div>
                                </div>
                                <div className="commodity-info_right">
                                    <h2 className="commodity-info__title">Гербицид Комманд®,<br /> ФМС Украина</h2>
                                    <div className="commodity-info__availability">
                                        <p> <img src={availability} />В наличии</p>
                                        <p className="commodity-info__availability_grey">1 619,03 грн./л</p>
                                    </div>
                                    <div className="wrap_top-info">
                                        <div>
                                            <div className="commodity-info__fabricator">
                                                <h5 className="commodity-info__heading">Производитель</h5>
                                                <img src={fabricator} alt="Производитель лого" />
                                                <span className="commodity-info__text commodity-info__text_margin">ФМС Украина</span>
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
                                            <p >7814,63 грн</p>
                                            <p className="commodity-info__text">Цена за 5 л</p>
                                        </div>
                                        <div className="commodity-info__toolbar">
                                            <div className="product-btn product-btn_orange icon_white">
                                                <Cart />
                                                Купить
                                            </div>
                                            <a href="#"><div className="circle-icon circle-icon_hover"> <Heart /></div></a>
                                            <div className="icon-quantity">
                                                <a href="#"><div className="circle-icon circle-icon_hover"><Comparison /><span>2</span></div></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="description">
                                <div className="wrap-title">
                                    <div className="description__title">Описание</div>
                                    <div className="description__title description__title_notActive"> Отзывы</div>
                                </div>
                                <div className="description__wrap">
                                    <h4 className="description__heading">Генерал на поле</h4>
                                    <p className="description__text">
                                        Генерал на поле. Довсходовый гербицид для борьбы с однолетними двудольными и некоторыми
                                        злаковыми сорняками в посевах рапса и других культур.
                                    </p>
                                    <div className="description__text description__text_margin">
                                        <p><span>Действующее вещество:</span> Кломазон, 480 г / л</p>
                                        <p><span>Препаративная форма:</span> Концентрат эмульсии</p>
                                        <p><span>Норма использования:</span> 0,2-0,6 л / га</p>
                                        <p><span>Класс токсичности:</span> 2.</p>
                                        <p><span>Срок хранения:</span> 2 года.</p>
                                    </div>
                                    <h4 className="description__heading">Характеристики</h4>
                                    <div className="description__text">
                                        Системный препарат попадает к растению через гипокотиль (подсемядольное коленцо) и
                                        корневую систему и движется по ксилеме к листьям;
                                        <ul>
                                            <li className="description__link">Проникая в растение, прекращает процесс образования хлорофилла и каротина, тем самым
                                                останавливает процесс фотосинтеза;</li>
                                            <li className="description__link">Уничтожает сорняки и создает условия озимому рапсу для хорошего роста и развития в
                                                осенний период, устраняя конкуренцию растений за свет, влагу и питательные вещества на
                                                самых ранних этапах органогенеза;</li>
                                            <li className="description__link"> Хорошо связывается в почве и слабо промывается;</li>
                                            <li className="description__link">Для комплексной защиты рапса обычно;</li>
                                            <li className="description__link">Используется в баковых смесях с Д. Р. метазахлор и пропизохлор;</li>
                                            <li className="description__link">В странах Восточной Европы (Чехия, Словакия, Польша) использование Комманд® на посевах
                                                рапса является обязательным элементом в технологии его выращивания;</li>
                                            <li className="description__link">Широко используется больше, чем в 100 странах мира на посевах рапса, сои, табака,
                                                перца, моркови, картофеля, бахчевых, хлопка и других культур.</li>
                                        </ul>
                                    </div>
                                    <h4 className="description__heading">Рекомендации:</h4>
                                    <div className="description__text">
                                        <ul>
                                            <li className="description__link">Для достижения максимального эффекта требуется качественная обработка почвы:
                                                отсутствие комков, выровненная поверхность поля, отсутствие растительных остатков;</li>
                                            <li className="description__link">Опрыскивание почвы проводится в течение двух дней, а лучше всего сразу же после
                                                посева;</li>
                                            <li className="description__link">При недостатке почвенной влаги после опрыскивания рекомендуется провести
                                                прикатывание почвы кольчато-шпоровыми катками;</li>
                                            <li className="description__link"> Норма расхода зависит от содержания гумуса в почве, на малогумусных почвах ее
                                                можно несколько снизить;</li>
                                            <li className="description__link">Может возникнуть побеление первой пары листочков рапса, однако в дальнейшем оно
                                                исчезает, а растения имеют более развитую корневую систему, лучше выдерживают
                                                низкие температуры;</li>
                                            <li className="description__link">При необходимости пересева через 30-60 дней после обработки рапс и сою можно сеять
                                                после поверхностной обработки почвы на глубину 8-10 см, для всех остальных культур
                                                рекомендуется провести глубокую вспашку;</li>
                                            <li className="description__link">Обязательным требованием при внесении препарата является обеспечение сплошного
                                                покрытия поверхности поля.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stocks">
                            <div className="page-heading_white">
                                <PageHeadingTwice>Вам также понравится</PageHeadingTwice>
                            </div>
                            <div className="products">
                                <div className="arrow-circle">
                                    <Arrow />
                                </div>
                                <ProductCard name="Петуния Софистика F1" alt="Петуния Софистика F1" img={require("../../img/newProducts1.png")} price="20" />
                                <ProductCard name="Скор 250 ЕС К. Э." alt="Скор 250 ЕС К. Э." img={require("../../img/newProducts3.png")} price="200" />
                                <ProductCard name="Хорус" alt="Хорус" img={require("../../img/newProducts4.png")} price="320" />
                                <ProductCard name="Агрикола" alt="Агрикола, удобрение для орхидей" img={require("../../img/newProducts2.png")} price="170" />
                                <div className="arrow-circle arrow_right">
                                    <Arrow />
                                </div>
                            </div>
                            <div className="stocks__slider">
                                <div className="slider">
                                    <span className="slider__notActive slider__notActive_green" />
                                    <span className="slider__notActive slider__notActive_green" />
                                    <span className="slider__active slider__active_green" />
                                    <span className="slider__notActive slider__notActive_green" />
                                    <span className="slider__notActive slider__notActive_green" />
                                </div>
                            </div>
                            <div className="stocks__btn">
                                <Button>Смотреть все товары</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}