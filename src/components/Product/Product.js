import './Product.scss';
import { Button } from '../Button/Button';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { ProductCard } from '../ProductСard/ProductСard';
import { Arrow, ArrowRight } from '../SVG/Arrow/Arrow';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Slider } from '../Slider/Slider';

export const Product = ({ products }) => {
    const [currentProduct, setCurrentProduct] = useState(0);

    const prev = () => {
        const index = currentProduct > 0 ? currentProduct - 1 : products.length - 1;
        setCurrentProduct(index)
    }

    const next = () => {
        const index = currentProduct < products.length - 1 ? currentProduct + 1 : 0;
        setCurrentProduct(index)
    }

    const switchIndex = (index) => {
        setCurrentProduct(index);
    }
    return (
        <>
            <div className="commodity">
                <div className="container">
                    <Outlet />
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
                        <div className="arrow-circle arrow-circle_left" onClick={prev}>
                            <Arrow />
                        </div>
                        <div className="carousel">
                            <div className="carousel__items carousel__items_big"
                                style={{ transform: `translateX(${-currentProduct * 1100}px)` }}
                            >
                                {products[2].map((product, index) => (
                                    <ProductCard key={index} id={product.id} name={product.name} alt={product.alt} img={product.img[0]} price={product.price} to={product.to} />
                                ))}
                                {products[3].map((product, index) => (
                                    <ProductCard key={index} id={product.id} name={product.name} alt={product.alt} img={product.img[0]} price={product.price} to={product.to} />
                                ))}
                                {products[1].map((product, index) => (
                                    <ProductCard key={index} id={product.id} name={product.name} alt={product.alt} img={product.img[0]} price={product.price} to={product.to} />
                                ))}
                                {products[0].map((product, index) => (
                                    <ProductCard key={index} id={product.id} name={product.name} alt={product.alt} img={product.img[0]} price={product.price} to={product.to} />
                                ))}
                            </div>
                            <div className="carousel__items carousel__items_small"
                                style={{ transform: `translateX(${-currentProduct * 275}px)` }}
                            >
                                {products[0].map((product, index) => (
                                    <ProductCard key={index} name={product.name} alt={product.alt} img={product.img} price={product.price} to={product.to} />
                                ))}
                            </div>
                        </div>
                        <div className="arrow-circle arrow-circle_right" onClick={next}>
                            <ArrowRight />
                        </div>
                    </div>
                    <div className="stocks__slider">
                        <Slider classSmall="slider__notActive slider__notActive_green"
                            classBig="slider__active slider__active_green"
                            products={products} currentIndex={currentProduct} switchIndex={switchIndex}
                        />
                    </div>
                    <div className="stocks__btn">
                        <Button>Смотреть все товары</Button>
                    </div>
                </div>
            </div>
        </>
    )
}