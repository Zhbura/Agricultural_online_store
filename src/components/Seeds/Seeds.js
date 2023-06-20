import './Seeds.scss';
import { ArrowCheckbox, ArrowCheckboxUp } from '../SVG/ArrowCheckbox/ArrowCheckbox';
import { PageHeadingOnce } from '../PageHeading/PageHeading';
import { useState } from 'react';

export const Seeds = () => {
    const [textActive, setTextActive] = useState(true);
    return (
        <>
            <div className="seeds">
                <div className="container">
                    <div className="page-heading_white page-heading_left">
                        <PageHeadingOnce>Семена</PageHeadingOnce>
                    </div>
                    <div className="seeds__text">
                        <p>
                            Выращивание овощей, цветов на своем участке или просто на балконе -
                            это любимое занятие многих дачников и огородников. Конечно, свежие овощи из
                            собственного города натуральные, вкусные и полезные. Но чтобы получить хороший урожай
                            томата или капусты, наслаждаться цветением петунии или розы, важно не только правильно
                            ухаживать за растениями. Все начинается с выбора посевного материала. И тут встает
                            вопрос: каковы семена вибрации? Аже они должны быть качественными, давать хорошую
                            всхожесть.
                        </p>
                        <p>
                            Предлагаем покупателям широкий выбор семян овощей. У нас вы можете найти семена
                            баклажан, различных видов капусты, бобовых и бахчевых культур, томата, перца, огурцов,
                            лука, салата, чеснока, картофеля от отечественных и зарубежных производителей.
                        </p>
                        <div className={textActive ? "seeds__text_hidden" : "seeds__text_active"}>
                            <p>
                                Также вы можете найти в нашем каталоге семена цветов: однолетних (петуния, львиный зев,
                                календула и т.д.), двухлетних (Виола, примула, мальва), многолетних (иберис, анемона,
                                гибискус, дельфиниум, фрезия), луковичных (тюльпаны, Лилия, Ирис, нарциссы),
                                комнатных (гербера, бегония, кактус, Мимоза, пассифлора). Конечно, это далеко не
                                весь список — каждая хозяйка найдет здесь свой любимый цветок.
                            </p>
                            <p>
                                В широком ассортименте представлены саженцы плодовых деревьев, роз, ягодных кустов.
                                У нас вы можете купить семена газонной травы, а также сопутствующие товары: удобрения,
                                средства защиты, биопрепараты, садовый инвентарь, субстраты, грунты, агроволокно,
                                горшки, кассеты для рассады.
                            </p>
                        </div>
                    </div>
                    <div className="seeds__pop-up arrow-checkbox_white" onClick={() => setTextActive(!textActive)}> {textActive ?
                        <p>Читать полностью <ArrowCheckbox /></p> :
                        <p>Скрыть текст <ArrowCheckboxUp /></p>}
                    </div>
                </div>
            </div>
        </>
    )
}