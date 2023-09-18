
import './Form.scss';
import { ButtonForm } from "../Button/ButtonForm";
import { guestData } from '../../store/guest/action';
import { selectUserRegistered } from '../../store/registration/selectors';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { InputComment } from '../Inputs/InputComment';
import { set } from 'firebase/database';
import {
    guestCommentRef,
    guestEmailRef,
    guestNameRef,
    guestPhoneRef,
    guestSurnameRef
} from '../../services/firebase';


export const ContactsFormRegistered = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        set(guestNameRef, name)
        set(guestSurnameRef, surname)
        set(guestPhoneRef, phone)
        set(guestEmailRef, email)
        set(guestCommentRef, comment)

        dispatch(guestData(email, name, surname, phone, comment));

        setComment('');
    }

    const { name, surname, phone, email } = useSelector(selectUserRegistered);

    const [comment, setComment] = useState('');

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
                <InputComment placeholder="Комментарий" type="text" value={comment} setFunc={setComment} />
                <ButtonForm>Отправить</ButtonForm>
            </form>
        </>
    )
}