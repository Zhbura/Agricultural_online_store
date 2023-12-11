import { useState } from "react";
import { ArrowCheckbox } from "../SVG/ArrowCheckbox/ArrowCheckbox";

export const DropdownCatalogSort = ({ setSort }) => {
    const sort = [
        { key: "increase", name: "По возрастанию цены" },
        { key: "decrease", name: "По убыванию цены" }
    ];

    const [isActive, setIsActive] = useState(false);
    const [initialValue, setInitialValue] = useState(true);
    const [selected, setSelected] = useState('');

    return (
        <>
            <div className="dropdown-sort">
                <div className="dropdown-sort__btn arrow-checkbox_grey"
                    onClick={() => setIsActive(!isActive)} >
                    {!initialValue && <p>{selected}</p>}
                    {initialValue && <p>Сортировать по</p>}
                    <span />
                    <p className={isActive ? "svg-up" : ""}> <ArrowCheckbox /></p>
                </div>
                {isActive &&
                    <div className="dropdown-sort__content">
                        {sort.map((item) => (
                            <div className="dropdown-sort__item"
                                key={item.key}
                                onClick={() => {
                                    setIsActive(false);
                                    setInitialValue(false);
                                    setSelected(item.name);
                                    setSort(item.key)
                                }}>
                                {item.name}
                            </div>
                        ))}
                    </div>}
            </div>
        </>
    )
}