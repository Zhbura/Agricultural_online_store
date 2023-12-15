import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import './PrivacyPolicy.scss';

export const PrivacyPolicy = () => {
    const breadcrumbs = [
        {
            name: "Политика конфиденциальности",
            to: "/Agricultural_online_store/privacypolicy"
        },
    ];
    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="privacy-policy">
                <div className="container">
                    <PageHeadingTwice>Политика конфиденциальности</PageHeadingTwice>
                    <p className="privacy-policy__text privacy-policy__text_margin">
                        DAT придерживается принципов конфиденциальности и
                        неприкосновенности информации, полученной от клиентов
                        DAT в рамках предоставления услуг почтовой связи.
                    </p>
                    <p className="privacy-policy__text">
                        DAT гарантирует сохранность информации с ограниченным
                        доступом и защиту персональных данных пользователей услуг
                        почтовой связи (далее – пользователи), в т. ч. При
                        использовании официального сайта Укрпочты, мобильных
                        приложений, прикладных программных интерфейсов и
                        приложений, платежей и переводов по платежным системам
                        и т.п. (Далее – услуги).
                    </p>
                    <p className="privacy-policy__text">
                        Политика конфиденциальности (далее – политика) нацелена
                        на публичное информирование пользователей о порядке
                        сбора (обработки), хранения, передачи персональных
                        данных и информации, предоставляемой в рамках
                        предоставления услуг Укрпочты.
                    </p>
                    <p className="privacy-policy__text">
                        Используя службы DAT, пользователь соглашается со всеми
                        правилами и условиями Политики.
                    </p>
                    <p className="privacy-policy__text">
                        Перед началом использования услуг просим ознакомиться с
                        политикой.
                    </p>
                    <h3 className="privacy-policy__heading">Цель обработки персональных данных</h3>
                    <p className="privacy-policy__text">
                        Целью обработки персональных данных является
                        предоставление услуг.
                    </p>
                    <h3 className="privacy-policy__heading">Сбор персональных данных</h3>
                    <p className="privacy-policy__text">
                        Персональные данные-сведения или совокупность сведений о
                        пользователе, который идентифицирован или может быть
                        конкретно идентифицирован.
                    </p>
                    <p className="privacy-policy__text">
                        Неперсонифицированная информация-информация, которая не
                        привязана к конкретному пользователю услуг.
                    </p>
                    <p className="privacy-policy__text">
                        Персональные данные, которые обрабатывает ..., охватывают
                        контактные данные, предоставляемые пользователями при
                        использовании услуг (фамилия, имя, отчество, номер
                        телефона, адрес электронной почты и т.д.); которая
                        используется для оплаты товаров и услуг Укрпочты; номера
                        и историю почтовых отправлений и т.д. Информация
                        получается при использовании пользователем услуг,
                        в т. ч. с помощью сайта Укрпочты, мобильных приложений и
                        тому подобное. Данные передаются пользователями
                        добровольно с целью обеспечения возможности выполнения
                        Укрпочтой обязательств по услугам.
                    </p>
                    <p className="privacy-policy__text">
                        Неперсонифицированная информация используется
                        исключительно для формирования статистических данных и с
                        целью улучшения услуг, в т. ч. информирования
                        пользователя о новых услугах. В частности в случае
                        использования мобильного приложения, - версия
                        операционной системы, примерное местонахождение
                        мобильного устройства в случае самостоятельного
                        предоставления согласия пользователем на использование
                        гео-локации, IP-адрес устройства, дата и время
                        авторизации в мобильном приложении.
                    </p>
                    <h3 className="privacy-policy__heading">Использование информации</h3>
                    <p className="privacy-policy__text">
                        Информация, которую получает Укрпочта, используется для:
                    </p>
                    <ul className="privacy-policy__list">
                        <li className="privacy-policy__text">
                            создание учетной записи Пользователя;
                        </li>
                        <li className="privacy-policy__text">
                            предоставление услуги или функции, которую заказал
                            пользователь;
                        </li>
                        <li className="privacy-policy__text">
                            связи с пользователями с целью информирования о
                            персонализированных уникальных предложениях и акциях
                            Укрпочты;
                        </li>
                        <li className="privacy-policy__text">
                            оценки и анализа рынка, клиентов, продуктов и
                            сервисов, предоставляемых Укрпочтой;
                        </li>
                        <li className="privacy-policy__text">
                            эффективного клиентского обслуживания;
                        </li>
                        <li className="privacy-policy__text">
                            обеспечение обновления и технической поддержки услуг,
                            в т. ч. мобильного приложения на устройстве
                            пользователя;
                        </li>
                        <li className="privacy-policy__text">
                            любых других целей в объеме, достаточном для
                            качественного предоставления услуг.
                        </li>
                    </ul>
                    <h3 className="privacy-policy__heading">Передача информации третьим лицам</h3>
                    <p className="privacy-policy__text">
                        Укрпочта может передавать информацию полученную от
                        пользователей в рамках предоставления услуг третьим
                        лицам с целью надлежащего выполнения своих обязанностей
                        по этим услугам.
                    </p>
                    <p className="privacy-policy__text">
                        Распространение Укрпочтой персональных данных без
                        согласия Пользователя или уполномоченного им лица
                        разрешается в случаях, определенных законом, и только
                        (если это необходимо) в интересах национальной
                        безопасности, экономического благосостояния и прав человека.
                    </p>
                    <h3 className="privacy-policy__heading">
                        Защита конфиденциальной информации и информации о пользователе
                    </h3>
                    <p className="privacy-policy__text">
                        Конфіденційна інформація, персональні дані та
                        неперсоніфікована інформація зберігаються на внутрішніх
                        ресурсах Укрпошти, доступ до яких обмежується згідно з
                        вимогами положень Політики інформаційної безпеки Укрпошти.
                    </p>
                    <h3 className="privacy-policy__heading">Безопасность</h3>
                    <p className="privacy-policy__text">
                        На веб-ресурсах Укрпочты приняты достаточные меры для
                        защиты информации, однако просим принять во внимание,
                        что абсолютно безопасного и безошибочного пути передачи
                        данных сетью Интернет не существует.
                    </p>
                    <p className="privacy-policy__text">
                        Укрпочта не несет ответственности за функционирование
                        серверов, поставщиков услуги доступа к сети Интернет,
                        работу третьих лиц, по вине которых может быть невозможен
                        или ограничен доступ к сайту, возможна утечка информации
                        по вине третьих лиц, а также за разглашение пользователем
                        своих персональных данных, в т. ч. данных авторизации на
                        сайте Укрпочты, в мобильных приложениях, прикладных
                        программных интерфейсах и приложениях.
                    </p>
                    <p className="privacy-policy__text">
                        Информация, размещенная на веб-ресурсах Укрпочты,
                        охраняется действующим законодательством, регулирующим
                        право интеллектуальной собственности. Тиражирование,
                        перевод, запись в архиве, копирование на другие
                        электронные носители информации, которая размещена, запрещена.
                    </p>
                    <h3 className="privacy-policy__heading">Файлы cookie</h3>
                    <p className="privacy-policy__text">
                        Cookie-это небольшие текстовые файлы, которые хранятся
                        на устройствах пользователя во время посещения сайта
                        Укрпочты. На сайте Укрпочты могут быть использованы файлы
                        cookie, чтобы понять, какой контент вас интересует, и
                        запомнить вас, если вы снова посетите сайт. Укрпочта
                        сохраняет файлы cookie, чтобы обеспечить технически
                        безупречное и оптимизированное предоставление услуг.
                    </p>
                    <p className="privacy-policy__text">
                        Файлы cookie, которые могут быть использованы Укрпочтой,
                        не могут нанести вред устройствам пользователя.
                        Большинство файлов cookie, которые могут быть
                        использованы Укрпочтой, являются так называемыми
                        сеансами файлов cookie, которые автоматически удаляются
                        в конце посещения пользователем веб-сайта Укрпочты.
                        Другие файлы cookie остаются на устройствах пользователя
                        до тех пор, пока он их не удалит. Эти файлы cookie
                        позволяют распознавать браузер пользователя при следующем
                        посещении.
                    </p>
                </div>
            </div >
        </>
    )
}