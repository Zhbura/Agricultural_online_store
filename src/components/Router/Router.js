import { Route, Routes } from "react-router-dom";
import { Main } from "../Main/Main";
import { Product } from "../Product/Product";
import { Order } from "../Order/Order";
import { ThanksOrder } from "../ThanksOrder/ThanksOrder";
import { AboutСompany } from "../AboutСompany/AboutСompany";
import { TeamCompany } from "../TeamCompany/TeamCompany";
import { Agreement } from "../Agreement/Agreement";
import { Catalog } from "../Catalog/Catalog";
import { Pay } from "../Pay/Pay";
import { PartnersComp } from "../PartnersComp/PartnersComp";
import { News } from "../News/News";
import { Contacts } from "../Contacts/Contacts";
import { Registration } from "../Registration/Registration";
import { PlantProtection } from "../PlantProtection/PlantProtection";
import { PersonalAccount } from "../PersonalAccount/PersonalAccount";
import { CurrentOrders } from "../CurrentOrders/CurrentOrders";
import { PersonalData } from "../PersonalData/PersonalData";
import { OrderHistory } from "../OrderHistory/OrderHistory";
import { ChangePassword } from "../ChangePassword/ChangePassword";
import { Cabinet } from "../PersonalAccount/Cabinet";
import { Layout } from "../Layout/Layout";
import { Error } from "../Error/Error";
import { PrivacyPolicy } from "../PrivacyPolicy/PrivacyPolicy";
import { Refund } from "../Refund/Refund";
import { Codex } from "../Codex/Codex";
import { CartComp } from "../Cart/Cart";
import { Commodity } from "../Commodity/Commodity";

