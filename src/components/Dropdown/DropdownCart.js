import { useState } from "react"
import { ArrowCheckbox, ArrowCheckboxUp } from "../SVG/ArrowCheckbox/ArrowCheckbox"

export const DropdownCart = ({ selected, setSelected, options }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div className="dropdown-cart">
                <div className="dropdown-cart__btn arrow-checkbox_orange" onClick={() => setIsActive(!isActive)
                }>
                    {selected}
                    {isActive ? <ArrowCheckboxUp /> : <ArrowCheckbox />}
                </div>
                {isActive &&
                    <div className="dropdown-cart__content">
                        {options.map((option, i) => (
                            <div className="dropdown-cart__item" key={i}
                                onClick={() => {
                                    setSelected(option);
                                    setIsActive(false);
                                }}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                }
            </div>
        </>
    )
}