import { Outlet } from "react-router-dom"
import { BottomBar } from "../BottomBar/BottomBar"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { TopBar } from "../TopBar/TopBar"
import { useSelector } from "react-redux"
import { selectShowFilter } from "../../store/catalog/selectors"

export const Layout = () => {
    const showFilter = useSelector(selectShowFilter); // нужно для затемнения фона при открытии меню

    return (
        <>
            <div className="wrapper">
                <div className={showFilter ? "" : "blackout"} />
                <div className="top">
                    <TopBar />
                    <Header />
                    <BottomBar />
                    <Outlet />
                </div>
                <Footer />
            </div >
        </>
    )
}