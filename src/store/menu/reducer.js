import { CHANGE_MENU_SHOW } from "./actions";

const initialState = {
    showMenu: false,
}

export const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MENU_SHOW: {
            return {
                ...state,
                showMenu: action.payload.changeShow,
            };
        }
        default:
            return state;
    }
}