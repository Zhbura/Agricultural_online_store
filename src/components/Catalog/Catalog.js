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
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { Comparison } from '../SVG/Icon/Comparison';
import { Cart } from '../SVG/Icon/Cart';
import { Link } from 'react-router-dom';

export const Catalog = ({ title, products }) => {
    const [selected, setSelected] = useState('');

    const dispatch = useDispatch();

    const showFilter = () => {
        dispatch(changeShowFilter);
    };

    const breadcrumbs = [
        {
            name: "Каталог",
            to: "/catalog"
        },
        {
            name: `${title}`,
            to: "/catalog"
        },
    ];


    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="catalog">
                <PageHeadingTwice>
                    {title}
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
                            {products.map((arrayProducts, index) => (
                                arrayProducts.map(product => (
                                    <ProductCard key={product.id} id={product.id}
                                        name={product.name} alt={product.alt}
                                        img={product.img[0]} price={product.price}
                                        to={product.to}
                                    />
                                ))
                            ))}
                        </div>
                        <Pagination />
                    </div>
                </div>
            </div >
            <SeedsCatalog />
        </>
    )
}