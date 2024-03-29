import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import './Refund.scss';

export const Refund = () => {
    const breadcrumbs = [
        {
            name: "Возврат и обмен товара",
            to: "/Agricultural_online_store/refund"
        },
    ];
    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="refund">
                <div className="container">
                    <PageHeadingTwice>Возврат и обмен товара</PageHeadingTwice>
                    <p className="refund__subtitle">
                        Согласно Закону Украины» О защите прав потребителей "
                        есть две причины, по которым покупатель может сделать
                        возврат или обмен купленного им товара:
                    </p>
                    <ol className="refund__list">
                        <li className="refund__list-ol refund__list_bold">Если товар не соответствует заявленному производителем качеству.</li>
                        <ul className="refund__list_margin">
                            <li className="refund__list-ul">Для того, чтобы можно было рассмотреть вопрос о
                                ремонте или компенсации, или обмене, или возврате
                                товара необходимо, чтобы были выполнены следующие
                                условия:</li>
                            <li className="refund__list-ul">соблюдены все условия получения товара из
                                раздела «Оплата и доставка». </li>
                            <li className="refund__list-ul">сохранены сам товар, заводская оригинальная упаковка
                                от товара, все </li>
                            <li className="refund__list-ul">сопроводительные документы, чеки об оплате;
                                на эл. адрес shop@ukrsemena.com отправлены:
                                <ol className="refund__list_margin">
                                    <li className="refund__list-ul">
                                        претензия к качеству товара, в которой были указаны: номер
                                        заказа, контактные данные клиента (ФИО, телефон),
                                        подробное описание проблемы, фото товара (несколько
                                        штук, брак крупным планом), серийные номера из
                                        упаковки.
                                    </li>
                                    <li className="refund__list-ul">
                                        Сканкопия акта об осмотре, оформленного на тк
                                        (при недостаче и/или порче товара).
                                    </li>

                                </ol>
                            </li>
                        </ul>
                        <p className="refund__list_bold">Без оформленного на транспортной компании или УГППС
                            «Укрпочта» «акта об осмотре» или др. документа,
                            подтверждающего недостачу и/или порчу товара в
                            заказе, претензия клиента о замене товара или
                            компенсации рассматриваться не будет.</p>
                        <li className="refund__list-ol refund__list_bold">Если товар полностью соответствует всем требованиям, но по какой-то причине не устраивает покупателя.</li>
                        <ul className="refund__list_margin">
                            <li className="refund__list-ul">Мы осознаем особенности удаленной продажи и доставки
                                и обязуемся вернуть деньги или обменять товар, или
                                оставить сумму в счет будущих заказов при соблюдении
                                следующих условий: </li>
                            <li className="refund__list-ul"> обращение с претензией поступило не позднее 14 дней
                                со дня доставки товара покупателю;</li>
                            <li className="refund__list-ul">товар не использовался покупателем и имеет товарный
                                вид, потребительские качества, заводскую оригинальную
                                упаковку, пломбы и документы;</li>
                            <li className="refund__list-ul">товар возвращен тем же способом, что и был
                                получен, с сопроводительными документами,
                                без повреждений; </li>
                            <li className="refund__list-ul"> семена, товар с пометкой» под заказ "возврату и
                                обмену не подлежат;</li>
                            <li className="refund__list-ul">стоимость доставки товара обратно в интернет-магазин
                                оплачивает клиент; </li>
                            <li className="refund__list-ul">возмещается только стоимость товара (без расходов на
                                пересылку, комиссий и др.).</li>
                            <p className="refund__list_bold">Денежные средства за возвращенный товар
                                перечисляются клиенту на карточный счет или почтовым
                                переводом в срок до 14 календарных дней с момента
                                получения товара интернет-магазином.
                            </p>
                            <p className="refund__list_bold">При любом из
                                двух вариантов сначала обязательно свяжитесь с
                                Контакт-центром интернет-магазина Укрсемена.
                            </p>
                        </ul>
                    </ol>
                </div>
            </div>
        </>
    )
}