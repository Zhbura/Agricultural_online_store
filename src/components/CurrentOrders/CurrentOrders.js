import './CurrentOrders.scss';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { OrderedProduct, OrderedProductSmall } from '../OrderedProduct/OrderedProduct';
import { useSelector } from 'react-redux';
import { selectCurrentOrders } from '../../store/orderProducts/selectors';
import { useState } from 'react';

export const CurrentOrders = () => {
    const breadcrumbs = [
        {
            name: "Личный кабинет",
            to: "/Agricultural_online_store/personal_account"
        },
        {
            name: "Текущие заказы",
            to: "/Agricultural_online_store/current_orders"
        },
    ];

    const [showStatus] = useState(true);
    const currentOrders = useSelector(selectCurrentOrders);

    return (
        <>
            <div className="current-orders">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <PageHeadingTwice>Текущие заказы</PageHeadingTwice>
                {currentOrders.length === 0 &&
                    <h3 className="order-history__text">
                        У вас нет текущих заказов!
                    </h3>
                }
                <div className="ordered-products">
                    {currentOrders.map((product, index) => (
                        <OrderedProduct product={product} key={index} showStatus={showStatus} />
                    ))}

                    {currentOrders.map((product, index) => (
                        <OrderedProductSmall product={product} key={index} showStatus={showStatus} />
                    ))}
                </div>
            </div>
        </>
    )
}