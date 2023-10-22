export const InputRadioOrder = ({ text, value, paymentCheckedValid, changePaymentChecked }) => {

    return (
        <>
            <label className="input-wrap order__text">{text}
                <input type="radio" name="payment" value={value}
                    checked={paymentCheckedValid == value ? true : false}
                    onChange={changePaymentChecked} />
                <span className="checkmark" />
            </label>
        </>
    )
}