
import './Form.scss';
import { guestData } from '../../store/guest/action';
import { selectUserRegistered } from '../../store/registration/selectors';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { ButtonContacts } from '../Button/ButtonContacts';
import { ContactsInputsReg } from './ContactsInputsReg.js'

export const ContactsFormRegistered = ({ setMsg, msg }) => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(guestData(email, name, surname, phone, comment));

        setComment('');
    }

    const { name, surname, phone, email } = useSelector(selectUserRegistered);
    const [comment, setComment] = useState('');

    const [formValid, setFormValid] = useState(false);

    return (
        <>
            <form className="contacts-form" onSubmit={handleSubmit}>
                <ContactsInputsReg
                    email={email}
                    name={name}
                    surname={surname}
                    phone={phone}
                    comment={comment}
                    setComment={setComment}
                    setFormValid={setFormValid}
                />
                <ButtonContacts setMsg={setMsg} msg={msg} formValid={formValid}>Отправить</ButtonContacts>
            </form>
        </>
    )
}