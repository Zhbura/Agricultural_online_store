import { BrandWrap } from '../BrandWrap/BrandWrap';
import { InfoCompany } from '../InfoCompany/InfoCompany';
import { NewProducts } from '../NewProducts/NewProducts';
import { Partners } from '../Partners/Partners';
import { Seeds } from '../Seeds/Seeds';
import { Stocks } from '../Stocks/Stocks';

export const Main = () => {
    return (
        <>
            <BrandWrap />
            <InfoCompany />
            <NewProducts />
            <Stocks />
            <Partners />
            <Seeds />
        </>
    )
}