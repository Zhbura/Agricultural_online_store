import { useDispatch, useSelector } from "react-redux";
import { selectUserOrder } from "../../../store/order/selectors";
import { useState } from "react";
import { addReviewProduct } from "../../../store/reviews/actions";
import { MsgAdded } from "./MsgAdded";
import "./Feedback.scss";

export const Feedback = ({ setFormActive, to }) => {

    const { name } = useSelector(selectUserOrder);
    const { surname } = useSelector(selectUserOrder);
    const [textReview, setTextReview] = useState('');

    const dispatch = useDispatch();

    const dateReview = new Date();

    const [rating, setRaiting] = useState(0);
    const [hover, setHover] = useState(0);
    const stars = [`★`, `★`, `★`, `★`, `★`];

    const [errMsg, setErrMsg] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (rating > 0) {
            dispatch(addReviewProduct(to, name, surname, textReview, dateReview, rating))
            showMsgAdded();
        } else {
            setErrMsg(true)
        }
        setTextReview("");
    }

    const [msgAdded, setMsgAdded] = useState(false);

    const showMsgAdded = () => {
        let timeout;


        timeout = setTimeout(() => {
            setMsgAdded(true)
        }, 1500)
        return () => clearTimeout(timeout)
    }
    return (
        <>
            <div className="feedback">
                {!msgAdded && <form className="feedback__form"
                    onSubmit={handleSubmit} >
                    <div className="feedback__rating">
                        {stars.map((star, index) => {
                            index += 1;
                            return (
                                <span key={index}
                                    className={index <= (hover || rating) ?
                                        "feedback__rating-star feedback__rating-star_active" :
                                        "feedback__rating-star"}
                                    onClick={() => {
                                        setRaiting(index)
                                        setErrMsg(false)
                                    }}
                                    onMouseEnter={() => setHover(index)}
                                    onMouseLeave={() => setHover(rating)}
                                >{star}
                                </span>
                            )
                        })}
                        <p className="feedback__text">Оцените покупку.</p>
                    </div>
                    {errMsg && <p className="feedback__err-msg">Вы забыли оценить покупку.</p>}
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
                </form>}
                {msgAdded && <MsgAdded />}
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