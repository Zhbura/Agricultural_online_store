import { useState } from "react";
import { ArrowCheckbox } from "../SVG/ArrowCheckbox/ArrowCheckbox";

export const DropdownCatalog = ({ selected, setSelected, categories }) => {
    const [isActive, setIsActive] = useState(false);

    const [initialValue, setInitialValue] = useState(true);

    return (
        <>
            <div className="dropdown-catalog">
                <div className={isActive ? "dropdown-catalog__wrap" : ""}>
                    <div className="dropdown-catalog__btn" onClick={() => setIsActive(!isActive)}>
                        {!initialValue && <p>{selected.name} <span>({selected.count})</span></p>}
                        {initialValue && <p>{categories[0].name} <span>({categories[0].count})</span></p>}
                        <span className="dropdown-catalog__line" />
                        <p className={isActive ? "svg-up" : ""}><ArrowCheckbox /></p>
                    </div>
                    {isActive && (
                        <div className="dropdown-catalog__content">
                            {categories.map(option => (
                                <div className="dropdown-catalog__item" key={option.key}
                                    onClick={() => {
                                        setSelected(option);
                                        setIsActive(false);
                                        setInitialValue(false);
                                    }}
                                >
                                    <p>{option.name} <span>({option.count})</span> </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}