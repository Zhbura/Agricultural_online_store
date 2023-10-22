import { guestData } from '../../store/guest/action';
import './Form.scss';
import { useDispatch } from "react-redux";
import {  useState } from "react";
import { ButtonContacts } from "../Button/ButtonContacts";
import { ContactsInputs } from './ContactsInputs';

export const ContactsFormGuest = ({ setMsg, msg }) => {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    // Для валидации всей формы
    const [formValid, setFormValid] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(guestData(email, name, surname, phone, comment));

        setName('');
        setSurname('');
        setPhone('');
        setEmail('');
        setComment('');
    }

    return (
        <>
            <form className="contacts-form" onSubmit={handleSubmit}>
                <ContactsInputs
                    email={email} name={name} surname={surname} phone={phone}
                    comment={comment}
                    setEmail={setEmail} setName={setName} setSurname={setSurname}
                    setPhone={setPhone} setComment={setComment}
                    setFormValid={setFormValid}
                />
                <ButtonContacts setMsg={setMsg} msg={msg} formValid={formValid}>Отправить</ButtonContacts>
            </form>
        </>
    )
}