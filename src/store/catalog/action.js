export const CHANGE_SHOW_FILTER = 'CATALOG::CHANGE_SHOW_FILTER';
export const CHOOSE_CATEGORY = 'CATALOG::CHOOSE_CATEGORY';

export const changeShowFilter = {
    type: CHANGE_SHOW_FILTER,
}

export const chooseCategoryProducts = (category) => ({
    type: CHOOSE_CATEGORY,
    payload: {
        category
    }
})