import { manufacturers } from "../../productsData";

export const FilterCatalogBig = ({ handleFilterButtonClick, categories, setCategoryState, quantitativeStockClick }) => {
    const quantitativeStock = [10, 11, 12, 13, 14, 15]
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
                    <div className="filter__unit">
                        <div className="filter__heading">Культура </div>
                        <label className="input-checkbox">Подсолнечник
                            <input type="checkbox" name="culture" value="sunflower" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                        <label className="input-checkbox">Кукуруза
                            <input type="checkbox" name="culture" value="corn" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                        <label className="input-checkbox">Пшеница
                            <input type="checkbox" name="culture" value="wheat" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                        <label className="input-checkbox">Ячмень
                            <input type="checkbox" name="culture" value="barley" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                        <label className="input-checkbox">Рапс
                            <input type="checkbox" name="culture" value="rapeseed" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                        <label className="input-checkbox">Соя
                            <input type="checkbox" name="culture" value="soy" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                        <label className="input-checkbox">Горох
                            <input type="checkbox" name="culture" value="peas" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                        <label className="input-checkbox">Бобы
                            <input type="checkbox" name="culture" value="pea" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                        <label className="input-checkbox">Горчица
                            <input type="checkbox" name="culture" value="mustard" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                        <label className="input-checkbox"> Горошек
                            <input type="checkbox" name="culture" value="polkaDots" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                        <label className="input-checkbox">Житняк
                            <input type="checkbox" name="culture" value="breadbasket" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                        <label className="input-checkbox">Фасоль
                            <input type="checkbox" name="culture" value="beans" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                        <label className="input-checkbox"> Клевер
                            <input type="checkbox" name="culture" value="clover" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                        <label className="input-checkbox">Кострец/Овсяница
                            <input type="checkbox" name="culture" value="kostrets/ovsanitsa" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                        <label className="input-checkbox">Тимофеевка
                            <input type="checkbox" name="culture" value="timofeevka" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                        <label className="input-checkbox">Тритикале
                            <input type="checkbox" name="culture" value="triticale" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                        <label className="input-checkbox"> Сахарная свекла
                            <input type="checkbox" name="culture" value="" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                        <label className="input-checkbox">Кормовая свекла
                            <input type="checkbox" name="culture" value="sugarBeet" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                        <label className="input-checkbox"> Другое
                            <input type="checkbox" name="culture" value="other" />
                            <span className="checkmark-checkbox"></span>
                        </label>
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