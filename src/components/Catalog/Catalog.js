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

export const Catalog = ({ title, products, addToCart }) => {
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

    //стейт для текущей страницы которую нужно отображать
    const [currentPage, setCurrentPage] = useState(1);

    // стейт для количества отображаемых элементов на каждой странице
    const [productsPerPage] = useState(3);

    // индекс последней страницы 5
    const lastProductIndex = currentPage * productsPerPage;

    // индекс первой страницы 0
    const firstProductIndex = lastProductIndex - productsPerPage;

    //текущая страница
    const currentProduct = products.slice(firstProductIndex, lastProductIndex);

    // функция для нажатия на кружки пагинации
    const paginate = pageNumber => setCurrentPage(pageNumber);
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
                    <div className="wrap-page">
                        <div className="catalog-product">
                            {currentProduct.map((arrayProducts, index) => (
                                arrayProducts.map((product, i) => (
                                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                                ))
                            ))}
                        </div>
                        <Pagination
                            productsPerPage={productsPerPage}
                            totalProducts={products.length}
                            paginate={paginate}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>

                </div>
            </div >
            <SeedsCatalog />
        </>
    )
}