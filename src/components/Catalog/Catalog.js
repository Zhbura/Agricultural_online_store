import './Catalog.scss';
import { Pagination } from '../Pagination/Pagination';
import { ArrowCheckbox } from '../SVG/ArrowCheckbox/ArrowCheckbox';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { SeedsCatalog } from '../SeedsCatalog/SeedsCatalog';
import { ProductCard } from '../ProductСard/ProductСard';

export const Catalog = (props) => {

    return (
        <>
            <div className="container">
                <PageHeadingTwice>
                    {props.title}
                </PageHeadingTwice>
                <div className="filters-small">
                    <form className="sort">
                        <div className="filter_small">Фильтр</div>
                        <div className="sort__container arrow-checkbox_grey">
                            <input type="text" placeholder="Сортировать по" />
                            <span /><ArrowCheckbox />
                        </div>
                    </form>
                    <div className="filter-popUp">
                        <p>Гербициды <span>(229)</span></p>
                        <span className="filter-popUp__line" />
                        <ArrowCheckbox />
                    </div>
                    <div className="result">Показано 621 товар</div>
                </div>

            </div>
            <div className="container">
                <div className="filters-big">
                    <form className="sort">
                        <div className="result">Показано 621 товар</div>
                        <div className="sort__container arrow-checkbox_grey">
                            <input type="text" placeholder="Сортировать по" />
                            <span /><ArrowCheckbox />
                        </div>
                    </form>
                </div>
                <div className="wrap-filter">
                    <div className="filter-items">
                        <div className="filter">
                            <div className="filter__text">
                                <p>Гербициды <span>(229)</span></p>
                                <p>Фунгициды <span>(9)</span></p>
                                <p>Инсектициды <span>(209)</span></p>
                                <p>Десиканты <span>(120)</span></p>
                                <p>Протравители <span>(215)</span></p>
                                <p>Адъюванты <span>(410)</span></p>
                                <p>Родентициды <span>(30)</span></p>
                                <p>Ретарданты <span>(229)</span></p>
                            </div>
                        </div>
                        <div className="filter">
                            <div className="filter__title">Фильтр</div>
                            <div className="filter__unit">
                                <div className="filter__heading">Производитель </div>
                                <label className="input-checkbox">Нертус
                                    <input type="checkbox" name="manufacturer" value="nertys" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                                <label className="input-checkbox">Басф
                                    <input type="checkbox" name="manufacturer" value="basf" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                                <label className="input-checkbox">Адама Украина
                                    <input type="checkbox" name="manufacturer" value="adamaUkraine" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                                <label className="input-checkbox">Байер
                                    <input type="checkbox" name="manufacturer" value="bayer" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                                <label className="input-checkbox">ГДЗ
                                    <input type="checkbox" name="manufacturer" value="gdz" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                                <label className="input-checkbox">Штефес
                                    <input type="checkbox" name="manufacturer" value="stephes" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                            </div>
                            <div className="filter__unit">
                                <div className="filter__heading">Культура </div>
                                <label className="input-checkbox">Подсолнечник
                                    <input type="checkbox" name="culture" value="sunflower" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                                <label className="input-checkbox">Кукуруза
                                    <input type="checkbox" name="culture" value="corn" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                                <label className="input-checkbox">Пшеница
                                    <input type="checkbox" name="culture" value="wheat" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                                <label className="input-checkbox">Ячмень
                                    <input type="checkbox" name="culture" value="barley" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                                <label className="input-checkbox">Рапс
                                    <input type="checkbox" name="culture" value="rapeseed" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                                <label className="input-checkbox">Соя
                                    <input type="checkbox" name="culture" value="soy" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                                <label className="input-checkbox">Горох
                                    <input type="checkbox" name="culture" value="peas" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                                <label className="input-checkbox">Бобы
                                    <input type="checkbox" name="culture" value="pea" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                                <label className="input-checkbox">Горчица
                                    <input type="checkbox" name="culture" value="mustard" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                                <label className="input-checkbox"> Горошек
                                    <input type="checkbox" name="culture" value="polkaDots" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                                <label className="input-checkbox">Житняк
                                    <input type="checkbox" name="culture" value="breadbasket" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                                <label className="input-checkbox">Фасоль
                                    <input type="checkbox" name="culture" value="beans" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                                <label className="input-checkbox"> Клевер
                                    <input type="checkbox" name="culture" value="clover" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                                <label className="input-checkbox">Кострец/Овсяница
                                    <input type="checkbox" name="culture" value="kostrets/ovsanitsa" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                                <label className="input-checkbox">Тимофеевка
                                    <input type="checkbox" name="culture" value="timofeevka" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                                <label className="input-checkbox">Тритикале
                                    <input type="checkbox" name="culture" value="triticale" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                                <label className="input-checkbox"> Сахарная свекла
                                    <input type="checkbox" name="culture" value="" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                                <label className="input-checkbox">Кормовая свекла
                                    <input type="checkbox" name="culture" value="sugarBeet" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                                <label className="input-checkbox"> Другое
                                    <input type="checkbox" name="culture" value="other" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                            </div>
                            <div className="filter__unit">
                                <div className="filter__heading">Количество </div>
                                <label className="input-checkbox"> 1
                                    <input type="checkbox" name="quantity" value="1" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                                <label className="input-checkbox"> 2
                                    <input type="checkbox" name="quantity" value="2" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                                <label className="input-checkbox"> 3
                                    <input type="checkbox" name="quantity" value="3" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                                <label className="input-checkbox">4
                                    <input type="checkbox" name="quantity" value="4" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                                <label className="input-checkbox"> 5
                                    <input type="checkbox" name="quantity" value="5" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                                <label className="input-checkbox"> 6
                                    <input type="checkbox" name="quantity" value="6" />
                                    <span className="checkmark-checkbox"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="catalog-product">
                        <ProductCard name="Петуния Софистика F1" alt="Петуния Софистика F1" img={require("../../img/newProducts1.png")} price="20" />
                        <ProductCard name="Скор 250 ЕС К. Э." alt="Скор 250 ЕС К. Э." img={require("../../img/newProducts3.png")} price="200" />
                        <ProductCard name="Хорус" alt="Хорус" img={require("../../img/newProducts4.png")} price="320" />
                        <ProductCard name="Агрикола" alt="Агрикола, удобрение для орхидей" img={require("../../img/newProducts2.png")} price="170" />
                        <ProductCard name="Петуния Софистика F1" alt="Петуния Софистика F1" img={require("../../img/newProducts1.png")} price="20" />
                        <ProductCard name="Скор 250 ЕС К. Э." alt="Скор 250 ЕС К. Э." img={require("../../img/newProducts3.png")} price="200" />
                        <ProductCard name="Хорус" alt="Хорус" img={require("../../img/newProducts4.png")} price="320" />
                        <ProductCard name="Агрикола" alt="Агрикола, удобрение для орхидей" img={require("../../img/newProducts2.png")} price="170" />
                        <ProductCard name="Петуния Софистика F1" alt="Петуния Софистика F1" img={require("../../img/newProducts1.png")} price="20" />
                        <ProductCard name="Скор 250 ЕС К. Э." alt="Скор 250 ЕС К. Э." img={require("../../img/newProducts3.png")} price="200" />
                        <ProductCard name="Хорус" alt="Хорус" img={require("../../img/newProducts4.png")} price="320" />
                        <ProductCard name="Агрикола" alt="Агрикола, удобрение для орхидей" img={require("../../img/newProducts2.png")} price="170" />
                        <ProductCard name="Петуния Софистика F1" alt="Петуния Софистика F1" img={require("../../img/newProducts1.png")} price="20" />
                        <ProductCard name="Скор 250 ЕС К. Э." alt="Скор 250 ЕС К. Э." img={require("../../img/newProducts3.png")} price="200" />
                        <ProductCard name="Хорус" alt="Хорус" img={require("../../img/newProducts4.png")} price="320" />
                    </div>
                </div>
                <Pagination />
            </div>
            <SeedsCatalog />
        </>
    )
}