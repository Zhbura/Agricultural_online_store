import './BottomBar.scss';
import { Seeds } from '../SVG/Seeds';
import { Sapling } from '../SVG/Sapling';
import { Fertilizers } from '../SVG/Fertilizers';
import { FeedGroup } from '../SVG/FeedGroup';
import { Farmer } from '../SVG/Farmer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Dropdown } from '../Dropdown/Dropdown';

export const BottomBar = () => {
    const [selected, setSelected] = useState('');
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
            to: '/category_plant_protection',
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
            <div className="bottom-bar">
                <div className="container">
                    <Dropdown selected={selected} setSelected={setSelected} options={options} />
                    {options.map(option => (
                        <div className="bottom-bar__item" key={option.id}>
                            <Link to={option.to} className="bottom-bar__link">
                                {option.svg} {option.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}