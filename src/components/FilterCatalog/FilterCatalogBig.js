import { cultures } from "../../productsData";

export const FilterCatalogBig = ({ manufacturers, handleFilterButtonClick, categories, setCategoryState, quantitativeStockClick }) => {
    const quantitativeStock = [10, 11, 12, 13, 14, 15];

    return (
        <>
            <div className="filter-items">
                <div className="filter">
                    <div className="filter__text">
                        {categories.map((item) => (
                            <p key={item.key}
                                onClick={() => { setCategoryState(item.key) }}
                            >{item.name} <span>({item.count})</span></p>
                        ))}
                    </div>
                </div>
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
                    <div className="filter__unit filter__unit_hidden">
                        <div className="filter__heading">Культура </div>
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
                    <div className="filter__unit">
                        <div className="filter__heading">Количество </div>
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
            </div>
        </>
    )
}