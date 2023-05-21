import './App.scss';
import { BottomBar } from './components/BottomBar/BottomBar';
import { BrandWrap } from './components/BrandWrap/BrandWrap';
import { Header } from "./components/Header/Header"
import { InfoCompany } from './components/InfoCompany/InfoCompany';
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
        </div>
      </div >
    </>
  )
}