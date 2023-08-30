import { useEffect, useState } from 'react';
import { ArrowCheckbox } from '../SVG/ArrowCheckbox/ArrowCheckbox';
import './Dropdown.scss';

export const DropdownOrder = ({ array, selected, setSelected, initialValue }) => {

    const [isActive, setIsActive] = useState(false);

    const [showInitVal, setShowInitVal] = useState(true);

    useEffect(() => {
        setSelected(selected)
    }, [selected])
    return (
        <>
            <div className="dropdown-order">
                <div className="dropdown-order__btn arrow-checkbox_orange"
                    onClick={() => setIsActive(!isActive)} >
                    {selected}
                    {showInitVal && initialValue}
                    <p className={isActive ? "svg-up" : ""}><ArrowCheckbox /></p>
                </div>
                {isActive &&
                    <div className="dropdown-order__content">
                        {array.map((arr, i) => (
                            <div className="dropdown-order__item" key={i}
                                onClick={() => {
                                    setSelected(arr);
                                    setIsActive(false);
                                    setShowInitVal(false);
                                }}>
                                {arr}
                            </div>
                        ))}
                    </div>
                }
            </div>
        </>
    )
}