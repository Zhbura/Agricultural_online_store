import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { TopBar } from "../TopBar/TopBar";
import { useSelector } from "react-redux";
import { selectShowFilter } from "../../store/catalog/selectors";
import { selectShowMenu } from "../../store/menu/selectors";

export const LayoutTop = ({ authed }) => {
    const showFilter = useSelector(selectShowFilter); // нужно для затемнения фона при открытии меню
    const showMenu = useSelector(selectShowMenu);

    return (
        <>
            <div className="wrapper">
                <div className={(showMenu || showFilter) ? "blackout" : ""} />
                <div className="top">
                    <TopBar authed={authed} />
                    <Outlet />
                </div>
                <Footer />
            </div >
        </>
    )
}