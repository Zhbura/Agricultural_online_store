import './BottomBar.scss';
import { Seeds } from '../SVG/Seeds';
import { Sapling } from '../SVG/Sapling';
import { Fertilizers } from '../SVG/Fertilizers';
import { FeedGroup } from '../SVG/FeedGroup';
import { Farmer } from '../SVG/Farmer';
import { ArrowDownMenu } from '../SVG/ArrowMenu/ArrowDownMenu';

export const BottomBar = () => {
    return (
        <>
            <div className="bottom-bar">
                <div className="container">
                    <div className="bottom-bar__item">
                        <p className="bottom-bar__link">
                            <Seeds />
                            Семена
                        </p>
                        <div className="bottom-bar__menu" ><ArrowDownMenu /></div>
                    </div>
                    <div className="bottom-bar__item">
                        <p className="bottom-bar__link">
                            <Sapling />
                            Средства защиты растений
                        </p>
                    </div>
                    <div className="bottom-bar__item">
                        <p className="bottom-bar__link">
                            <Fertilizers />
                            Удобрения
                        </p>
                    </div>
                    <div className="bottom-bar__item">
                        <p className="bottom-bar__link">
                            <FeedGroup />
                            Кормовая группа
                        </p>
                    </div>
                    <div className="bottom-bar__item">
                        <p className="bottom-bar__link">
                            <Farmer />
                            Агроному в помощь
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}