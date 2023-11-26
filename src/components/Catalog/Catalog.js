import './Catalog.scss';
import { Pagination } from '../Pagination/Pagination';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { SeedsCatalog } from '../SeedsCatalog/SeedsCatalog';
import { ProductCard } from '../ProductСard/ProductСard';
import { FilterCatalogSmall } from '../FilterCatalog/FilterCatalogSmall';
import { useDispatch, useSelector } from 'react-redux';
import {
    changeShowFilter,
    chooseCategoryProducts,
    chooseManufacturersProducts
} from '../../store/catalog/action';
import { useEffect, useState } from 'react';
import { FilterCatalogBig } from '../FilterCatalog/FilterCatalogBig';
import { DropdownCatalog } from '../Dropdown/DropdownCatalog';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import {
    selectCountFilterProducts,
    selectFilterProducts
} from '../../store/catalog/selectors';
import {
    selectCountAdjuvants,
    selectCountAllPpp,
    selectCountDesiccants,
    selectCountFungicides,
    selectCountHerbicides,
    selectCountInsecticides,
    selectCountProtectants,
    selectCountRetardants,
    selectCountRodenticides
} from "../../store/catalog/selectors";
import { DropdownCatalogSort } from '../Dropdown/DropdownCatalogSort';

export const Catalog = ({ title }) => {
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
            name: `${title}`,
            to: "/catalog"
        },
    ];

    let filterProducts = useSelector(selectFilterProducts);
    const countFilterProducts = useSelector(selectCountFilterProducts);

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
    const currentProduct = filterProducts.sort((a, b) => sort === "increase" ? a.price - b.price : sort === "decrease" ? b.price - a.price : "").slice(firstProductIndex, lastProductIndex);

    // функция для нажатия на кружки пагинации
    const paginate = pageNumber => setCurrentPage(pageNumber);

    //Для работы ФИЛЬТРА

    // Массив категорий 
    const categories = [
        { key: "allPpp", name: "Все товары", count: useSelector(selectCountAllPpp) },
        { key: "fungicides", name: "Фунгициды", count: useSelector(selectCountFungicides) },
        { key: "insecticides", name: "Инсектициды", count: useSelector(selectCountInsecticides) },
        { key: "herbicides", name: "Гербициды", count: useSelector(selectCountHerbicides) },
        { key: "desiccants", name: "Десиканты", count: useSelector(selectCountDesiccants) },
        { key: "adjuvants", name: "Адъюванты", count: useSelector(selectCountAdjuvants) },
        { key: "rodenticides", name: "Родентициды", count: useSelector(selectCountRodenticides) },
        { key: "retardants", name: "Ретарданты", count: useSelector(selectCountRetardants) },
        { key: "protectants", name: "Протравители", count: useSelector(selectCountProtectants) },
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

    useEffect(() => {
        if (categoryState) {
            dispatch(chooseCategoryProducts(categoryState, selectedManufacturers))
        } else {
            dispatch(chooseManufacturersProducts(selectedManufacturers))
        }
        if (selected.key) {
            dispatch(chooseCategoryProducts(selected.key, selectedManufacturers))
        }

    }, [categoryState, selectedManufacturers, selected.key,]);

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="catalog">
                <PageHeadingTwice>
                    {title}
                </PageHeadingTwice>
                <div className="catalog-wrap catalog-wrap_top container">
                    <div className="result">Показано {countFilterProducts} товар</div>
                    <DropdownCatalogSort setSort={setSort} />
                </div>
                <div className="wrap-small">
                    <div className="wrap-small_top">
                        <div className="filter-small" onClick={showFilter}>Фильтр
                        </div>
                        <FilterCatalogSmall handleFilterButtonClick={handleFilterButtonClick} />
                        <DropdownCatalogSort setSort={setSort} />
                    </div>
                    <DropdownCatalog
                        categories={categories}
                        selected={selected}
                        setSelected={setSelected}
                        setCategoryState={setCategoryState}
                    />
                    <div className="result">Показано {countFilterProducts} товар</div>
                </div>
                <div className="catalog-wrap container">
                    <FilterCatalogBig
                        handleFilterButtonClick={handleFilterButtonClick}
                        categories={categories}
                        setCategoryState={setCategoryState}
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
                            totalProducts={filterProducts.length}
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