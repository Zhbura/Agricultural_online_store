import { Outlet } from "react-router-dom"
import { BottomBar } from "../BottomBar/BottomBar"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { TopBar } from "../TopBar/TopBar"

export const Layout = () => {
    return (
        <>
            <div className="wrapper">
                <div className="top">
                    <TopBar />
                    {/* <div className="container-for-background"> */}
                    <Header />
                    <BottomBar />
                    <Outlet />
                    {/* </div> */}
                </div>
                <Footer />
            </div >
        </>
    )
}