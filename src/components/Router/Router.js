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
import { useEffect, useState } from 'react';

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
                totalPrice: 100,
                to: "petunia",
                availability: "В наличии",
                priceFor: "5 шт",
                count: 1,
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
                totalPrice: 190,
                to: "skor",
                availability: "В наличии",
                priceFor: "2 ампулы",
                count: 1,
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
                totalPrice: 230,
                to: "horys",
                availability: "В наличии",
                priceFor: "3 шт",
                count: 1,
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
                totalPrice: 317,
                to: "agrikola",
                availability: "В наличии",
                priceFor: "2 шт",
                count: 1,
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
                totalPrice: 317,
                to: "agrikola",
                availability: "В наличии",
                priceFor: "2 шт",
                count: 1,
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
                totalPrice: 230,
                to: "horys",
                availability: "В наличии",
                priceFor: "3 шт",
                count: 1,
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
                totalPrice: 190,
                to: "skor",
                availability: "В наличии",
                priceFor: "2 ампулы",
                count: 1,
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
                totalPrice: 100,
                to: "petunia",
                availability: "В наличии",
                priceFor: "5 шт",
                count: 1,
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
                totalPrice: 190,
                to: "skor",
                availability: "В наличии",
                priceFor: "2 ампулы",
                count: 1,
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
                totalPrice: 100,
                to: "petunia",
                availability: "В наличии",
                priceFor: "5 шт",
                count: 1,
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
                totalPrice: 317,
                to: "agrikola",
                availability: "В наличии",
                priceFor: "2 шт",
                count: 1,
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
                totalPrice: 230,
                to: "horys",
                availability: "В наличии",
                priceFor: "3 шт",
                count: 1,
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
                totalPrice: 100,
                to: "petunia",
                availability: "В наличии",
                priceFor: "5 шт",
                count: 1,
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
                totalPrice: 230,
                to: "horys",
                availability: "В наличии",
                priceFor: "3 шт",
                count: 1,
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
                totalPrice: 190,
                to: "skor",
                availability: "В наличии",
                priceFor: "2 ампулы",
                count: 1,
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
                totalPrice: 317,
                to: "agrikola",
                availability: "В наличии",
                priceFor: "2 шт",
                count: 1,
            },
        ],
    ]

    const [cartProducts, setCartProducts] = useState([]);

    const addToCart = (id, product) => {
        const productExist = cartProducts.find((product) => product.id === id);
        if (productExist) {
            setCartProducts(cartProducts.map((product) =>
                product.id === id ?
                    {
                        ...productExist,
                        count: productExist.count + 1,
                        totalPrice: (productExist.count + 1) * productExist.price,
                    } : product
            ))
        } else {
            setCartProducts([...cartProducts, product])
        }
    }

    const [total, setTotal] = useState({
        count: cartProducts.reduce((prev, current) => prev + current.count, 0),
        totalPrice: cartProducts.reduce((prev, current) => prev + current.totalPrice, 0),
    })

    useEffect(() => {
        setTotal({
            count: cartProducts.reduce((prev, current) => (prev + current.count), 0),
            totalPrice: cartProducts.reduce((prev, current) => (prev + current.totalPrice), 0),
        })
    },
        [cartProducts])

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout total={total} />}>
                    <Route index element={<Main products={products} addToCart={addToCart} />} />
                    <Route path="product" element={<Product products={products} addToCart={addToCart} />} >
                        <Route path="petunia" element={<Commodity product={products[0][0]} />} />
                        <Route path="skor" element={<Commodity product={products[0][1]} />} />
                        <Route path="horys" element={<Commodity product={products[0][2]} />} />
                        <Route path="agrikola" element={<Commodity product={products[0][3]} />} />
                    </Route>
                    <Route path="order" element={<Order total={total} cartProducts={cartProducts} />} />
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
                    <Route path="catalog_plant_protection" element={<Catalog title="Средства защиты растений" products={products} addToCart={addToCart} />} />
                    <Route path="catalog_seeds" element={<Catalog title="Семена" products={products} addToCart={addToCart} />} />
                    <Route path="catalog_fertilizers" element={<Catalog title="Удобрения" products={products} addToCart={addToCart} />} />
                    <Route path="catalog_feed_group" element={<Catalog title="Кормовая группа" products={products} addToCart={addToCart} />} />
                    <Route path="catalog_farmer_help" element={<Catalog title="Агроному в помощь" products={products} addToCart={addToCart} />} />
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
                    <Route path="cart" element={<CartComp cartProducts={cartProducts} setCartProducts={setCartProducts} />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </>
    )
}