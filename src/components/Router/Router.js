import { Route, Routes } from "react-router-dom";
import { Main } from "../Main/Main";
import { Product } from "../Product/Product";
import { Order } from "../Order/Order";
import { ThanksOrder } from "../ThanksOrder/ThanksOrder";
import { AboutСompany } from "../AboutСompany/AboutСompany";
import { TeamCompany } from "../TeamCompany/TeamCompany";

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
            </Routes>
        </>
    )
}