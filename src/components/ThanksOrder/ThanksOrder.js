import { PageHeadingTwice } from '../PageHeading/PageHeading';
import './ThanksOrder.scss';
import { Cart } from '../SVG/Icon/Cart';
import { Link } from 'react-router-dom';

export const ThanksOrder = () => {
    return (
        <>
            <div className="thanks">
                <div className="container">
                    <div className="page-heading page-heading_white">
                        <PageHeadingTwice>Спасибо за заказ</PageHeadingTwice>
                    </div>
                    <div className="thanks__text">Наш менеджер свяжется с вами скоро и отправит вам заказ</div>
                    <div className="thanks__btn">
                        <div className="btn-cart btn-cart_orange icon_white">
                            <Link to="/catalog" className="btn-cart__link"><Cart /> Продолжить покупки</Link>
                        </div>
                        <div className="btn-cart btn-cart_white thanks__btn_margin">
                            <Link to='/' className="btn-cart__link">Вернуться на главную</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}