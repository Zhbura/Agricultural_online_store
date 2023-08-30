export const InputRadioOrder = ({ text, value }) => {
    return (
        <>
            <label className="input-wrap order__text">{text}
                <input type="radio" name="payment" value={value} />
                <span className="checkmark" />
            </label>
        </>
    )
}