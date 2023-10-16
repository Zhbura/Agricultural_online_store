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
                <div className="ordered-products">
                    {orderHistory.map(product => (
                        <OrderedProduct product={product} key={product.id} />
                    ))
                    }
                    {orderHistory.map(product => (
                        <OrderedProductSmall product={product} key={product.id} />
                    ))
                    }
                </div>
            </div>
        </>
    )
}