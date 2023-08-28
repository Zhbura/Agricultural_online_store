import { useState } from "react";
import { useDispatch } from "react-redux";
import pencil from '../../img/pencilCorrect.svg';

export const InputBox = ({ text, value, dispatchRegister }) => {
    const dispatch = useDispatch();
    const [user, setUser] = useState(true);
    return (
        <>
            <div className="input-box"> {text}
                <div className="input-box__input">
                    {!user ?
                        <input type="text" value={value} onChange={(e) => dispatch(dispatchRegister(e.target.value))} />
                        :
                        <div className="input-box__data">
                            <p>{value}</p>
                            <img className="input-box__img" src={pencil} alt="Исправить данные" onClick={() => setUser(false)} />
                        </div>
                    }
                </div>
            </div>
        </>
    )
}