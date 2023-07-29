import './Dropdown.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowCheckbox } from '../SVG/ArrowCheckbox/ArrowCheckbox';
import { ArrowCheckboxUp } from '../SVG/ArrowCheckbox/ArrowCheckbox';

export const Dropdown = ({ options, selected, setSelected }) => {
    const [isActive, setIsActive] = useState(false);
    const [initialValue, setInitialValue] = useState(true);

    return (
        <>
            <div className="dropdown-bar">
                <div className={isActive ? "dropdown-bar__wrap" : ""}>
                    <div className="dropdown-bar__btn" onClick={(e) => setIsActive(!isActive)}>
                        {selected.svg}
                        {selected.name}
                        {initialValue && 'Перейти на страницу...'}
                        {isActive ? <ArrowCheckboxUp /> : <ArrowCheckbox />}
                    </div>
                    {isActive && (
                        <div className="dropdown-bar__content">
                            {options.map(option => (
                                <div className="dropdown-bar__item" key={option.id}
                                    onClick={(e) => {
                                        setSelected(option);
                                        setInitialValue(false);
                                        setIsActive(false);
                                    }}>
                                    <Link to={option.to} className="dropdown-bar__link">{option.svg} {option.name} </Link>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}