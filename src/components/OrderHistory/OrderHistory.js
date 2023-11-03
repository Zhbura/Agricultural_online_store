import { PageHeadingTwice } from '../PageHeading/PageHeading';
import './OrderHistory.scss';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { OrderedProduct, OrderedProductSmall } from '../OrderedProduct/OrderedProduct';
import { useSelector } from 'react-redux';
import { selectHistoryOrder } from '../../store/historyOrder/selectors';

export const OrderHistory = () => {
    const breadcrumbs = [
        {
            name: "Личный кабинет",
            to: "/personal_account"
        },
        {
            name: "История заказов",
            to: "/order_history"
        },
    ];

    const orderHistory = useSelector(selectHistoryOrder);

    return (
        <>
            <div className="order-history">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <PageHeadingTwice>История заказов</PageHeadingTwice>
                {orderHistory.length === 0 &&
                    <h3 className="order-history__text">
                        Вы ещё не совершили покупок, поэтому ваша история заказов пуста!
                    </h3>}
                <div className="ordered-products">
                    {orderHistory.map((product, index) => (
                        <OrderedProduct product={product} key={index} />
                    ))}

                    {orderHistory.map((product, index) => (
                        <OrderedProductSmall product={product} key={index} />
                    ))}
                </div>
            </div>
        </>
    )
}