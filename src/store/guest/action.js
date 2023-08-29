export const GUEST_DATA = 'GUEST::GUEST_DATA';

export const guestData = (email, name, surname, phone, comment) => ({
    type: GUEST_DATA,
    payload: {
        email,
        name,
        surname,
        phone,
        comment
    }
})