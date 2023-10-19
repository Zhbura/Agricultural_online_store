import { ButtonForm } from "../Button/ButtonForm";
import { guestData } from '../../store/guest/action';
import './Form.scss';
import { useDispatch } from "react-redux";
import { InputContacts } from "../Inputs/InputContacts";
import { useEffect, useState } from "react";
import { InputComment } from "../Inputs/InputComment";

export const ContactsFormGuest = ({ setMsg, msg }) => {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    // Для отслеживания состояния onBlur - курсор в инпуте или вне инпута
    const [nameDirty, setNameDirty] = useState(false);
    const [surnameDirty, setSurnameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [commentDirty, setCommentDirty] = useState(false);

    // Для вывода ошибки ввода инпута
    const [nameError, setNameError] = useState(`*Обязательное поле для ввода`);
    const [surnameError, setSurnameError] = useState(`*Обязательное поле для ввода`);
    const [emailError, setEmailError] = useState(`*Обязательное поле для ввода`);
    const [phoneError, setPhoneError] = useState(`*Обязательное поле для ввода`);
    const [commentError, setCommentError] = useState(`*Обязательное поле для ввода`);

    // Для валидации всей формы
    const [formValid, setFormValid] = useState(false);

    // Функция для проверки инпутов, если один из инпутов пустой то кнопка будет не доступна
    useEffect(() => {
        if (nameError || surnameError || emailError || phoneError || commentError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [nameError, surnameError, emailError, phoneError, commentError])

    const blurHandler = (e) => {
        switch (e.target.title) {
            case `name`:
                setNameDirty(true)
                break
            case `surname`:
                setSurnameDirty(true)
                break
            case `email`:
                setEmailDirty(true)
                break
            case `phone`:
                setPhoneDirty(true)
                break
            case `comment`:
                setCommentDirty(true)
                break
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(guestData(email, name, surname, phone, comment));

        setName('');
        setSurname('');
        setPhone('');
        setEmail('');
        setComment('');
    }
    const regExpName = /^[А-Я][а-яё]*$/;
    const regExpEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;
    const regExpPhone = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    const regExpComment = /[а-яё0-9a-z]/;
    
    return (
        <>
            <form className="contacts-form" onSubmit={handleSubmit}>
                <div className="contacts-form__wrap-data contacts-form__wrap-data_margin">
                    <div className="contacts-form__wrap-input">
                        {(nameDirty && nameError) &&
                            <p className="contacts-form__error-msg">{nameError}</p>}
                        <InputContacts
                            placeholder="Имя"
                            type="text"
                            value={name}
                            setFunc={setName}
                            title='name'
                            funcBlur={blurHandler}
                            regExp={regExpName}
                            setMsgErr={setNameError}
                        />
                    </div>
                    <div className="contacts-form__wrap-input">
                        {(surnameDirty && surnameError) &&
                            <p className="contacts-form__error-msg">{surnameError}</p>}
                        <InputContacts
                            placeholder="Фамилия"
                            type="text"
                            value={surname}
                            setFunc={setSurname}
                            title='surname'
                            funcBlur={blurHandler}
                            regExp={regExpName}
                            setMsgErr={setSurnameError}
                        />
                    </div>
                </div>
                <div className="contacts-form__wrap-data">
                    <div className="contacts-form__wrap-input">
                        {(phoneDirty && phoneError) &&
                            <p className="contacts-form__error-msg">{phoneError}</p>}
                        <InputContacts
                            placeholder="Телефон"
                            type="text"
                            value={phone}
                            setFunc={setPhone}
                            title='phone'
                            funcBlur={blurHandler}
                            regExp={regExpPhone}
                            setMsgErr={setPhoneError}
                        />
                    </div>
                    <div className="contacts-form__wrap-input">
                        {(emailDirty && emailError) &&
                            <p className="contacts-form__error-msg">{emailError}</p>}
                        <InputContacts
                            placeholder="E-mail"
                            type="email"
                            value={email}
                            setFunc={setEmail}
                            title='email'
                            funcBlur={blurHandler}
                            regExp={regExpEmail}
                            setMsgErr={setEmailError}
                        />
                    </div>
                </div>
                <div className="contacts-form__wrap-input">
                    {(commentDirty && commentError) &&
                        <p className="contacts-form__error-msg">{commentError}</p>}
                    <InputComment
                        placeholder="Комментарий"
                        type="text"
                        value={comment}
                        setFunc={setComment}
                        title='comment'
                        funcBlur={blurHandler}
                        regExp={regExpComment}
                        setMsgErr={setCommentError}
                    />
                </div>
                <ButtonForm setMsg={setMsg} msg={msg} formValid={formValid} >Отправить</ButtonForm>
            </form>
        </>
    )
}