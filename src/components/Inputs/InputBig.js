import './Inputs.scss';

export const InputBig = ({ placeholder, type, value, setFunc, title, funcBlur,
    regExp, setMsgErr, passwordDirty, passConfirmDirty, setPassComparison, passConfirm }) => {

    const changeInput = (e) => {
        setFunc(e.target.value);

        if (!regExp.test(e.target.value)) {
            setMsgErr(`Поле введено некорректно!`)
        } else {
            setMsgErr('')
        }
        
// Для проверки совпадения паролей после того как пароль решат дописать
        if (passwordDirty && passConfirmDirty) {
            (String(e.target.value) === String(passConfirm)) ? setPassComparison(true) : setPassComparison(false)
        }
    }

    return (
        <>
            <input className="input-big" title={title} type={type} placeholder={placeholder}
                value={value} onChange={changeInput}
                onBlur={e => funcBlur(e)}
            />

        </>
    )
}