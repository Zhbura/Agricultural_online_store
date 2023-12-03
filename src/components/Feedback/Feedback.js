import { useState } from 'react';
import './Feedback.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectReviews } from '../../store/reviews/selectors';
import { addReviewProduct } from '../../store/reviews/actions';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { selectHistoryOrders } from '../../store/orderProducts/selectors';
import { selectUserOrder } from '../../store/order/selectors';

export const Feedback = ({ active, to }) => {

    const { name } = useSelector(selectUserOrder);
    const { surname } = useSelector(selectUserOrder);
    const [textReview, setTextReview] = useState('');

    const dispatch = useDispatch();

    const dateReview = new Date();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addReviewProduct(to, name, surname, textReview, dateReview))
        setTextReview("");
    }

    const reviews = useSelector(selectReviews);
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
                <div className={active ? "reviews" : "reviews reviews_active"}>
                    <PageHeadingTwice>Отзывы покупателей.</PageHeadingTwice>
                    <div className="wrap-reviews">
                        <div className="reviews_left">
                            {reviews[to] === undefined ?
                                <h3 className="reviews__heading">
                                    На данный товар пока нет отзывов.</h3> :
                                reviews[to].map((item, i) => (
                                    <div className="reviews__item"
                                        key={i}>
                                        <div>
                                            <div className="reviews__name">
                                                <div><p className="reviews__circle"><span>{item.name[0]}</span></p></div>
                                                <h3 className="reviews__name-author">{item.name} {item.surname[0]}.</h3>
                                            </div>
                                            <p className="reviews__text">{item.text}</p>
                                        </div>
                                        <p className="reviews__date">{item.date}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="reviews_right">
                            <button
                                className="product-btn product-btn_orange"
                                onClick={() => addReview()}
                            >
                                Добавить отзыв
                            </button>
                            {errReviews && <p className="reviews__text-err"> Извините, но отзывы могут оставлять только те, кто
                                купил товар. Так мы формируем честный рейтинг. </p>}
                        </div>
                    </div>
                </div >

                : (
                    <div className="feedback">
                        <form className="feedback__form"
                            onSubmit={handleSubmit} >
                            <input
                                className="feedback__input feedback__review"
                                type="text"
                                placeholder="Отзыв"
                                value={textReview}
                                onChange={(e) => setTextReview(e.target.value)}
                            />
                            <div className="feedback__btn">
                                <button
                                    className="product-btn product-btn_orange">
                                    Добавить отзыв
                                </button>
                            </div>
                        </form>
                        <div className="feedback__btn">
                            <button className="product-btn product-btn_orange"
                                onClick={() => setFormActive(false)}
                            >
                                Вернуться к отзывам
                            </button>
                        </div>
                    </div>
                )
            }
        </>
    )
}