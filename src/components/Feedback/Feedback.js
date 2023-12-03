import { useState } from 'react';
import './Feedback.scss';
import { useSelector } from 'react-redux';
import { selectHistoryOrders } from '../../store/orderProducts/selectors';
import { Reviews } from './Reviews';
import { FeedbackForm } from './FeedbackForm';

export const Feedback = ({ active, to }) => {

    const historyOrdersProducts = useSelector(selectHistoryOrders);

    const [formActive, setFormActive] = useState(false);
    const [errReviews, setErrReviews] = useState(false);

    const addReview = () => {
        let product = historyOrdersProducts.findIndex(item => item.to === to);
        if (product === -1) {
            setErrReviews(true)
        } else {
            setFormActive(true)
        }
    }
    return (
        <>
            {!formActive ?
                <Reviews
                    active={active}
                    addReview={addReview}
                    errReviews={errReviews}
                    to={to}
                />
                : (
                    <FeedbackForm
                        setFormActive={setFormActive}
                        to={to}
                    />
                )
            }
        </>
    )
}