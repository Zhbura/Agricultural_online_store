import { useState } from "react"
import { ArrowCheckbox, ArrowCheckboxUp } from "../SVG/ArrowCheckbox/ArrowCheckbox"

export const DropdownCart = ({ selected, setSelected }) => {
    const [isActive, setIsActive] = useState(false);
    const [initialValue, setInitialValue] = useState(true);

    const options = [
        {
            id: 1,
            title: "Канистра 1 л"
        },
        {
            id: 2,
            title: "Канистра 3 л"
        },
        {
            id: 3,
            title: "Канистра 5 л"
        },
    ]
    return (
        <>
            <div className="dropdown-cart">
                <div className="dropdown-cart__btn arrow-checkbox_orange" onClick={() => setIsActive(!isActive)}>
                    {selected.title}
                    {initialValue && 'Канистра 5 л'}
                    {isActive ? <ArrowCheckboxUp /> : <ArrowCheckbox />}
                </div>
                {isActive &&
                    <div className="dropdown-cart__content">
                        {options.map(option => (
                            <div className="dropdown-cart__item" key={option.id}
                                onClick={() => {
                                    setSelected(option);
                                    setIsActive(false);
                                    setInitialValue(false);
                                }}
                            >
                                {option.title}
                            </div>
                        ))}
                    </div>
                }
            </div>
        </>
    )
}