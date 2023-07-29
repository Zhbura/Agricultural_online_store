import { BrandWrap } from '../BrandWrap/BrandWrap';
import { InfoCompany } from '../InfoCompany/InfoCompany';
import { NewProducts } from '../NewProducts/NewProducts';
import { Partners } from '../Partners/Partners';
import { Seeds } from '../Seeds/Seeds';
import { Stocks } from '../Stocks/Stocks';

export const Main = ({ products, addToWishList }) => {

    return (
        <>
            <BrandWrap />
            <InfoCompany />
            <NewProducts products={products} addToWishList={addToWishList} />
            <Stocks products={products} addToWishList={addToWishList} />
            <Partners />
            <Seeds />
        </>
    )
}