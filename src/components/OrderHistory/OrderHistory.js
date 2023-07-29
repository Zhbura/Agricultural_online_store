import { PageHeadingTwice } from '../PageHeading/PageHeading';
import './OrderHistory.scss';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { OrderedProduct, OrderedProductSmall } from '../OrderedProduct/OrderedProduct';

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
    return (
        <>
            <div className="order-history">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <PageHeadingTwice>История заказов</PageHeadingTwice>
                <div className="ordered-products">
                    <OrderedProduct />
                    <OrderedProduct />
                    <OrderedProduct />
                    <OrderedProductSmall />
                    <OrderedProductSmall />
                    <OrderedProductSmall />
                </div>
            </div>
        </>
    )
}