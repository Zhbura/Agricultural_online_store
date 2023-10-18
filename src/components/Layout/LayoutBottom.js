import { Outlet } from "react-router-dom"
import { BottomBar } from "../BottomBar/BottomBar"
import { Header } from "../Header/Header"

export const LayoutBottom = () => {

    return (
        <>
            <Header />
            <BottomBar />
            <Outlet />
        </>
    )
}