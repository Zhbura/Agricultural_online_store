import { useState } from "react"
import { ArrowCheckbox, ArrowCheckboxUp } from "../SVG/ArrowCheckbox/ArrowCheckbox"

export const DropdownCatalog = ({ selected, setSelected }) => {
    const [isActive, setIsActive] = useState(false);

    const [initialValue, setInitialValue] = useState(true);

    const options = [
        {
            id: 1,
            name: <p>Гербициды <span>(229)</span></p>,
        },
        {
            id: 2,
            name: <p>Фунгициды <span>(9)</span></p>,
        },
        {
            id: 3,
            name: <p>Инсектициды <span>(209)</span></p>,
        },
        {
            id: 4,
            name: <p>Протравители <span>(215)</span></p>,
        },
        {
            id: 5,
            name: <p>Адъюванты <span>(410)</span></p>,
        },
        {
            id: 6,
            name: <p>Родентициды <span>(30)</span></p>,
        },
        {
            id: 7,
            name: <p>Ретарданты <span>(229)</span></p>,
        },
    ];
    return (
        <>
            <div className="dropdown-catalog">
                <div className={isActive ? "dropdown-catalog__wrap" : ""}>
                    <div className="dropdown-catalog__btn" onClick={() => setIsActive(!isActive)}>
                        {selected.name}
                        {initialValue && <p>Гербициды <span>(229)</span></p>}
                        <span className="dropdown-catalog__line" />
                        {isActive ? <ArrowCheckboxUp /> : <ArrowCheckbox />}
                    </div>
                    {isActive && (
                        <div className="dropdown-catalog__content">
                            {options.map(option => (
                                <div className="dropdown-catalog__item" key={option.id}
                                    onClick={() => {
                                        setSelected(option);
                                        setIsActive(false);
                                        setInitialValue(false);
                                    }}
                                >
                                    {option.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}