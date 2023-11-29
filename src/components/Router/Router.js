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
import { LayoutTop } from "../Layout/LayoutTop";
import { Error } from "../Error/Error";
import { PrivacyPolicy } from "../PrivacyPolicy/PrivacyPolicy";
import { Refund } from "../Refund/Refund";
import { Codex } from "../Codex/Codex";
import { CartComp } from "../Cart/Cart";
import { Product } from "../Product/Product";
import { WishList } from "../WishList/WishList";
import { products } from "../../productsData";
import { Authorization } from "../Authorization/Authorization";
import { useEffect, useState } from "react";
import { PublicRoute } from "../PublicRoute/PublicRoute";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import { auth } from "../../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { LayoutBottom } from "../Layout/LayoutBottom";
import { CatalogProductsFilter } from "../CatalogProductsFilter/CatalogProductsFilter";
import { CatalogSeeds } from "../Catalog/CatalogSeeds";
import { CatalogFertilizers } from "../Catalog/CatalogFertilizers";

export const Router = () => {
    const [authed, setAuthed] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthed(true);
            } else {
                setAuthed(false);
            }
        })
        return unsubscribe;
    }, [])

    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutTop authed={authed} />}>
                    <Route index element={<Main />} />
                    <Route path="/" element={<LayoutBottom />}>
                        <Route path="product" element={<Commodity />}>
                            {products.map((item, i) => (
                                <Route key={i} path={item.to}
                                    element={<Product product={item} />}
                                />
                            ))}
                        </Route>
                        <Route path="order" element={<Order authed={authed} />} />
                        <Route path="thanks_order" element={<ThanksOrder />} />
                        <Route path="aboutcompany" element={<AboutСompany />} />
                        <Route path="teemcompany" element={<TeamCompany />} />
                        <Route path="agreement" element={<Agreement />} />
                        <Route path="pay" element={<Pay />} />
                        <Route path="partners" element={<PartnersComp />} />
                        <Route path="news" element={<News />} />
                        <Route path="contacts" element={<Contacts authed={authed} />} />
                        <Route path="authorization" element={<PublicRoute authed={authed} />}>
                            <Route index element={<Authorization />} />
                            <Route path="registration" element={<Registration />} />
                        </Route>
                        <Route path="catalog_product_filter" element={<CatalogProductsFilter />} />
                        <Route path="catalog" element={<PlantProtection />} />
                        <Route path="catalog_plant_protection"
                            element={<Catalog title="Средства защиты растений" />}
                        />
                        <Route path="catalog_seeds" element={<CatalogSeeds />} />
                        <Route path="catalog_fertilizers"
                            element={<CatalogFertilizers />}
                        />
                        <Route path="catalog_feed_group"
                            element={<Catalog title="Кормовая группа" />}
                        />
                        <Route path="catalog_farmer_help"
                            element={<Catalog title="Агроному в помощь" />}
                        />
                        <Route path="personal_account" element={<PrivateRoute authed={authed} />}>
                            <Route path="" element={<PersonalAccount />}>
                                <Route index element={<Cabinet />} />
                                <Route path="current_orders" element={<CurrentOrders />} />
                                <Route path="personal_data" element={<PersonalData />} />
                                <Route path="order_history" element={<OrderHistory />} />
                                <Route path="change_password" element={<ChangePassword />} />
                            </Route>
                        </Route>
                        <Route path="privacypolicy" element={<PrivacyPolicy />} />
                        <Route path="refund" element={<Refund />} />
                        <Route path="codex" element={<Codex />} />
                        <Route path="cart" element={<CartComp />} />
                        <Route path="wish_list" element={<WishList />} />
                        <Route path="*" element={<Error />} />
                    </Route>
                </Route>
            </Routes>
        </>
    )
}