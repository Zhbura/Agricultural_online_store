import { PageHeadingTwice } from '../PageHeading/PageHeading';
import './OrderHistory.scss';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { OrderedProduct, OrderedProductSmall } from '../OrderedProduct/OrderedProduct';
import { useSelector } from 'react-redux';
import { selectHistoryOrders } from '../../store/orderProducts/selectors';
import { useState } from 'react';

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

    const [showStatus] = useState(false);

    const orderHistory = useSelector(selectHistoryOrders);

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
                        <OrderedProduct product={product} key={index} showStatus={showStatus} />
                    ))}

                    {orderHistory.map((product, index) => (
                        <OrderedProductSmall product={product} key={index} showStatus={showStatus} />
                    ))}
                </div>
            </div>
        </>
    )
}