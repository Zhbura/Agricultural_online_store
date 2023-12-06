import "./StarRating.scss";

export const StarRating = ({ arr }) => {

    let totalRating = arr.reduce((prev, current) => (prev + current.rating), 0);
    let countRating = arr.length;

    // Получаем кол-во каждой из оценок
    let countFiveStars = arr.filter((item) => item.rating === 5);
    let countFourStars = arr.filter((item) => item.rating === 4);
    let countThreeStars = arr.filter((item) => item.rating === 3);
    let countTwoStars = arr.filter((item) => item.rating === 2);
    let countOneStars = arr.filter((item) => item.rating === 1);

    // Получаем процентное соотношение каждой из оценок 
    let percentCountFiveStars = Math.round(((countFiveStars.length) / arr.length) * 100);
    let percentCountFourStars = Math.round(((countFourStars.length) / arr.length) * 100);
    let percentCountThreeStars = Math.round(((countThreeStars.length) / arr.length) * 100);
    let percentCountTwoStars = Math.round(((countTwoStars.length) / arr.length) * 100);
    let percentCountOneStars = Math.round(((countOneStars.length) / arr.length) * 100);

    // Высчитываем общую оценку товара из 5 
    let numberRating = (totalRating / countRating).toFixed(2);

    //Высчитываем общую оценку товара в процентах
    let percentRating = Math.round((numberRating / 5) * 100);

    const starsItems = [
        { title: "5 звёзд", percent: percentCountFiveStars, count: countFiveStars.length },
        { title: "4 звезды", percent: percentCountFourStars, count: countFourStars.length },
        { title: "3 звезды", percent: percentCountThreeStars, count: countThreeStars.length },
        { title: "2 звезды", percent: percentCountTwoStars, count: countTwoStars.length },
        { title: "1 звезда", percent: percentCountOneStars, count: countOneStars.length },
    ];

    return (
        <>
            <div className="star-rating">
                <div className="star-rating__wrap-content">
                    <div className="star-rating__content-relative">
                        <span style={{ width: `${percentRating}%` }}
                            className='star-rating__content-absolute'></span>
                    </div>
                </div>
                <p className="star-rating__rating-number">{numberRating} / 5</p>
                <span className="star-rating__line" />
                <div className="star-rating__count-stars">
                    {starsItems.map((item, i) => (
                        <p className="star-rating__item" key={i}>
                            <span>{item.title}</span>
                            <span className="star-rating__line-relative">
                                <span className="star-rating__line-main" />
                                <span style={{ width: `${item.percent}%` }}
                                    className="star-rating__line-absolute" />
                            </span>
                            <span className="star-rating__item-count">{item.count}</span>
                        </p>
                    ))}
                </div>
            </div>

        </>
    )
}