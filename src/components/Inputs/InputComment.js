export const InputComment = ({ placeholder, type, value, setFunc }) => {

    const changeInput = (e) => {
        setFunc(e.target.value);
    }

    return (
        <>
            <input className="contacts-form__comment" type={type} placeholder={placeholder}
                value={value} onChange={changeInput} />
        </>
    )
}