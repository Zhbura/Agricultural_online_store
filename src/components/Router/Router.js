import { Link, Route, Routes } from "react-router-dom";
import { Main } from "../Main/Main";
import { Product } from "../Product/Product";
import { Order } from "../Order/Order";
import { ThanksOrder } from "../ThanksOrder/ThanksOrder";
import { AboutСompany } from "../AboutСompany/AboutСompany";
import { TeamCompany } from "../TeamCompany/TeamCompany";
import { Agreement } from "../Agreement/Agreement";
import { CatalogPlantProtection } from "../CatalogProduct/CatalogPlantProtection";
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

export const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="product" element={<Product />} />
                    <Route path="order" element={<Order />} />
                    <Route path="thanks_order" element={<ThanksOrder />} />
                    <Route path="aboutcompany" element={<AboutСompany />} />
                    <Route path="teemcompany" element={<TeamCompany />} />
                    <Route path="agreement" element={<Agreement />} />
                    <Route path="catalog_plant_protection" element={<CatalogPlantProtection title="Средства защиты растений" />} />
                    <Route path="pay" element={<Pay />} />
                    <Route path="partners" element={<PartnersComp />} />
                    <Route path="news" element={<News />} />
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="registration" element={<Registration />} />
                    <Route path="plantprotection" element={<PlantProtection />} />
                    <Route path="catalog_seeds" element={<CatalogPlantProtection title="Семена" />} />
                    <Route path="catalog_fertilizers" element={<CatalogPlantProtection title="Удобрения" />} />
                    <Route path="catalog_feed_group" element={<CatalogPlantProtection title="Кормовая группа" />} />
                    <Route path="catalog_farmer_help" element={<CatalogPlantProtection title="Агроному в помощь" />} />
                    <Route path="personal_account" element={<PersonalAccount />}>
                        <Route index element={<Cabinet />} />
                        <Route path="current_orders" element={<CurrentOrders />} />
                        <Route path="personal_data" element={<PersonalData />} />
                        <Route path="order_history" element={<OrderHistory />} />
                        <Route path="change_password" element={<ChangePassword />} />
                    </Route>
                    <Route path="privacypolicy" element={<PrivacyPolicy />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </>
    )
}