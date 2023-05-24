import { Route, Routes } from "react-router-dom";
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

export const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="product" element={<Product />} />
                <Route path="order" element={<Order />} />
                <Route path="thanks_order" element={<ThanksOrder />} />
                <Route path="aboutcompany" element={<AboutСompany />} />
                <Route path="teemcompany" element={<TeamCompany />} />
                <Route path="agreement" element={<Agreement />} />
                <Route path="catalog_plant_protection" element={<CatalogPlantProtection />} />
                <Route path="pay" element={<Pay />} />
                <Route path="partners" element={<PartnersComp />} />
                <Route path="news" element={<News />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="registration" element={<Registration />} />
            </Routes>
        </>
    )
}