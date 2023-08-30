import { InputContacts } from "../Inputs/InputContacts"

export const OrderFormGuest = ({ orderName, setName, orderSurname, setSurname,
    orderPhone, setPhone, orderEmail, setEmail }) => {
    return (
        <>
            <div className="contacts-form__wrap-data">
                <InputContacts placeholder="Имя" type="text" value={orderName} setFunc={setName} />
                <InputContacts placeholder="Фамилия" type="text" value={orderSurname} setFunc={setSurname} />
            </div>
            <div className="contacts-form__wrap-data">
                <InputContacts placeholder="Телефон" type="text" value={orderPhone} setFunc={setPhone} />
                <InputContacts placeholder="E-mail" type="email" value={orderEmail} setFunc={setEmail} />
            </div>
        </>
    )
}