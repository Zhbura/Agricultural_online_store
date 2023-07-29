import { Route, Routes } from "react-router-dom";
import { Main } from "../Main/Main";
import { Commodity } from "../Commodity/Commodity";
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
import { Product } from "../Product/Product";
import { useEffect, useState } from 'react';
import { WishList } from "../WishList/WishList";
import { products } from "../../productsData";

export const Router = () => {
    const [wishList, setWishList] = useState([]);

    const addToWishList = (id, product) => {
        const productExist = wishList.find((product) => product.id === id);
        if (productExist) {
            setWishList(wishList.map((product) =>
                product.id === id ?
                    {
                        ...productExist,
                    } : product
            ))
        } else {
            setWishList([...wishList, product])
        }
    }

    const [totalWish, setTotalWish] = useState(
        wishList.reduce((prev, current) => prev + current.count, 0)
    )

    useEffect(() => {
        setTotalWish(
            wishList.reduce((prev, current) => prev + current.count, 0)
        )
    }, [wishList])
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout totalWish={totalWish} />}>
                    <Route index
                        element={<Main
                            products={products}
                            addToWishList={addToWishList}
                        />}
                    />
                    <Route path="product"
                        element={<Commodity
                            products={products}
                            addToWishList={addToWishList}
                        />}>
                        <Route path="petunia" element={<Product
                            addToWishList={addToWishList}
                            totalWish={totalWish}
                            product={products[0][0]} />}
                        />
                        <Route path="skor" element={<Product
                            addToWishList={addToWishList}
                            totalWish={totalWish}
                            product={products[0][1]} />}
                        />
                        <Route path="horys" element={<Product
                            addToWishList={addToWishList}
                            totalWish={totalWish}
                            product={products[0][2]} />}
                        />
                        <Route path="agrikola" element={<Product
                            addToWishList={addToWishList}
                            totalWish={totalWish}
                            product={products[0][3]} />}
                        />
                    </Route>
                    <Route path="order"
                        element={<Order />}
                    />
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
                    <Route path="catalog_plant_protection"
                        element={<Catalog
                            title="Средства защиты растений"
                            products={products}
                            addToWishList={addToWishList}
                        />}
                    />
                    <Route path="catalog_seeds"
                        element={<Catalog
                            title="Семена"
                            products={products}
                            addToWishList={addToWishList}
                        />}
                    />
                    <Route path="catalog_fertilizers"
                        element={<Catalog
                            title="Удобрения"
                            products={products}
                            addToWishList={addToWishList}
                        />}
                    />
                    <Route path="catalog_feed_group"
                        lement={<Catalog
                            title="Кормовая группа"
                            products={products}
                            addToWishList={addToWishList}
                        />}
                    />
                    <Route path="catalog_farmer_help"
                        element={<Catalog
                            title="Агроному в помощь"
                            products={products}
                            addToWishList={addToWishList}
                        />}
                    />
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
                    <Route path="wish_list"
                        element={<WishList
                            wishList={wishList}
                            setWishList={setWishList}
                        />}
                    />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </>
    )
}