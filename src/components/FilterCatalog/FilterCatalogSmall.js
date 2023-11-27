import { useState } from 'react';
import './FilterCatalog.scss';
import { Arrow } from '../SVG/Arrow/Arrow';
import { useDispatch, useSelector } from 'react-redux';
import { selectShowFilter } from '../../store/catalog/selectors';
import { changeShowFilter } from '../../store/catalog/action';
import { manufacturers } from "../../productsData";
import { cultures } from "../../productsData";

export const FilterCatalogSmall = ({ handleFilterButtonClick, quantitativeStockClick }) => {
    const [fabricator, setFabricator] = useState(false);
    const [culture, setCulture] = useState(false);
    const [quantity, setQuantity] = useState(false);

    const showFilter = useSelector(selectShowFilter);

    const dispatch = useDispatch();

    const hideFilter = () => {
        dispatch(changeShowFilter);
    };

    const quantitativeStock = [10, 11, 12, 13, 14, 15];

    return (
        <>
            <div className={showFilter ? "filter-catalog filter-catalog_active" : "filter-catalog"}>
                <div className="filter-catalog__title arrow_white" onClick={hideFilter}><Arrow />Фильтр</div>
                <div className="filter__units">
                    <div className="filter__unit">
                        <div className="filter__heading menu-catalog__heading" onClick={() => setFabricator(!fabricator)}>Производитель </div>
                        <div className={fabricator ? 'filter__part' : 'filter__part_notActive'}>
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
                    </div>
                    <div className="filter__unit">
                        <div className="filter__heading menu-catalog__heading" onClick={() => setCulture(!culture)}>Культура </div>
                        <div className={culture ? 'filter__part' : 'filter__part_notActive'}>
                            {cultures.map((culture) => (
                                <label key={culture.key}
                                    className="input-checkbox"
                                > {culture.name}
                                    <input
                                        type="checkbox"
                                        name="culture"
                                        value={culture.key}
                                    />
                                    <span className="checkmark-checkbox" />
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="filter__unit">
                        <div className="filter__heading menu-catalog__heading" onClick={() => setQuantity(!quantity)}>Количество </div>
                        <div className={quantity ? 'filter__part' : 'filter__part_notActive'}>
                            {quantitativeStock.map((number) => (
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
                    <div className="filter__btn" onClick={hideFilter}>Применить</div>
                </div>
            </div >
        </>
    )
}