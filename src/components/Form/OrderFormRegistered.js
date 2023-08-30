import './Form.scss';
import { useSelector } from "react-redux";
import { selectUserRegistered } from "../../store/registration/selectors";

export const OrderFormRegistered = () => {

    const { name, surname, phone, email } = useSelector(selectUserRegistered);

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
        </>
    )
}