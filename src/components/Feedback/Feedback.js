import './Feedback.scss';

export const Feedback = ({ active }) => {
    return (
        <>
            <div className={active ? "feedback" : "feedback feedback_active"}>
                <div className="feedback__contact-details">
                    <input className="feedback__input feedback__input-name" type="text" placeholder="Имя" />
                    <input className="feedback__input feedback__input-mail" type="mail" placeholder="Почта" />
                </div>
                <input className="feedback__input feedback__review" type="text" placeholder="Отзыв" />
                <div className="feedback__btn">
                    <div className="product-btn product-btn_orange">
                        Добавить отзыв
                    </div>
                </div>
            </div>
        </>
    )
}