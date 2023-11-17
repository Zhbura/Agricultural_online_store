import { useDispatch, useSelector } from "react-redux";
import { chooseCategoryProducts } from "../../store/catalog/action";
import { selectCountAdjuvants, selectCountAllPpp, selectCountDesiccants, selectCountFungicides, selectCountHerbicides, selectCountInsecticides, selectCountProtectants, selectCountRetardants, selectCountRodenticides } from "../../store/catalog/selectors";

export const FilterCatalogBig = () => {
    const dispatch = useDispatch();

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
    ]

    const chooseCategory = (category) => {
        dispatch(chooseCategoryProducts(category))
    }

    return (
        <>
            <div className="filter-items">
                <div className="filter">
                    <div className="filter__text">
                        {categories.map((item) => (
                            <p key={item.key}
                                onClick={() => { chooseCategory(item.key) }}
                            >{item.name} <span>({item.count})</span></p>
                        ))}
                    </div>
                </div>
                <div className="filter">
                    <div className="filter__title">Фильтр</div>
                    <div className="filter__unit">
                        <div className="filter__heading">Производитель </div>
                        <label className="input-checkbox">Нертус
                            <input type="checkbox" name="manufacturer" value="nertys" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                        <label className="input-checkbox">Басф
                            <input type="checkbox" name="manufacturer" value="basf" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                        <label className="input-checkbox">Адама Украина
                            <input type="checkbox" name="manufacturer" value="adamaUkraine" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                        <label className="input-checkbox">Байер
                            <input type="checkbox" name="manufacturer" value="bayer" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                        <label className="input-checkbox">ГДЗ
                            <input type="checkbox" name="manufacturer" value="gdz" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                        <label className="input-checkbox">Штефес
                            <input type="checkbox" name="manufacturer" value="stephes" />
                            <span className="checkmark-checkbox"></span>
                        </label>
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
                        <label className="input-checkbox"> 1
                            <input type="checkbox" name="quantity" value="1" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                        <label className="input-checkbox"> 2
                            <input type="checkbox" name="quantity" value="2" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                        <label className="input-checkbox"> 3
                            <input type="checkbox" name="quantity" value="3" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                        <label className="input-checkbox">4
                            <input type="checkbox" name="quantity" value="4" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                        <label className="input-checkbox"> 5
                            <input type="checkbox" name="quantity" value="5" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                        <label className="input-checkbox"> 6
                            <input type="checkbox" name="quantity" value="6" />
                            <span className="checkmark-checkbox"></span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}