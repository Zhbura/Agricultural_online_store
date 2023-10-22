import { InputComment } from "../Inputs/InputComment"
import { InputContacts } from "../Inputs/InputContacts"
import { useEffect, useState } from "react";

export const ContactsInputs = ({ email, name, surname, phone, comment,
    setEmail, setName, setSurname, setPhone, setComment,
    setFormValid, setInputContactValid }) => {

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

    // Функция для проверки инпутов, если один из инпутов пустой то кнопка будет не доступна
    useEffect(() => {
        if (nameError || surnameError || emailError || phoneError || commentError) {
            setFormValid(false)
            setInputContactValid(false)
        } else {
            setFormValid(true)
            setInputContactValid(true)
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

    const regExpName = /^[А-Я][а-яё]*$/;
    const regExpEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;
    const regExpPhone = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    const regExpComment = /[а-яё0-9a-z]/;
    return (
        <>
            <div className="contacts-form__wrap-data contacts-form__wrap-data_margin">
                <div className="wrap-input">
                    {(nameDirty && nameError) &&
                        <p className="wrap-input__error-msg">{nameError}</p>}
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
                <div className="wrap-input">
                    {(surnameDirty && surnameError) &&
                        <p className="wrap-input__error-msg">{surnameError}</p>}
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
                <div className="wrap-input">
                    {(phoneDirty && phoneError) &&
                        <p className="wrap-input__error-msg">{phoneError}</p>}
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
                <div className="wrap-input">
                    {(emailDirty && emailError) &&
                        <p className="wrap-input__error-msg">{emailError}</p>}
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
            <div className="wrap-input">
                {(commentDirty && commentError) &&
                    <p className="wrap-input__error-msg">{commentError}</p>}
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
        </>
    )
}