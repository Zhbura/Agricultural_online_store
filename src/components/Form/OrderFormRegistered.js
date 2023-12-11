import './Form.scss';
import { useSelector } from "react-redux";
import { selectUserRegistered } from "../../store/registration/selectors";
import { ContactsInputsReg } from './ContactsInputsReg';
import { useState } from 'react';

export const OrderFormRegistered = ({ setInputContactValid }) => {

    const { name, surname, phone, email } = useSelector(selectUserRegistered);
    const [comment, setComment] = useState('');

    return (
        <>
            <ContactsInputsReg
                email={email}
                name={name}
                surname={surname}
                phone={phone}
                comment={comment}
                setComment={setComment}
                setFormValid={setInputContactValid}
            />
        </>
    )
}