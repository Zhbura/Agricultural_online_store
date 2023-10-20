import { useState } from "react";

export const InputPassConfirm = ({ value, setFunc, password, passСomparison,
    setPassComparison, title, funcBlur, regExp, setMsgErr }) => {

    const [msg, setMsg] = useState(false)
    const changeInput = (e) => {
        setFunc(e.target.value);
        setMsg(true)
        if (String(password) === String(e.target.value)) {
            setPassComparison(true)
        } else {
            setPassComparison(false)
        }

        if (!regExp.test(e.target.value)) {
            setMsgErr(`Поле введено некорректно!`)
        } else {
            setMsgErr('')
        }
    }

    return (
        <>
            <div className="password-confirm">
                <input className="password-confirm__input"
                    type="password"
                    placeholder="Подтвердите пароль"
                    value={value}
                    onChange={changeInput}
                    title={title}
                    onBlur={e => funcBlur(e)}
                />
                {msg &&
                    <span> {passСomparison ?
                        <span className="password-confirm__img-yes" >&#10003;</span> :
                        <span className="password-confirm__img-no" >&times;</span>}
                    </span>
                }
            </div>
        </>
    )
}