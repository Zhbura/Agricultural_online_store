import { useDispatch, useSelector } from "react-redux";
import { selectUserOrder } from "../../store/order/selectors";
import { useState } from "react";
import { addReviewProduct } from "../../store/reviews/actions";

export const FeedbackForm = ({ setFormActive, to }) => {

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
    return (
        <>
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
        </>
    )
}