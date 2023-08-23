export const GUEST_EMAIL = 'GUEST::GUEST_EMAIL';
export const GUEST_NAME = 'GUEST::GUEST_NAME';
export const GUEST_SURNAME = 'GUEST::GUEST_SURNAME';
export const GUEST_PHONE = 'GUEST::GUEST_PHONE';
export const GUEST_COMMENT = 'GUEST::GUEST_COMMENT';

export const guestRegisterEmail = (email) => ({
    type: GUEST_EMAIL,
    payload: email
});

export const guestRegisterName = (name) => ({
    type: GUEST_NAME,
    payload: name
});

export const guestRegisterSurname = (surname) => ({
    type: GUEST_SURNAME,
    payload: surname
});

export const guestRegisterPhone = (phone) => ({
    type: GUEST_PHONE,
    payload: phone
});

export const guestRegisterComment = (comment) => ({
    type: GUEST_COMMENT,
    payload: comment
});