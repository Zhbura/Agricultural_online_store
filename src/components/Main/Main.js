import { BottomBar } from '../BottomBar/BottomBar';
import { BrandWrap } from '../BrandWrap/BrandWrap';
import { Footer } from '../Footer/Footer';
import { Header } from "../Header/Header"
import { InfoCompany } from '../InfoCompany/InfoCompany';
import { NewProducts } from '../NewProducts/NewProducts';
import { Partners } from '../Partners/Partners';
import { Seeds } from '../Seeds/Seeds';
import { Stocks } from '../Stocks/Stocks';
import { TopBar } from '../TopBar/TopBar';

export const Main = () => {
    return (
        <>
            <div className="wrapper">
                <div className="top">
                    <TopBar />
                    <div className="container-for-background">
                        <Header />
                        <BottomBar />
                        <BrandWrap />
                    </div>
                    <InfoCompany />
                    <NewProducts />
                    <Stocks />
                    <Partners />
                    <Seeds />
                </div>
                <Footer />
            </div >
        </>
    )
}