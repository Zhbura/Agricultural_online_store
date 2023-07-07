import { Outlet } from "react-router-dom"
import { BottomBar } from "../BottomBar/BottomBar"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { TopBar } from "../TopBar/TopBar"
import { useSelector } from "react-redux"
import { selectShowFilter } from "../../store/catalog/selectors"
import { selectShowMenu } from "../../store/menu/selectors"

export const Layout = ({total}) => {
    const showFilter = useSelector(selectShowFilter); // нужно для затемнения фона при открытии меню
    const showMenu = useSelector(selectShowMenu);

    return (
        <>
            <div className="wrapper">
                <div className={(showMenu || showFilter) ? "blackout" : ""} />
                <div className="top">
                    <TopBar />
                    <Header total={total} />
                    <BottomBar />
                    <Outlet />
                </div>
                <Footer />
            </div >
        </>
    )
}