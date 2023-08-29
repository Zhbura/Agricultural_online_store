export const REGISTER_EMAIL = 'REGISTRATION::REGISTER_EMAIL';
export const REGISTER_NAME = 'REGISTRATION::REGISTER_NAME';
export const REGISTER_SURNAME = 'REGISTRATION::REGISTER_SURNAME';
export const REGISTER_PHONE = 'REGISTRATION::REGISTER_PHONE';
export const REGISTER_PASSWORD = 'REGISTRATION::REGISTER_PASSWORD';
export const REGISTER_PASSWORD_CONFIRMATION = 'REGISTRATION::REGISTER_PASSWORD_CONFIRMATION';
export const REGISTER_ADRESS = 'REGISTRATION::REGISTER_ADRESS';
export const REGISTER_USER = 'REGISTRATION::REGISTER_USER';

export const registerEmail = (email) => ({
    type: REGISTER_EMAIL,
    payload: email
});

export const registerName = (name) => ({
    type: REGISTER_NAME,
    payload: name
});

export const registerSurname = (surname) => ({
    type: REGISTER_SURNAME,
    payload: surname
});

export const registerPhone = (phone) => ({
    type: REGISTER_PHONE,
    payload: phone
});

export const registerPassConfirm = (pass) => ({
    type: REGISTER_PASSWORD_CONFIRMATION,
    payload: pass
});

export const registerPass = (pass) => ({
    type: REGISTER_PASSWORD,
    payload: pass
});

export const registerAdress = (adress) => ({
    type: REGISTER_ADRESS,
    payload: adress
});

export const registerUser = (name, surname, phone, email, password, passConfirm) => ({
    type: REGISTER_USER,
    payload: {
        name,
        surname,
        phone,
        email,
        password,
        passConfirm
    }
})