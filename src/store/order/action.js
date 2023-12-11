export const ORDER_USER_DATA = 'ORDER::ORDER_USER_DATA';

export const orderUserData = (email, name, surname, phone, comment, postcode, region, city, department) => ({
    type: ORDER_USER_DATA,
    payload: {
        email,
        name,
        surname,
        phone,
        comment,
        postcode,
        region, 
        city, 
        department
    }
})