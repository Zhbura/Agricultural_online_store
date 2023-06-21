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
import { DropdownCatalog } from '../Dropdown/DropdownCatalog';

export const Catalog = (props) => {
    const [selected, setSelected] = useState('');

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
                    <DropdownCatalog selected={selected} setSelected={setSelected} />
                    <div className="result">Показано 621 товар</div>
                </div>
                <div className="catalog-wrap container">
                    <FilterCatalogBig />
                    <div>
                        <div className="catalog-product">
                            <ProductCard name="Петуния Софистика" alt="Петуния Софистика F1" img={require("../../img/product/petunia/petunia.png")} price="100" to="petunia" />
                            <ProductCard name="Скор" alt="Скор" img={require("../../img/product/skor/skor.png")} price="190" to="skor" />
                            <ProductCard name="Хорус" alt="Хорус" img={require("../../img/product/horys/horys.png")} price="230" to="horys" />
                            <ProductCard name="Агрикола" alt="Агрикола, удобрение для орхидей" img={require("../../img/product/agrikola/agrikola.png")} price="317" to="agrikola" />
                            <ProductCard name="Петуния Софистика" alt="Петуния Софистика F1" img={require("../../img/product/petunia/petunia.png")} price="100" to="petunia" />
                            <ProductCard name="Скор" alt="Скор" img={require("../../img/product/skor/skor.png")} price="190" to="skor" />
                            <ProductCard name="Хорус" alt="Хорус" img={require("../../img/product/horys/horys.png")} price="230" to="horys" />
                            <ProductCard name="Агрикола" alt="Агрикола, удобрение для орхидей" img={require("../../img/product/agrikola/agrikola.png")} price="317" to="agrikola" />
                            <ProductCard name="Петуния Софистика" alt="Петуния Софистика F1" img={require("../../img/product/petunia/petunia.png")} price="100" to="petunia" />
                            <ProductCard name="Скор" alt="Скор" img={require("../../img/product/skor/skor.png")} price="190" to="skor" />
                            <ProductCard name="Хорус" alt="Хорус" img={require("../../img/product/horys/horys.png")} price="230" to="horys" />
                            <ProductCard name="Агрикола" alt="Агрикола, удобрение для орхидей" img={require("../../img/product/agrikola/agrikola.png")} price="317" to="agrikola" />
                            <ProductCard name="Петуния Софистика" alt="Петуния Софистика F1" img={require("../../img/product/petunia/petunia.png")} price="100" to="petunia" />
                            <ProductCard name="Скор" alt="Скор" img={require("../../img/product/skor/skor.png")} price="190" to="skor" />
                            <ProductCard name="Хорус" alt="Хорус" img={require("../../img/product/horys/horys.png")} price="230" to="horys" />
                        </div>
                        <Pagination />
                    </div>
                </div>
            </div>
            <SeedsCatalog />
        </>
    )
}