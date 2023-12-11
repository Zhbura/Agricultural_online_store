export const ADD_REVIEW = 'REVIEW::ADD_REVIEW';

export const addReviewProduct = (toReviews, name, surname, text, date, rating) => ({
    type: ADD_REVIEW,
    payload: {
        toReviews,
        name,
        surname,
        text,
        date, 
        rating
    },
})