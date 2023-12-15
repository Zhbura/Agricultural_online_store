import './Catalog.scss';
import { Pagination } from '../Pagination/Pagination';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { ProductCard } from '../ProductСard/ProductСard';
import { useState } from 'react';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { products } from '../../productsData';

export const Catalog = () => {

    const breadcrumbs = [
        {
            name: "Каталог",
            to: "/Agricultural_online_store/catalog"
        },
    ];

    const countProducts = products.length;

    //Для пагинации
    //стейт для текущей страницы которую нужно отображать
    const [currentPage, setCurrentPage] = useState(1);

    // стейт для количества отображаемых элементов на каждой странице
    const [productsPerPage] = useState(12);

    // индекс последней страницы 5
    const lastProductIndex = currentPage * productsPerPage;

    // индекс первой страницы 0
    const firstProductIndex = lastProductIndex - productsPerPage;

    //текущая страница отображающая на странице и применяемая к ней сортировка по цене товаров
    const currentProduct = products.slice(firstProductIndex, lastProductIndex);

    // функция для нажатия на кружки пагинации
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="catalog">
                <PageHeadingTwice>
                    Все товары
                </PageHeadingTwice>
                <div className="catalog-wrap catalog-wrap_top container">
                    <div className="result">Показано {countProducts} товар</div>
                </div>
                <div className="wrap-small">
                    <div className="result">Показано {countProducts} товар</div>
                </div>
                <div className="catalog-product-wrap">
                    <div className="catalog-product">
                        {currentProduct.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
                <Pagination
                    productsPerPage={productsPerPage}
                    totalProducts={products.length}
                    paginate={paginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div >
        </>
    )
}