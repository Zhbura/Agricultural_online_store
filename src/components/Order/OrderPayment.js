import { InputRadioOrder } from "../Inputs/InputRadioOrder"

export const OrderPayment = ({setPaymentCheckedValid, paymentCheckedValid}) => {

    const changePaymentChecked = (e) => {
        setPaymentCheckedValid(e.target.value)
    }

    return (
        <>
            <div className="order__payment">
                <h4 className="order__heading">Оплата</h4>
                <InputRadioOrder
                    text="Наличные"
                    value="cash"
                    paymentCheckedValid={paymentCheckedValid}
                    changePaymentChecked={changePaymentChecked}
                />
                <InputRadioOrder
                    text="Оплата картой"
                    value="cardPayment"
                    paymentCheckedValid={paymentCheckedValid}
                    changePaymentChecked={changePaymentChecked}
                />
                <InputRadioOrder
                    text="Оплата картой онлайн"
                    value="cardPaymentOnline"
                    paymentCheckedValid={paymentCheckedValid}
                    changePaymentChecked={changePaymentChecked}
                />
            </div>
        </>
    )
}