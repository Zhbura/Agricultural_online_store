
import './Form.scss';
import { guestData } from '../../store/guest/action';
import { selectUserRegistered } from '../../store/registration/selectors';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { InputComment } from '../Inputs/InputComment';
import { ButtonContacts } from '../Button/ButtonContacts';

export const ContactsFormRegistered = ({ setMsg, msg }) => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(guestData(email, name, surname, phone, comment));

        setComment('');
    }

    const { name, surname, phone, email } = useSelector(selectUserRegistered);

    const [comment, setComment] = useState('');

    const [commentDirty, setCommentDirty] = useState(false);

    const [commentError, setCommentError] = useState(`*Обязательное поле для ввода`);

    const [formValid, setFormValid] = useState(false);

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
            <form className="contacts-form" onSubmit={handleSubmit}>
                <div className="contacts-form__wrap-data">
                    <p className="input-data" >{name} </p>
                    <p className="input-data"> {surname}</p>
                </div>
                <div className="contacts-form__wrap-data">
                    <p className="input-data"> {phone}</p>
                    <p className="input-data"> {email}</p>
                </div>
                <div className="contacts-form__wrap-input">
                    {(commentDirty && commentError) &&
                        <p className="contacts-form__error-msg">{commentError}</p>}
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
                <ButtonContacts setMsg={setMsg} msg={msg} formValid={formValid}>Отправить</ButtonContacts>
            </form>
        </>
    )
}