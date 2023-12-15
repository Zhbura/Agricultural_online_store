import './Catalog.scss';
import { Pagination } from '../Pagination/Pagination';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { SeedsCatalog } from '../SeedsCatalog/SeedsCatalog';
import { ProductCard } from '../ProductСard/ProductСard';
import { FilterCatalogSmall } from '../FilterCatalog/FilterCatalogSmall';
import { useDispatch, useSelector } from 'react-redux';
import { changeShowFilter } from '../../store/catalogPpp/action';
import {
    chooseManufacturersProducts,
    chooseQuantitativeStockProducts
} from '../../store/catalogFarmerHelp/action';
import { useEffect, useState } from 'react';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { DropdownCatalogSort } from '../Dropdown/DropdownCatalogSort';
import {
    selectCountFarmerHelpProducts,
    selectFarmerHelpProducts
} from '../../store/catalogFarmerHelp/selectors';

export const CatalogFarmerHelp = () => {

    const dispatch = useDispatch();

    const showFilter = () => {
        dispatch(changeShowFilter);
    };

    const breadcrumbs = [
        {
            name: "Каталог",
            to: "/Agricultural_online_store/catalog"
        },
        {
            name: "Агроному в помощь",
            to: "/Agricultural_online_store/catalog_farmer_help"
        },
    ];

    let farmerHelpProducts = useSelector(selectFarmerHelpProducts);
    const countFarmerHelpProducts = useSelector(selectCountFarmerHelpProducts);

    //Для пагинации
    //стейт для текущей страницы которую нужно отображать
    const [currentPage, setCurrentPage] = useState(1);

    // стейт для количества отображаемых элементов на каждой странице
    const [productsPerPage] = useState(12);

    // индекс последней страницы 5
    const lastProductIndex = currentPage * productsPerPage;

    // индекс первой страницы 0
    const firstProductIndex = lastProductIndex - productsPerPage;

    // Для хранения значения значения сортировки цены
    const [sort, setSort] = useState('');

    //текущая страница отображающая на странице и применяемая к ней сортировка по цене товаров
    const currentProduct = farmerHelpProducts.sort((a, b) => sort === "increase" ? a.price - b.price : sort === "decrease" ? b.price - a.price : "").slice(firstProductIndex, lastProductIndex);

    // функция для нажатия на кружки пагинации
    const paginate = pageNumber => setCurrentPage(pageNumber);

    //Для работы ФИЛЬТРА

    // массив выбранных производителей
    const [selectedManufacturers, setSelectedManufacturers] = useState([]);

    // Функция для добавления производителя в массив выбранных производителей
    const handleFilterButtonClick = (manufacturer) => {
        // Если в массиве selectedManufacturers есть кликнутый производитель то удаляем этого производителся из массива 
        // Если же нет то добавляем в массив selectedManufacturers кликнутого производителя
        if (selectedManufacturers.includes(manufacturer)) {
            let filters = selectedManufacturers.filter((el) => el !== manufacturer);
            setSelectedManufacturers(filters);
        } else {
            setSelectedManufacturers([...selectedManufacturers, manufacturer]);
        }
    };
    // Для фильтра количества
    const [selectedQuantitativeStock, setselectedQuantitativeStock] = useState([]);
    const [quantitativeStock, setQuantitativeStock] = useState(0);

    const quantitativeStockClick = (number) => {
        if (selectedQuantitativeStock.includes(number)) {
            let filters = selectedQuantitativeStock.filter((el) => el !== number);
            if (filters.length > 0) {
                let maxQuantitativeStock = Math.max.apply(null, filters);
                setQuantitativeStock(maxQuantitativeStock)
            } else {
                setQuantitativeStock(0)
            }
            setselectedQuantitativeStock(filters);
        } else {
            setselectedQuantitativeStock([...selectedQuantitativeStock, number]);
            let maxQuantitativeStock = Math.max.apply(null, [...selectedQuantitativeStock, number]);
            setQuantitativeStock(maxQuantitativeStock)
        }
    }

    const quantitativeStockArr = [10, 11, 12, 13, 14, 15];

    useEffect(() => {
        if (selectedManufacturers.length > 0) {
            dispatch(chooseManufacturersProducts(selectedManufacturers, quantitativeStock)) //Если выбран только производитель + кол-во
        } else {
            dispatch(chooseQuantitativeStockProducts(quantitativeStock)) //Если выбрано только кол-во
        }

    }, [selectedManufacturers, quantitativeStock]);

    const manufacturers = [
        { key: "gdz", name: "ГДЗ" },
        { key: "stephes", name: "Штефес" },
    ];
    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="catalog catalog-farmer">
                <PageHeadingTwice>
                    Агроному в помощь
                </PageHeadingTwice>
                <div className="catalog-wrap catalog-wrap_top container">
                    <div className="result">Показано {countFarmerHelpProducts} товар</div>
                    <DropdownCatalogSort setSort={setSort} />
                </div>
                <div className="wrap-small">
                    <div className="wrap-small_top">
                        <div className="filter-small" onClick={showFilter}>Фильтр
                        </div>
                        <FilterCatalogSmall
                            handleFilterButtonClick={handleFilterButtonClick}
                            quantitativeStockClick={quantitativeStockClick}
                            manufacturers={manufacturers}
                        />
                        <DropdownCatalogSort setSort={setSort} />
                    </div>
                    <div className="result">Показано {countFarmerHelpProducts} товар</div>
                </div>
                <div className="catalog-wrap container">
                    <div className="filter-items">
                        <div className="filter">
                            <div className="filter__title">Фильтр</div>
                            <div className="filter__unit">
                                <div className="filter__heading">Производитель </div>
                                {manufacturers.map((manufacturer) => (
                                    <label key={manufacturer.key}
                                        className="input-checkbox"
                                    > {manufacturer.name}
                                        <input
                                            type="checkbox"
                                            name="manufacturer"
                                            onChange={() => handleFilterButtonClick(manufacturer.key)}
                                        />
                                        <span className="checkmark-checkbox" />
                                    </label>
                                ))}
                            </div>
                            <div className="filter__unit">
                                <div className="filter__heading">Количество </div>
                                {quantitativeStockArr.map((number) => (
                                    <label key={number}
                                        className="input-checkbox"
                                    > {number}
                                        <input
                                            type="checkbox"
                                            name="quantity"
                                            onChange={() => quantitativeStockClick(number)}
                                        />
                                        <span className="checkmark-checkbox" />
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="wrap-page">
                        {currentProduct.length === 0 &&
                            <h3 className="catalog__text">
                                Извините, по вашему запросу ни чего не найдено!
                            </h3>}
                        <div className="catalog-product">
                            {currentProduct.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                        <Pagination
                            productsPerPage={productsPerPage}
                            totalProducts={farmerHelpProducts.length}
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