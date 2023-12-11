import { BottomBar } from '../BottomBar/BottomBar';
import { BrandWrap } from '../BrandWrap/BrandWrap';
import { Header } from '../Header/Header';
import { InfoCompany } from '../InfoCompany/InfoCompany';
import { NewProducts } from '../NewProducts/NewProducts';
import { Partners } from '../Partners/Partners';
import { Seeds } from '../Seeds/Seeds';
import { Stocks } from '../Stocks/Stocks';

export const Main = () => {

    return (
        <>
            <div className='background-container'>
                <Header />
                <BottomBar />
                <BrandWrap />
            </div>
            <InfoCompany />
            <NewProducts />
            <Stocks />
            <Partners />
            <Seeds />
        </>
    )
}