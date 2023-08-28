import './Form.scss';
import {
    orderComment,
    orderEmail,
    orderName,
    orderPhone,
    orderSurname
} from '../../store/order/action';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserOrder } from '../../store/order/selectors';


export const OrderFormGuest = () => {
    const { name, surname, phone, email, comment } = useSelector(selectUserOrder);

    const dispatch = useDispatch();

    return (
        <>
            <form className="contacts-form" onSubmit={(e) => e.preventDefault()}>
                <div className="contacts-form__wrap-data">
                    <input className="input-data" type="text" placeholder="Имя"
                        value={name} onChange={(e) => dispatch(orderName(e.target.value))} />
                    <input className="input-data" type="text" placeholder="Фамилия"
                        value={surname} onChange={(e) => dispatch(orderSurname(e.target.value))} />
                </div>
                <div className="contacts-form__wrap-data">
                    <input className="input-data" type="text" placeholder="Телефон"
                        value={phone} onChange={(e) => dispatch(orderPhone(e.target.value))} />
                    <input className="input-data" type="email" placeholder="E-mail"
                        value={email} onChange={(e) => dispatch(orderEmail(e.target.value))} />
                </div>
                <input className="contacts-form__comment" type="text" placeholder="Комментарий"
                    value={comment} onChange={(e) => dispatch(orderComment(e.target.value))} />
            </form>
        </>
    )
}