
import './Form.scss';
import { useEffect, useState } from 'react';
import { InputComment } from '../Inputs/InputComment';

export const ContactsInputsReg = ({ setFormValid, name, surname, phone, email, comment, setComment }) => {

    const [commentDirty, setCommentDirty] = useState(false);

    const [commentError, setCommentError] = useState(`*Обязательное поле для ввода`);

    useEffect(() => {
        if (commentError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [commentError])

    const blurHandler = (e) => {
        switch (e.target.title) {
            case `comment`:
                setCommentDirty(true)
                break
        }
    }

    const regExpComment = /[а-яё0-9a-z]/;

    return (
        <>
            <div className="contacts-form__wrap-data">
                <p className="input-data" >{name} </p>
                <p className="input-data"> {surname}</p>
            </div>
            <div className="contacts-form__wrap-data">
                <p className="input-data"> {phone}</p>
                <p className="input-data"> {email}</p>
            </div>
            <div className="wrap-input">
                {(commentDirty && commentError) &&
                    <p className="wrap-input__error-msg">{commentError}</p>}
                <InputComment
                    placeholder="Комментарий"
                    type="text"
                    value={comment}
                    setFunc={setComment}
                    title='comment'
                    funcBlur={blurHandler}
                    regExp={regExpComment}
                    setMsgErr={setCommentError}
                />
            </div>
        </>
    )
}