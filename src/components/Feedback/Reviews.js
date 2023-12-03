import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { useSelector } from 'react-redux';
import { selectReviews } from '../../store/reviews/selectors';

export const Reviews = ({ active, addReview, errReviews, to }) => {

    const reviews = useSelector(selectReviews);

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
        </>
    )
}