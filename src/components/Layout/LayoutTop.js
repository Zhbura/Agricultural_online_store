import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { TopBar } from "../TopBar/TopBar";
import { useSelector } from "react-redux";
import { selectShowFilter } from "../../store/catalogPpp/selectors";
import { selectShowMenu } from "../../store/menu/selectors";
import { selectShowSlider } from "../../store/slider/selectors";

export const LayoutTop = ({ authed }) => {
    const showFilter = useSelector(selectShowFilter); // нужно для затемнения фона при открытии меню
    const showMenu = useSelector(selectShowMenu);
    const showSlider = useSelector(selectShowSlider);

    return (
        <>
            <div className="wrapper">
                <div className={(showMenu || showFilter || showSlider) ? "blackout" : ""} />
                <div className="top">
                    <TopBar authed={authed} />
                    <Outlet />
                </div>
                <Footer />
            </div >
        </>
    )
}