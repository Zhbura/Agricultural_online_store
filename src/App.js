import './App.scss';
import { BottomBar } from './components/BottomBar/BottomBar';
import { BrandWrap } from './components/BrandWrap/BrandWrap';
import { Footer } from './components/Footer/Footer';
import { Header } from "./components/Header/Header"
import { InfoCompany } from './components/InfoCompany/InfoCompany';
import { NewProducts } from './components/NewProducts/NewProducts';
import { Partners } from './components/Partners/Partners';
import { Seeds } from './components/Seeds/Seeds';
import { Stocks } from './components/Stocks/Stocks';
import { TopBar } from './components/TopBar/TopBar';

export const App = () => {
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