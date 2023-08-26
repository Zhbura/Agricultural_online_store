export const ORDER_EMAIL = 'ORDER::ORDER_EMAIL';
export const ORDER_NAME = 'ORDER::ORDER_NAME';
export const ORDER_SURNAME = 'ORDER::ORDER_SURNAME';
export const ORDER_PHONE = 'ORDER::ORDER_PHONE';
export const ORDER_COMMENT = 'ORDER::ORDER_COMMENT';
export const ORDER_POSTCODE = 'ORDER::ORDER_POSTCODE';
export const ORDER_REGION = 'ORDER::ORDER_REGION';
export const ORDER_CITY = 'ORDER::ORDER_CITY';
export const ORDER_DEPARTMENT = 'ORDER::ORDER_DEPARTMENT';


export const orderEmail = (email) => ({
    type: ORDER_EMAIL,
    payload: email
});

export const orderName = (name) => ({
    type: ORDER_NAME,
    payload: name
});

export const orderSurname = (surname) => ({
    type: ORDER_SURNAME,
    payload: surname
});

export const orderPhone = (phone) => ({
    type: ORDER_PHONE,
    payload: phone
});

export const orderComment = (comment) => ({
    type: ORDER_COMMENT,
    payload: comment
});

export const orderPostcode = (postcode) => ({
    type: ORDER_POSTCODE,
    payload: postcode
});

export const orderRegion = (region) => ({
    type: ORDER_REGION,
    payload: region
});

export const orderCity = (city) => ({
    type: ORDER_CITY,
    payload: city
});

export const orderDepartment = (department) => ({
    type: ORDER_DEPARTMENT,
    payload: department
});