import { useState } from 'react';
import './FilterCatalog.scss';
import { Arrow } from '../SVG/Arrow/Arrow';
import { useDispatch, useSelector } from 'react-redux';
import { selectShowFilter } from '../../store/catalog/selectors';
import { changeShowFilter } from '../../store/catalog/action';

export const FilterCatalogSmall = () => {
    const [fabricator, setFabricator] = useState(false);
    const [culture, setCulture] = useState(false);
    const [quantity, setQuantity] = useState(false);

    const showFilter = useSelector(selectShowFilter);

    const dispatch = useDispatch();

    const hideFilter = () => {
        dispatch(changeShowFilter);
    };
    return (
        <>
            <div className={showFilter ? "filter-catalog" : "filter-catalog filter-catalog_active"}>
                <div className="filter-catalog__title arrow_white" onClick={hideFilter}><Arrow />Фильтр</div>
                <div className="filter__units">
                    <div className="filter__unit">
                        <div className="filter__heading menu-catalog__heading" onClick={() => setFabricator(!fabricator)}>Производитель </div>
                        <div className={fabricator ? 'filter__part' : 'filter__part_notActive'}>
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
                    </div>
                    <div className="filter__unit">
                        <div className="filter__heading menu-catalog__heading" onClick={() => setCulture(!culture)}>Культура </div>
                        <div className={culture ? 'filter__part' : 'filter__part_notActive'}>
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
                    </div>
                    <div className="filter__unit">
                        <div className="filter__heading menu-catalog__heading" onClick={() => setQuantity(!quantity)}>Количество </div>
                        <div className={quantity ? 'filter__part' : 'filter__part_notActive'}>
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
                    <div className="filter__btn">Применить</div>
                </div>
            </div >
        </>
    )
}