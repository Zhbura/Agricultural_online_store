import { CHANGE_SHOW_SLIDER } from "./action";

const initialState = {
    showSlider: false,
}

export const sliderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SHOW_SLIDER: {
            return {
                ...state,
                showSlider: !state.showSlider,
            };
        }
        default:
            return state;
    }
}