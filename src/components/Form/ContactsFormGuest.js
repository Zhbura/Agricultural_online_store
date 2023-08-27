import { ButtonForm } from "../Button/ButtonForm";
import { selectGuest } from '../../store/guest/selectors';
import {
    guestRegisterComment,
    guestRegisterEmail,
    guestRegisterName,
    guestRegisterPhone,
    guestRegisterSurname
} from '../../store/guest/action';
import './Form.scss';
import { useDispatch, useSelector } from "react-redux";

export const ContactsFormGuest = () => {
    const { name, surname, phone, email, comment } = useSelector(selectGuest);

    const dispatch = useDispatch();

    return (
        <>
            <form className="contacts-form" onSubmit={(e) => e.preventDefault()}>
                <div className="contacts-form__wrap-data">
                    <input className="input-data" type="text" placeholder='Имя'
                        value={name} onChange={(e) => dispatch(guestRegisterName(e.target.value))} />
                    <input className="input-data" type="text" placeholder="Фамилия"
                        value={surname} onChange={(e) => dispatch(guestRegisterSurname(e.target.value))} />
                </div>
                <div className="contacts-form__wrap-data">
                    <input className="input-data" type="text" placeholder="Телефон"
                        value={phone} onChange={(e) => dispatch(guestRegisterPhone(e.target.value))} />
                    <input className="input-data" type="email" placeholder="E-mail"
                        value={email} onChange={(e) => dispatch(guestRegisterEmail(e.target.value))}
                    />
                </div>
                <input className="contacts-form__comment" type="text" placeholder="Комментарий"
                    value={comment} onChange={(e) => dispatch(guestRegisterComment(e.target.value))}
                />
                <ButtonForm>Отправить</ButtonForm>
            </form>
        </>
    )
}