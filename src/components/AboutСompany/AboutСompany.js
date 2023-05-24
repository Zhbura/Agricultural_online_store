import { BottomBar } from '../BottomBar/BottomBar';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { TopBar } from '../TopBar/TopBar';
import './AboutСompany.scss';

export const AboutСompany = () => {
    return (
        <>
            <div className="wrapper">
                <div className="top">
                    <TopBar />
                    <Header />
                    <BottomBar />
                    <div className="about-company">
                        <div className="container">
                            <PageHeadingTwice>О компании</PageHeadingTwice>
                            <div className="about-company__text">
                                <p><span className="about-company__text_green">"Компания ООО" ДАМАР АГРОТРЕЙД"</span> - молодая команда, которая появилась на аграрном рынке
                                    в 2020 году. Мы не боимся трудностей и проблем. Поэтому даже сложный ковидный период,
                                    мировая пандемия не помешали успешному старту.</p>
                                <p>Итак, <span className="about-company__text_green">мы-смелые, мы — драйвовые,</span> мы-те, которые развивают растениеводство и помогают
                                    становиться успешными тысячам отечественных аграриев.</p>
                                <p><span className="about-company__text_green">Видение:</span> компания ООО "ДАМАР АГРОТРЕЙД" держит курс на повышение престижности,
                                    доверия к средствам защиты растений made in UA. Стремимся, чтобы в каждом
                                    регионе Украины наш потребитель имел доступ к качественной продукции и
                                    консалтингу от специалистов команды.</p>
                                <p><span className="about-company__text_green">Миссия:</span> все продуктовое портфолио, консультативные услуги ООО "ДАМАР
                                    АГРОТРЕЙД" направлены на повышение рентабельности растениеводства в
                                    меняющихся климатических условиях Украины. Также ставим себе задачу
                                    повышать осведомленность клиентов относительно современных методов ведения
                                    растениеводства...</p>
                            </div>
                            <div className="about-company__list-items">
                                <h4 className="about-company__heading about-company__text_green">Ценности:</h4>
                                <ul>
                                    <li className="about-company__list-item">прозрачность деловых отношений с коллегами, контрагентами, клиентами;</li>
                                    <li className="about-company__list-item">одинаково высококлассный сервис для небольшого фермера и мощного холдинга;</li>
                                    <li className="about-company__list-item">улучшение качества товаров и услуг;</li>
                                    <li className="about-company__list-item">постоянная поддержка партнера на всех этапах производства продукции растениеводства;</li>
                                    <li className="about-company__list-item">экологичность в работе, мыслях и целях;</li>
                                    <li className="about-company__list-item">поддержка отечественного продукта и отечественного производителя;</li>
                                    <li className="about-company__list-item">постоянное саморазвитие.…»</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}