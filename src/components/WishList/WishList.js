import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { ProductCard } from '../ProductСard/ProductСard';
import './WishList.scss';

export const WishList = ({ wishList, setWishList, addToCart }) => {

    const deleteProductWishList = (id) => {
        setWishList((wishList) => wishList.filter((product) => id !== product.id));
    }

    return (
        <>
            <div className="wish-list">
                <PageHeadingTwice>Список желаний</PageHeadingTwice>
                <span className="wish-list__separator-horizontal" />
                {wishList.length === 0 ?
                    (<h3 className="wish-list__text">Ваш список желаний пуст!</h3>) :
                    (<div className="wish-list__items">
                        {wishList.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                deleteProductWishList={deleteProductWishList}
                                addToCart={addToCart}
                            />
                        ))}
                    </div>)
                }
                <span className="wish-list__separator-horizontal" />
            </div>
        </>
    )
}