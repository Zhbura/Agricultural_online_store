import './Form.scss';
import { useDispatch, useSelector } from "react-redux";
import { selectUserRegistered } from "../../store/registration/selectors";
import { orderComment } from '../../store/order/action';
import { selectUserOrder } from '../../store/order/selectors';

export const OrderFormRegistered = () => {
    const dispatch = useDispatch();

    const { name, surname, phone, email } = useSelector(selectUserRegistered);
    const { comment } = useSelector(selectUserOrder);

    return (
        <>
            <form className="contacts-form" onSubmit={(e) => e.preventDefault()}>
                <div className="contacts-form__wrap-data">
                    <p className="input-data" >{name} </p>
                    <p className="input-data"> {surname}</p>
                </div>
                <div className="contacts-form__wrap-data">
                    <p className="input-data"> {phone}</p>
                    <p className="input-data"> {email}</p>
                </div>
                <input className="contacts-form__comment" type="text" placeholder="Комментарий"
                    value={comment} onChange={(e) => dispatch(orderComment(e.target.value))} />
            </form>
        </>
    )
}