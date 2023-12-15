import './News.scss';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { ArrowCheckbox } from '../SVG/ArrowCheckbox/ArrowCheckbox';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';

export const News = () => {
    const breadcrumbs = [
        {
            name: "Новости",
            to: "/Agricultural_online_store/news"
        },
    ];

    const news = [
        {
            id: 1,
            img: require("../../img/news1.png"),
            title: `Доставка "Молния Экспресс"`,
            content: "Для того, чтобы можно было рассмотреть вопрос о ремонте или компенсации, или обмене, или возврате товара необходимо, чтобы были выполнены следующие условия:"
        },
        {
            id: 2,
            img: require("../../img/news2.png"),
            title: `Доставка "Молния Экспресс"`,
            content: "Для того, чтобы можно было рассмотреть вопрос о ремонте или компенсации, или обмене, или возврате товара необходимо, чтобы были выполнены следующие условия:"
        },
        {
            id: 3,
            img: require("../../img/news4.png"),
            title: `Доставка "Молния Экспресс"`,
            content: "Для того, чтобы можно было рассмотреть вопрос о ремонте или компенсации, или обмене, или возврате товара необходимо, чтобы были выполнены следующие условия:"
        },
        {
            id: 4,
            img: require("../../img/news5.png"),
            title: `Доставка "Молния Экспресс"`,
            content: "Для того, чтобы можно было рассмотреть вопрос о ремонте или компенсации, или обмене, или возврате товара необходимо, чтобы были выполнены следующие условия:"
        },
        {
            id: 5,
            img: require("../../img/news6.png"),
            title: `Доставка "Молния Экспресс"`,
            content: "Для того, чтобы можно было рассмотреть вопрос о ремонте или компенсации, или обмене, или возврате товара необходимо, чтобы были выполнены следующие условия:"
        },
        {
            id: 6,
            img: require("../../img/news1.png"),
            title: `Доставка "Молния Экспресс"`,
            content: "Для того, чтобы можно было рассмотреть вопрос о ремонте или компенсации, или обмене, или возврате товара необходимо, чтобы были выполнены следующие условия:"
        },
    ];
    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <PageHeadingTwice>Новости</PageHeadingTwice>
            <div className="news">
                <div className="news__items">
                    {news.map((item) => (
                        <div className="news__item" key={item.id}>
                            <img className="news__img" src={item.img} alt="Новости компании" />
                            <div className="news__date">20.01.2022</div>
                            <h4 className="news__heading">{item.title}</h4>
                            <p className="news__text">{item.content}</p>
                            <button className="news__link arrow-checkbox_right">Подробнее<ArrowCheckbox /></button>
                        </div>
                    ))}
                </div>                
                <div className="pagination">
                    <div className="pagination__circle-icon arrow-checkbox_orange pagination__circle-icon_arrowLeft">
                        <ArrowCheckbox />
                    </div>
                    <div className="pagination__circle-icon pagination__circle-icon_active">
                        <span>1</span>
                    </div>
                    <div className="pagination__circle-icon arrow-checkbox_orange pagination__circle-icon_arrowRight ">
                        <ArrowCheckbox />
                    </div>
                </div>
            </div>
        </>
    )
}