
import './Form.scss';
import { ButtonForm } from "../Button/ButtonForm";
import {
    guestRegisterComment,
    guestRegisterEmail,
    guestRegisterName,
    guestRegisterPhone,
    guestRegisterSurname
} from '../../store/guest/action';
import { selectUserRegistered } from '../../store/registration/selectors';
import { useDispatch, useSelector } from "react-redux";
import { selectGuest } from "../../store/guest/selectors";

export const ContactsFormRegistered = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(guestRegisterName(name))
        dispatch(guestRegisterSurname(surname))
        dispatch(guestRegisterPhone(phone))
        dispatch(guestRegisterEmail(email))
    }

    const { name, surname, phone, email } = useSelector(selectUserRegistered);

    const { comment } = useSelector(selectGuest);


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
                <input className="contacts-form__comment" type="text" placeholder="Комментарий"
                    value={comment} onChange={(e) => dispatch(guestRegisterComment(e.target.value))}
                />
                <ButtonForm>Отправить</ButtonForm>
            </form>
        </>
    )
}