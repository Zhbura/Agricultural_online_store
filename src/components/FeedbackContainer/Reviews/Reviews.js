import { PageHeadingTwice } from '../../PageHeading/PageHeading';
import { useSelector } from 'react-redux';
import { selectReviews } from '../../../store/reviews/selectors';
import { StarRating } from '../StarRating/StarRating';
import "./Reviews.scss";

export const Reviews = ({ active, addReview, errReviews, to }) => {

    const reviews = useSelector(selectReviews);

    const stars = [
        { key: 1, content: `★` },
        { key: 2, content: `★` },
        { key: 3, content: `★` },
        { key: 4, content: `★` },
        { key: 5, content: `★` },
    ];
    return (
        <>
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
                                    <div className="reviews__data">
                                        <div className="reviews__name-letter">
                                            <p className="reviews__circle">
                                                <span>{item.name[0]}</span>
                                            </p>
                                        </div>
                                        <h3 className="reviews__name-author">
                                            {item.name} {item.surname[0]}.
                                        </h3>
                                        <p className="reviews__date">{item.date}</p>
                                        <p className="reviews__stars-rating">
                                            {stars.map((star) => (
                                                <span
                                                    className={star.key <= +item.rating ?
                                                        "reviews__star-rating  reviews__star-rating_active" :
                                                        "reviews__star-rating"}
                                                    key={star.key} >
                                                    {star.content}
                                                </span>
                                            ))}
                                        </p>
                                    </div>
                                    <p className="reviews__text-comment">{item.text}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="reviews_right">
                        {reviews[to] === undefined ? null :
                            <StarRating arr={reviews[to]} />}
                        <div className="reviews__btn">
                            <button
                                className="product-btn product-btn_orange"
                                onClick={() => addReview()} >
                                Добавить отзыв
                            </button>
                            {errReviews && <p className="reviews__text-err">
                                Извините, но отзывы могут оставлять только те, кто
                                купил товар. Так мы формируем честный рейтинг. </p>}
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}