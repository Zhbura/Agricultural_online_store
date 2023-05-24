import { PageHeadingTwice } from '../PageHeading/PageHeading';
import './TeamCompany.scss';
import worker1 from '../../img/workers1.png';
import worker2 from '../../img/workers2.png';
import worker3 from '../../img/workers3.png';
import { TopBar } from '../TopBar/TopBar';
import { Header } from '../Header/Header';
import { BottomBar } from '../BottomBar/BottomBar';
import { Footer } from '../Footer/Footer';

export const TeamCompany = () => {
    return (
        <>
            <div className="wrapper">
                <div className="top">
                    <TopBar />
                    <Header />
                    <BottomBar />
                    <div className="team-company">
                        <div className="container">
                            <PageHeadingTwice>Наша команда</PageHeadingTwice>
                            <div className="team-company__text">
                                <p><span className="team-company__text_green">Наша команда</span> - это талантливый коллектив профессионалов, объединенный общими целями и
                                    ценностями. Каждый из сотрудников является важным звеном в общей работе компании,
                                    вносит свой вклад в ее развитие и успех. Мы отвечаем за результаты нашей деятельности
                                    перед клиентами и за выполнение своих обязательств перед деловыми партнерами.
                                    Стараемся максимально сэкономить ваше время и деньги и гарантируем, что с нашей
                                    командой профессиональных менеджеров вы решите все вопросы за минимальный промежуток
                                    времени.</p>
                                <p><span className="team-company__text_green">Наш опыт работы,</span> ориентация на результат, ответственность, преданность делу помогают
                                    нам лучше понимать рыночные потребности и поддерживать высокие стандарты качества
                                    обслуживания клиентов и партнеров...</p>
                            </div>
                            <PageHeadingTwice>С вами работают</PageHeadingTwice>
                            <div className="team-company__workers">
                                <div className="team-company__worker">
                                    <img className="team-company__photo" src={worker1} alt="Фото сотрудника: Евгении Флор" />
                                    <p className="team-company__name">Евгения Флор</p>
                                </div>
                                <div className="team-company__worker team-company__worker_margin">
                                    <img className="team-company__photo" src={worker2} alt="Фото сотрудника: Петр Сидоров" />
                                    <p className="team-company__name">Петр Сидоров</p>
                                </div>
                                <div className="team-company__worker team-company__worker_margin">
                                    <img className="team-company__photo" src={worker3} alt="Фото сотрудника: Артур Соседов" />
                                    <p className="team-company__name">Артур Соседов</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}