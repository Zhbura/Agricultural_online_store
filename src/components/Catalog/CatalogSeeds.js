import './Catalog.scss';
import { Pagination } from '../Pagination/Pagination';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { SeedsCatalog } from '../SeedsCatalog/SeedsCatalog';
import { ProductCard } from '../ProductСard/ProductСard';
import { FilterCatalogSmall } from '../FilterCatalog/FilterCatalogSmall';
import { useDispatch, useSelector } from 'react-redux';
import { changeShowFilter } from '../../store/catalog/action';
import {
    chooseCategoryProducts,
    chooseManufacturersProducts,
    chooseQuantitativeStockProducts
} from '../../store/catalogSeeds/action';
import { useEffect, useState } from 'react';
import { FilterCatalogBig } from '../FilterCatalog/FilterCatalogBig';
import { DropdownCatalog } from '../Dropdown/DropdownCatalog';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { DropdownCatalogSort } from '../Dropdown/DropdownCatalogSort';
import {
    selectCountAllSeeds,
    selectCountFilterSeedsProducts,
    selectCountFlowers,
    selectCountGreenery,
    selectCountVegetables,
    selectFilterSeedsProducts
} from '../../store/catalogSeeds/selectors';

export const CatalogSeeds = () => {
    // Для работы dropdown
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
            name: "Семена",
            to: "/catalog_seeds"
        },
    ];

    let seedsProducts = useSelector(selectFilterSeedsProducts);
    const countSeedsProducts = useSelector(selectCountFilterSeedsProducts);

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
    const currentProduct = seedsProducts.sort((a, b) => sort === "increase" ? a.price - b.price : sort === "decrease" ? b.price - a.price : "").slice(firstProductIndex, lastProductIndex);

    // функция для нажатия на кружки пагинации
    const paginate = pageNumber => setCurrentPage(pageNumber);

    //Для работы ФИЛЬТРА

    // Массив категорий 
    const categories = [
        { key: "allSeeds", name: "Все товары", count: useSelector(selectCountAllSeeds) },
        { key: "flowers", name: "Цветы", count: useSelector(selectCountFlowers) },
        { key: "vegetables", name: "Овощи", count: useSelector(selectCountVegetables) },
        { key: "greenery", name: "Зелень", count: useSelector(selectCountGreenery) },
    ];
    
    // Для хранения выбранной категории
    const [categoryState, setCategoryState] = useState();

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

    useEffect(() => {
        if (categoryState) {
            dispatch(chooseCategoryProducts(categoryState, selectedManufacturers, quantitativeStock)) // Если выбрана категория и производитель + кол-во
        } else {
            if (selectedManufacturers.length > 0) {
                dispatch(chooseManufacturersProducts(selectedManufacturers, quantitativeStock)) //Если выбран только производитель + кол-во
            } else {
                dispatch(chooseQuantitativeStockProducts(quantitativeStock)) //Если выбрано только кол-во
            }
        }
        if (selected.key) {
            dispatch(chooseCategoryProducts(selected.key, selectedManufacturers, quantitativeStock)) // Для маленького разрешения экрана, выбор категории и производителя
        }

    }, [categoryState, selectedManufacturers, selected.key, quantitativeStock]);

    const manufacturers = [
        { key: "basf", name: "Басф" },
        { key: "nertys", name: "Нертус" },
        { key: "bayer", name: "Байер" },
    ];
    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="catalog catalog-seeds">
                <PageHeadingTwice>
                    Семена
                </PageHeadingTwice>
                <div className="catalog-wrap catalog-wrap_top container">
                    <div className="result">Показано {countSeedsProducts} товар</div>
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
                    <DropdownCatalog
                        categories={categories}
                        selected={selected}
                        setSelected={setSelected}
                        setCategoryState={setCategoryState}
                    />
                    <div className="result">Показано {countSeedsProducts} товар</div>
                </div>
                <div className="catalog-wrap container">
                    <FilterCatalogBig
                        handleFilterButtonClick={handleFilterButtonClick}
                        categories={categories}
                        setCategoryState={setCategoryState}
                        quantitativeStockClick={quantitativeStockClick}
                        manufacturers={manufacturers}
                    />
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
                            totalProducts={seedsProducts.length}
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