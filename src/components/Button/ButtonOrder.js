import { Link } from "react-router-dom"

export const ButtonOrder = ({ sendOrderData }) => {
    return (
        <>
            <div className="order__confirm" onClick={() => sendOrderData()}>
                <Link to="/thanks_order" className="order__link">Подтвердить заказ</Link>
            </div>
        </>
    )
}