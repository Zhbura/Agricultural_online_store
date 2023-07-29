import { BrandWrap } from '../BrandWrap/BrandWrap';
import { InfoCompany } from '../InfoCompany/InfoCompany';
import { NewProducts } from '../NewProducts/NewProducts';
import { Partners } from '../Partners/Partners';
import { Seeds } from '../Seeds/Seeds';
import { Stocks } from '../Stocks/Stocks';

export const Main = ({ products, addToCart, addToWishList }) => {

    return (
        <>
            <BrandWrap />
            <InfoCompany />
            <NewProducts products={products} addToCart={addToCart} addToWishList={addToWishList} />
            <Stocks products={products} addToCart={addToCart} addToWishList={addToWishList} />
            <Partners />
            <Seeds />
        </>
    )
}