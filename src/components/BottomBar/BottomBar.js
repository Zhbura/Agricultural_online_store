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

    return (
        <>
            <div className="bottom-bar">
                <div className="container">
                    <Dropdown selected={selected} setSelected={setSelected} />
                    <div className="bottom-bar__item">
                        <Link to="/catalog_seeds" className="bottom-bar__link">
                            <Seeds /> Семена
                        </Link>
                    </div>
                    <div className="bottom-bar__item">
                        <Link to='/plantprotection' className="bottom-bar__link">
                            <Sapling />
                            Средства защиты растений
                        </Link>
                    </div>
                    <div className="bottom-bar__item">
                        <Link to="/catalog_fertilizers" className="bottom-bar__link">
                            <Fertilizers />
                            Удобрения
                        </Link>
                    </div>
                    <div className="bottom-bar__item">
                        <Link to="/catalog_feed_group" className="bottom-bar__link">
                            <FeedGroup />
                            Кормовая группа
                        </Link>
                    </div>
                    <div className="bottom-bar__item">
                        <Link to="/catalog_farmer_help" className="bottom-bar__link">
                            <Farmer />
                            Агроному в помощь
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}