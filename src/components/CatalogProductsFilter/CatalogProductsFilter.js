import './CatalogProductsFilter.scss';
import { ProductCard } from '../ProductСard/ProductСard';
import { selectSearchProducts } from '../../store/search/selectors';
import { useSelector } from 'react-redux';

export const CatalogProductsFilter = () => {
    const filterProducts = useSelector(selectSearchProducts);

    return (
        <>
            <div className="catalog-filter">
                {(filterProducts.length === 0) ?
                    <h3 className="catalog-filter__text">Извините по вашему запросу ни чего не найдено!</h3> :
                    <h3 className="catalog-filter__text">По вашему запросу найдено...</h3>}
                <div className="catalog-product">
                    {filterProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}