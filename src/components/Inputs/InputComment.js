export const InputComment = ({ placeholder, type, value, setFunc, title, funcBlur, regExp, setMsgErr }) => {

    const changeInput = (e) => {
        setFunc(e.target.value);

        if (!regExp.test(e.target.value)) {
            setMsgErr(`Поле введено некорректно!`)
        } else {
            setMsgErr('')
        }
    }

    return (
        <>
            <input className="contacts-form__comment" title={title}  type={type} placeholder={placeholder}
                value={value} onChange={changeInput} onBlur={e => funcBlur(e)} />
        </>
    )
}