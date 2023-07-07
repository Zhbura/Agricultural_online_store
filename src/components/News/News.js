import './News.scss';
import newsImg from '../../img/news1.png';
import newsImg2 from '../../img/news2.png';
import newsImg4 from '../../img/news4.png';
import newsImg5 from '../../img/news5.png';
import newsImg6 from '../../img/news6.png';
import { Pagination } from '../Pagination/Pagination';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { ArrowCheckbox } from '../SVG/ArrowCheckbox/ArrowCheckbox';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';

export const News = () => {
    const breadcrumbs = [
        {
            name: "Новости",
            to: "/news"
        },
    ];
    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <PageHeadingTwice>Новости</PageHeadingTwice>
            <div className="news">
                <div className="news__items">
                    <div className="news__item">
                        <img className="news__img" src={newsImg} alt="Новости компании" />
                        <div className="news__date">20.01.2022</div>
                        <h4 className="news__heading">Доставка " Укрпочта Экспресс»</h4>
                        <p className="news__text">Для того, чтобы можно было рассмотреть вопрос о ремонте или
                            компенсации, или обмене, или возврате товара необходимо, чтобы были выполнены следующие
                            условия:</p>
                        <p className="news__link arrow-checkbox_right">Подробнее<ArrowCheckbox /></p>
                    </div>
                    <div className="news__item">
                        <img className="news__img" src={newsImg2} alt="Новости компании" />
                        <div className="news__date">20.01.2022</div>
                        <h4 className="news__heading">Доставка " Укрпочта Экспресс»</h4>
                        <p className="news__text">Для того, чтобы можно было рассмотреть вопрос о ремонте или
                            компенсации, или обмене, или возврате товара необходимо, чтобы были выполнены следующие
                            условия:</p>
                        <p className="news__link arrow-checkbox_right">Подробнее<ArrowCheckbox /></p>
                    </div>
                    <div className="news__item">
                        <img className="news__img" src={newsImg} alt="Новости компании" />
                        <div className="news__date">20.01.2022</div>
                        <h4 className="news__heading">Доставка " Укрпочта Экспресс»</h4>
                        <p className="news__text">Для того, чтобы можно было рассмотреть вопрос о ремонте или
                            компенсации, или обмене, или возврате товара необходимо, чтобы были выполнены следующие
                            условия:</p>
                        <p className="news__link arrow-checkbox_right">Подробнее<ArrowCheckbox /></p>
                    </div>
                    <div className="news__item">
                        <img className="news__img" src={newsImg4} alt="Новости компании" />
                        <div className="news__date">20.01.2022</div>
                        <h4 className="news__heading">Доставка " Укрпочта Экспресс»</h4>
                        <p className="news__text">Для того, чтобы можно было рассмотреть вопрос о ремонте или
                            компенсации, или обмене, или возврате товара необходимо, чтобы были выполнены следующие
                            условия:</p>
                        <p className="news__link arrow-checkbox_right">Подробнее<ArrowCheckbox /></p>
                    </div>
                    <div className="news__item">
                        <img className="news__img" src={newsImg5} alt="Новости компании" />
                        <div className="news__date">20.01.2022</div>
                        <h4 className="news__heading">Доставка " Укрпочта Экспресс»</h4>
                        <p className="news__text">Для того, чтобы можно было рассмотреть вопрос о ремонте или
                            компенсации, или обмене, или возврате товара необходимо, чтобы были выполнены следующие
                            условия:</p>
                        <p className="news__link arrow-checkbox_right">Подробнее<ArrowCheckbox /></p>
                    </div>
                    <div className="news__item">
                        <img className="news__img" src={newsImg6} alt="Новости компании" />
                        <div className="news__date">20.01.2022</div>
                        <h4 className="news__heading">Доставка " Укрпочта Экспресс»</h4>
                        <p className="news__text">Для того, чтобы можно было рассмотреть вопрос о ремонте или
                            компенсации, или обмене, или возврате товара необходимо, чтобы были выполнены следующие
                            условия:</p>
                        <p className="news__link arrow-checkbox_right">Подробнее<ArrowCheckbox /></p>
                    </div>
                </div>
                <Pagination />
            </div>
        </>
    )
}