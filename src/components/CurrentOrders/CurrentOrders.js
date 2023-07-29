import './CurrentOrders.scss';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { OrderedProduct, OrderedProductSmall } from '../OrderedProduct/OrderedProduct';

export const CurrentOrders = () => {
    const breadcrumbs = [
        {
            name: "Личный кабинет",
            to: "/personal_account"
        },
        {
            name: "Текущие заказы",
            to: "/current_orders"
        },
    ];

    return (
        <>
            <div className="current-orders">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <PageHeadingTwice>Текущие заказы</PageHeadingTwice>
                <div className="ordered-products">
                    <OrderedProduct paid={true} />
                    <OrderedProduct away={true} />
                    <OrderedProduct completed={true} />
                    <OrderedProductSmall paid={true} />
                    <OrderedProductSmall away={true} />
                    <OrderedProductSmall completed={true} />
                </div>
            </div>
        </>
    )
}