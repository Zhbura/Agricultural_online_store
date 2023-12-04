import { nanoid } from "nanoid";
import { ADD_REVIEW } from "./actions";

const initialState = {};

const addLeadingZero = (d) => {
    return (d < 10) ? '0' + d : d;
}

export const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_REVIEW: {
            let objDate = action.payload.date;
            let year = objDate.getFullYear();
            let month = addLeadingZero(objDate.getMonth() + 1);
            let day = addLeadingZero(objDate.getDate());

            const date = `${day}.${month}.${year}`;

            let newReview = {
                id: nanoid(),
                name: action.payload.name,
                surname: action.payload.surname,
                text: action.payload.text,
                date: date,
                rating: action.payload.rating,
            }

            if (state[action.payload.toReviews]) {
                return {
                    ...state,
                    [action.payload.toReviews]: [
                        ...state[action.payload.toReviews], newReview
                    ],
                };
            } else {
                return {
                    ...state,
                    [action.payload.toReviews]: [newReview],
                };
            }
        }
        default:
            return state;
    }
}