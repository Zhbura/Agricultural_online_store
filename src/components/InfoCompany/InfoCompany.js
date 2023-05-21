import './InfoCompany.scss';
import infoCompany from '../../img/infoCompany.png';
import { Button } from '../Button/Button';
import { PageHeadingOnce } from '../PageHeading/PageHeading';

export const InfoCompany = () => {
    return (
        <>
            <div className="info-company">
                <div className="container">
                    <div className="info-company__left">
                        <img className="info-company__main-img" src={infoCompany} alt="Информация о компании" />
                    </div>
                    <div className="info-company__right">
                        <div className="page-heading_left">
                            <PageHeadingOnce> О компании</PageHeadingOnce>
                        </div>
                        <div className="wrap-text">
                            <p className="info-company__text"><span>"Компания ООО" ДАМАР АГРОТРЕЙД"</span> - молодая
                                команда, которая появилась на аграрном рынке в 2020 году. Мы не боимся трудностей и проблем.
                                Поэтому даже сложный ковидный период, мировая пандемия не помешали успешному старту.
                            </p>
                            <p className="info-company__text">Итак, <span>мы-смелые, мы — драйвовые</span>, мы-те, которые развивают растениеводство и помогают
                                становиться успешными тысячам отечественных аграриев.</p>
                            <p className="info-company__text">
                                <span>Видение:</span> компания ООО "ДАМАР АГРОТРЕЙД" держит курс на повышение престижности,
                                доверия к средствам защиты растений made in UA. Стремимся, чтобы в каждом регионе
                                Украины наш потребитель имел доступ к качественной продукции и консалтингу от
                                специалистов команды.
                            </p>
                            <p className="info-company__text">
                                <span>Миссия:</span> все продуктовое портфолио, консультативные услуги ООО "ДАМАР АГРОТРЕЙД"
                                направлены на повышение рентабельности растениеводства в меняющихся климатических
                                условиях Украины. Также ставим себе задачу повышать осведомленность клиентов
                                относительно современных методов ведения растениеводства...
                            </p>
                        </div>
                        <div className="info-company__btn">
                            <Button>Подробнее</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}