export const Router = () => {

    const products = [
        [
            {
                id: 1,
                name: "Петуния Софистика",
                alt: "Петуния Софистика F1",
                img: [
                    require("../../img/product/petunia/petunia.png"),
                    require("../../img/product/petunia/petuniaTwo.png"),
                    require("../../img/product/petunia/petuniaThree.png")
                ],
                price: 100,
                to: "petunia"
            },
            {
                id: 2,
                name: "Скор",
                alt: "Скор",
                img: [
                    require("../../img/product/skor/skor.png"),
                    require("../../img/product/skor/skorTwo.png"),
                    require("../../img/product/skor/skorThree.png"),
                ],
                price: 190,
                to: "skor",
            },
            {
                id: 3,
                name: "Хорус",
                alt: "Хорус",
                img: [
                    require("../../img/product/horys/horys.png"),
                    require("../../img/product/horys/horysTwo.png"),
                    require("../../img/product/horys/horysThree.png"),
                ],
                price: 230,
                to: "horys",
            },
            {
                id: 4,
                name: "Агрикола",
                alt: "Агрикола, удобрение для орхидей",
                img: [
                    require("../../img/product/agrikola/agrikola.png"),
                    require("../../img/product/agrikola/agrikolaTwo.png"),
                    require("../../img/product/agrikola/agrikolaThree.png"),
                    require("../../img/product/agrikola/agrikolaFour.png"),
                ],
                price: 317,
                to: "agrikola",
            },
        ],
        [
            {
                id: 5,
                name: "Агрикола",
                alt: "Агрикола, удобрение для орхидей",
                img: [
                    require("../../img/product/agrikola/agrikola.png"),
                    require("../../img/product/agrikola/agrikolaTwo.png"),
                    require("../../img/product/agrikola/agrikolaThree.png"),
                    require("../../img/product/agrikola/agrikolaFour.png"),
                ],
                price: 317,
                to: "agrikola",
            },
            {
                id: 6,
                name: "Хорус",
                alt: "Хорус",
                img: [
                    require("../../img/product/horys/horys.png"),
                    require("../../img/product/horys/horysTwo.png"),
                    require("../../img/product/horys/horysThree.png"),
                ],
                price: 230,
                to: "horys",
            },
            {
                id: 7,
                name: "Скор",
                alt: "Скор",
                img: [
                    require("../../img/product/skor/skor.png"),
                    require("../../img/product/skor/skorTwo.png"),
                    require("../../img/product/skor/skorThree.png"),
                ],
                price: 190,
                to: "skor",
            },
            {
                id: 8,
                name: "Петуния Софистика",
                alt: "Петуния Софистика F1",
                img: [
                    require("../../img/product/petunia/petunia.png"),
                    require("../../img/product/petunia/petuniaTwo.png"),
                    require("../../img/product/petunia/petuniaThree.png")
                ],
                price: 100,
                to: "petunia"
            },
        ],
        [
            {
                id: 9,

                name: "Скор",
                alt: "Скор",
                img: [
                    require("../../img/product/skor/skor.png"),
                    require("../../img/product/skor/skorTwo.png"),
                    require("../../img/product/skor/skorThree.png"),
                ],
                price: 190,
                to: "skor",
            },
            {
                id: 10,
                name: "Петуния Софистика",
                alt: "Петуния Софистика F1",
                img: [
                    require("../../img/product/petunia/petunia.png"),
                    require("../../img/product/petunia/petuniaTwo.png"),
                    require("../../img/product/petunia/petuniaThree.png")
                ],
                price: 100,
                to: "petunia",
            },
            {
                id: 11,
                name: "Агрикола",
                alt: "Агрикола, удобрение для орхидей",
                img: [
                    require("../../img/product/agrikola/agrikola.png"),
                    require("../../img/product/agrikola/agrikolaTwo.png"),
                    require("../../img/product/agrikola/agrikolaThree.png"),
                    require("../../img/product/agrikola/agrikolaFour.png"),
                ],
                price: 317,
                to: "agrikola",
            },
            {
                id: 12,

                name: "Хорус",
                alt: "Хорус",
                img: [
                    require("../../img/product/horys/horys.png"),
                    require("../../img/product/horys/horysTwo.png"),
                    require("../../img/product/horys/horysThree.png"),
                ],
                price: 230,
                to: "horys",
            },
        ],
        [
            {
                id: 13,
                name: "Петуния Софистика",
                alt: "Петуния Софистика F1",
                img: [
                    require("../../img/product/petunia/petunia.png"),
                    require("../../img/product/petunia/petuniaTwo.png"),
                    require("../../img/product/petunia/petuniaThree.png")
                ],
                price: 100,
                to: "petunia"
            },
            {
                id: 14,

                name: "Хорус",
                alt: "Хорус",
                img: [
                    require("../../img/product/horys/horys.png"),
                    require("../../img/product/horys/horysTwo.png"),
                    require("../../img/product/horys/horysThree.png"),
                ],
                price: 230,
                to: "horys",
            },
            {
                id: 15,
                name: "Скор",
                alt: "Скор",
                img: [
                    require("../../img/product/skor/skor.png"),
                    require("../../img/product/skor/skorTwo.png"),
                    require("../../img/product/skor/skorThree.png"),
                ],
                price: 190,
                to: "skor",
            },
            {
                id: 16,
                name: "Агрикола",
                alt: "Агрикола, удобрение для орхидей",
                img: [
                    require("../../img/product/agrikola/agrikola.png"),
                    require("../../img/product/agrikola/agrikolaTwo.png"),
                    require("../../img/product/agrikola/agrikolaThree.png"),
                    require("../../img/product/agrikola/agrikolaFour.png"),
                ],
                price: 317,
                to: "agrikola",
            },
        ],
    ]
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main products={products} />} />
                    <Route path="product" element={<Product />} >
                        <Route path="petunia" element={<Commodity
                            availability="В наличии"
                            name="Петуния Софистика"
                            images={products[0][0].img}
                            price="100" priceFor="5 шт" />} />
                        <Route path="horys" element={<Commodity
                            availability="В наличии"
                            name="Хорус"
                            images={products[0][2].img}
                            price="230" priceFor="3 шт" />}
                        />
                        <Route path="agrikola" element={<Commodity
                            availability="В наличии"
                            name="Комплект удобрений Агрикола"
                            images={products[0][3].img}
                            price="317" priceFor="2 шт" />}
                        />
                        <Route path="skor" element={<Commodity
                            availability="В наличии"
                            name="Скор"
                            images={products[0][1].img}
                            price="190" priceFor="2 ампулы" />}
                        />
                    </Route>
                    <Route path="order" element={<Order />} />
                    <Route path="thanks_order" element={<ThanksOrder />} />
                    <Route path="aboutcompany" element={<AboutСompany />} />
                    <Route path="teemcompany" element={<TeamCompany />} />
                    <Route path="agreement" element={<Agreement />} />
                    <Route path="pay" element={<Pay />} />
                    <Route path="partners" element={<PartnersComp />} />
                    <Route path="news" element={<News />} />
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="registration" element={<Registration />} />
                    <Route path="catalog" element={<PlantProtection />} />
                    <Route path="catalog_plant_protection" element={<Catalog title="Средства защиты растений" />} />
                    <Route path="catalog_seeds" element={<Catalog title="Семена" />} />
                    <Route path="catalog_fertilizers" element={<Catalog title="Удобрения" />} />
                    <Route path="catalog_feed_group" element={<Catalog title="Кормовая группа" />} />
                    <Route path="catalog_farmer_help" element={<Catalog title="Агроному в помощь" />} />
                    <Route path="personal_account" element={<PersonalAccount />}>
                        <Route index element={<Cabinet />} />
                        <Route path="current_orders" element={<CurrentOrders />} />
                        <Route path="personal_data" element={<PersonalData />} />
                        <Route path="order_history" element={<OrderHistory />} />
                        <Route path="change_password" element={<ChangePassword />} />
                    </Route>
                    <Route path="privacypolicy" element={<PrivacyPolicy />} />
                    <Route path="refund" element={<Refund />} />
                    <Route path="codex" element={<Codex />} />
                    <Route path="cart" element={<CartComp />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </>
    )
}