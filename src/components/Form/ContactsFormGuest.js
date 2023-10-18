import { ButtonForm } from "../Button/ButtonForm";
import { guestData } from '../../store/guest/action';
import './Form.scss';
import { useDispatch } from "react-redux";
import { InputContacts } from "../Inputs/InputContacts";
import { useState } from "react";
import { InputComment } from "../Inputs/InputComment";

export const ContactsFormGuest = ({ setMsg, msg }) => {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');


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
                <div className="contacts-form__wrap-data">
                    <InputContacts placeholder="Имя" type="text" value={name} setFunc={setName} />
                    <InputContacts placeholder="Фамилия" type="text" value={surname} setFunc={setSurname} />
                </div>
                <div className="contacts-form__wrap-data">
                    <InputContacts placeholder="Телефон" type="text" value={phone} setFunc={setPhone} />
                    <InputContacts placeholder="E-mail" type="email" value={email} setFunc={setEmail} />
                </div>
                <InputComment placeholder="Комментарий" type="text" value={comment} setFunc={setComment} />
                <ButtonForm setMsg={setMsg} msg={msg}>Отправить</ButtonForm>
            </form>
        </>
    )
}