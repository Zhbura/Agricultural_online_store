import { useState } from 'react';
import { Description } from '../Description/Description';
import { FeedbackContainer } from '../FeedbackContainer/FeedbackContainer';
import './Details.scss';

export const Details = ({ name, to }) => {
    const [active, setActive] = useState(true);

    return (
        <>
            <div className="details">
                <div className="details__title">
                    <p
                        className={active ? "details__link details__link_active" : "details__link"}
                        onClick={() => setActive(true)}>Описание
                    </p>
                    <p
                        className={active ? "details__link" : "details__link details__link_active"}
                        onClick={() => setActive(false)}>Отзывы
                    </p>
                </div>
                <Description
                    active={active}
                    name={name}
                />
                <FeedbackContainer
                    active={active}
                    to={to}
                />
            </div>
        </>
    )
}