import { useEffect, useState } from "react"
import { ArrowCheckbox, ArrowCheckboxUp } from "../SVG/ArrowCheckbox/ArrowCheckbox"
import { useDispatch } from "react-redux";
import { changePriceFor } from "../../store/cart/action";

export const DropdownCart = ({ selected, setSelected, options, id }) => {
    const [isActive, setIsActive] = useState(false);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changePriceFor(id, selected))
    }, [selected])

    return (
        <>
            <div className="dropdown-cart">
                <div className="dropdown-cart__btn arrow-checkbox_orange"
                    onClick={() => setIsActive(!isActive)}>
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