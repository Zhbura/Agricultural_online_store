import './Dropdown.scss';
import { Link } from 'react-router-dom';
import { Seeds } from '../SVG/Seeds';
import { useState } from 'react';
import { ArrowCheckbox } from '../SVG/ArrowCheckbox/ArrowCheckbox';
import { ArrowCheckboxUp } from '../SVG/ArrowCheckbox/ArrowCheckbox';
import { Fertilizers } from '../SVG/Fertilizers';
import { Farmer } from '../SVG/Farmer';
import { FeedGroup } from '../SVG/FeedGroup';
import { Sapling } from '../SVG/Sapling';

export const Dropdown = ({ selected, setSelected }) => {
    const [isActive, setIsActive] = useState(false);
    const [initialValue, setInitialValue] = useState(true);

    const options = [
        {
            id: 1,
            name: "Семена",
            svg: <Seeds />,
            to: '/catalog_seeds'
        },
        {
            id: 2,
            name: "Средства защиты растений",
            svg: <Sapling />,
            to: '/plantprotection',
        },
        {
            id: 3,
            name: "Удобрения",
            svg: <Fertilizers />,
            to: '/catalog_fertilizers',
        },
        {
            id: 4,
            name: "Кормовая группа",
            svg: <FeedGroup />,
            to: '/catalog_feed_group',
        },
        {
            id: 5,
            name: "Агроному в помощь",
            svg: <Farmer />,
            to: '/catalog_farmer_help',
        },
    ];
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