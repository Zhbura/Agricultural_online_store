import { Route, Routes } from "react-router-dom";
import { Main } from "../Main/Main";
import { Product } from "../Product/Product";

export const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="product" element={<Product />} />
            </Routes>
        </>
    )
}