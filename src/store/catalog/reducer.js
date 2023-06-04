import { CHANGE_SHOW_FILTER } from "./action"

const initialState = {
    showFilter: true,
}

export const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SHOW_FILTER: {
            return {
                ...state,
                showFilter: !state.showFilter,
            };
        }
        default:
            return state;
    }
}