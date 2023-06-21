import './Product.scss';
import { Button } from '../Button/Button';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { ProductCard } from '../ProductСard/ProductСard';
import { Arrow, ArrowRight } from '../SVG/Arrow/Arrow';
import { Slider } from '../Slider/Slider';
import { Outlet } from 'react-router-dom';

export const Product = () => {

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
                        <div className="arrow-circle">
                            <Arrow />
                        </div>
                        <div className="products__items">
                            <ProductCard name="Петуния Софистика" alt="Петуния Софистика F1" img={require("../../img/product/petunia/petunia.png")} price="100" to="petunia" />
                            <ProductCard name="Скор" alt="Скор" img={require("../../img/product/skor/skor.png")} price="190" to="skor" />
                            <ProductCard name="Хорус" alt="Хорус" img={require("../../img/product/horys/horys.png")} price="230" to="horys" />
                            <ProductCard name="Агрикола" alt="Агрикола, удобрение для орхидей" img={require("../../img/product/agrikola/agrikola.png")} price="317" to="agrikola" />
                        </div>
                        <div className="arrow-circle">
                            <ArrowRight />
                        </div>
                    </div>
                    <div className="stocks__slider">
                        <Slider classSmall="slider__notActive slider__notActive_green"
                            classBig="slider__active slider__active_green" />
                    </div>
                    <div className="stocks__btn">
                        <Button>Смотреть все товары</Button>
                    </div>
                </div>
            </div>
        </>
    )
}