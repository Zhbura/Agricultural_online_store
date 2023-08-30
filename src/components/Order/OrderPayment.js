import { InputRadioOrder } from "../Inputs/InputRadioOrder"

export const OrderPayment = () => {
    return (
        <>
            <div className="order__payment">
                <h4 className="order__heading">Оплата</h4>
                <InputRadioOrder text="Наличные" value="cash" />
                <InputRadioOrder text="Оплата картой" value="cardPayment" />
                <InputRadioOrder text="Оплата картой онлайн" value="cardPaymentOnline" />
            </div>
        </>
    )
}