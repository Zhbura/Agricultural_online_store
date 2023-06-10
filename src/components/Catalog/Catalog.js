import './Catalog.scss';
import { Pagination } from '../Pagination/Pagination';
import { ArrowCheckbox } from '../SVG/ArrowCheckbox/ArrowCheckbox';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { SeedsCatalog } from '../SeedsCatalog/SeedsCatalog';
import { ProductCard } from '../ProductСard/ProductСard';
import { FilterCatalogSmall } from '../FilterCatalog/FilterCatalogSmall';
import { useDispatch } from 'react-redux';
import { changeShowFilter } from '../../store/catalog/action';
import { useState } from 'react';
import { FilterCatalogBig } from '../FilterCatalog/FilterCatalogBig';

export const Catalog = (props) => {
    const [filterPopUpActive, setFilterPopeActive] = useState(false);

    const dispatch = useDispatch();

    const showFilter = () => {
        dispatch(changeShowFilter);
    };
    return (
        <>
            <div className="catalog">
                <PageHeadingTwice>
                    {props.title}
                </PageHeadingTwice>
                <div className="catalog-wrap catalog-wrap_top container">
                    <div className="result">Показано 621 товар</div>
                    <div className="sort arrow-checkbox_grey">
                        <input type="text" placeholder="Сортировать по" />
                        <span /><ArrowCheckbox />
                    </div>
                </div>
                <div className="wrap-small">
                    <div className="wrap-small_top">
                        <div className="filter-small" onClick={showFilter}>Фильтр
                        </div>
                        <FilterCatalogSmall />
                        <div className="sort arrow-checkbox_grey">
                            <input type="text" placeholder="Сортировать по" />
                            <span /><ArrowCheckbox />
                        </div>
                    </div>
                    <div className="filter-popUp" onClick={() => setFilterPopeActive(!filterPopUpActive)}>
                        <p className="filter-popUp__selected">Гербициды <span>(229)</span></p>
                        <span className="filter-popUp__line" />
                        <ArrowCheckbox />
                        <div className={filterPopUpActive ? "filter-popUp__items  active" : "filter-popUp__items"}>
                            <p className="filter-popUp__text filter-popUp__text_active">Гербициды <span>(229)</span></p>
                            <p className="filter-popUp__text">Фунгициды <span>(9)</span></p>
                            <p className="filter-popUp__text">Инсектициды <span>(209)</span></p>
                            <p className="filter-popUp__text">Десиканты <span>(120)</span></p>
                            <p className="filter-popUp__text">Протравители <span>(215)</span></p>
                            <p className="filter-popUp__text">Адъюванты <span>(410)</span></p>
                            <p className="filter-popUp__text">Родентициды <span>(30)</span></p>
                            <p className="filter-popUp__text">Ретарданты <span>(229)</span></p>
                        </div>
                    </div>
                    <div className="result">Показано 621 товар</div>
                </div>
                <div className="catalog-wrap container">
                    <FilterCatalogBig />
                    <div>
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
                        <Pagination />
                    </div>
                </div>
            </div>
            <SeedsCatalog />
        </>
    )
}