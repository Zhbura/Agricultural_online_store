import './News.scss';
import newsImg from '../../img/news1.png';
import newsImg2 from '../../img/news2.png';
import newsImg4 from '../../img/news4.png';
import newsImg5 from '../../img/news5.png';
import newsImg6 from '../../img/news6.png';
import { Pagination } from '../Pagination/Pagination';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { ArrowCheckbox } from '../SVG/ArrowCheckbox/ArrowCheckbox';

export const News = () => {
    return (
        <>
            <PageHeadingTwice>Новости</PageHeadingTwice>
            <div className="news">
                <div className="news__items">
                    <div className="news__item">
                        <img className="news__img" src={newsImg} />
                        <div className="news__date">20.01.2022</div>
                        <h4 className="news__heading">Доставка " Укрпочта Экспресс»</h4>
                        <p className="news__text">Для того, чтобы можно было рассмотреть вопрос о ремонте или
                            компенсации, или обмене, или возврате товара необходимо, чтобы были выполнены следующие
                            условия:</p>
                        <a className="news__link arrow-checkbox_right">Подробнее<ArrowCheckbox /></a>
                    </div>
                    <div className="news__item">
                        <img className="news__img" src={newsImg2} />
                        <div className="news__date">20.01.2022</div>
                        <h4 className="news__heading">Доставка " Укрпочта Экспресс»</h4>
                        <p className="news__text">Для того, чтобы можно было рассмотреть вопрос о ремонте или
                            компенсации, или обмене, или возврате товара необходимо, чтобы были выполнены следующие
                            условия:</p>
                        <a className="news__link arrow-checkbox_right">Подробнее<ArrowCheckbox /></a>
                    </div>
                    <div className="news__item">
                        <img className="news__img" src={newsImg} />
                        <div className="news__date">20.01.2022</div>
                        <h4 className="news__heading">Доставка " Укрпочта Экспресс»</h4>
                        <p className="news__text">Для того, чтобы можно было рассмотреть вопрос о ремонте или
                            компенсации, или обмене, или возврате товара необходимо, чтобы были выполнены следующие
                            условия:</p>
                        <a className="news__link arrow-checkbox_right">Подробнее<ArrowCheckbox /></a>
                    </div>
                    <div className="news__item">
                        <img className="news__img" src={newsImg4} />
                        <div className="news__date">20.01.2022</div>
                        <h4 className="news__heading">Доставка " Укрпочта Экспресс»</h4>
                        <p className="news__text">Для того, чтобы можно было рассмотреть вопрос о ремонте или
                            компенсации, или обмене, или возврате товара необходимо, чтобы были выполнены следующие
                            условия:</p>
                        <a className="news__link arrow-checkbox_right">Подробнее<ArrowCheckbox /></a>
                    </div>
                    <div className="news__item">
                        <img className="news__img" src={newsImg5} />
                        <div className="news__date">20.01.2022</div>
                        <h4 className="news__heading">Доставка " Укрпочта Экспресс»</h4>
                        <p className="news__text">Для того, чтобы можно было рассмотреть вопрос о ремонте или
                            компенсации, или обмене, или возврате товара необходимо, чтобы были выполнены следующие
                            условия:</p>
                        <a className="news__link arrow-checkbox_right">Подробнее<ArrowCheckbox /></a>
                    </div>
                    <div className="news__item">
                        <img className="news__img" src={newsImg6} />
                        <div className="news__date">20.01.2022</div>
                        <h4 className="news__heading">Доставка " Укрпочта Экспресс»</h4>
                        <p className="news__text">Для того, чтобы можно было рассмотреть вопрос о ремонте или
                            компенсации, или обмене, или возврате товара необходимо, чтобы были выполнены следующие
                            условия:</p>
                        <a className="news__link arrow-checkbox_right">Подробнее<ArrowCheckbox /></a>
                    </div>
                </div>
                <Pagination />
            </div>
        </>
    )
}