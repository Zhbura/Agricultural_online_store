export const CHANGE_SHOW_FILTER = 'CATALOG::CHANGE_SHOW_FILTER';
export const CHOOSE_CATEGORY = 'CATALOG::CHOOSE_CATEGORY';
export const CHOOSE_MANUFACTURERS = 'CATALOG::CHOOSE_MANUFACTURERS';

export const changeShowFilter = {
    type: CHANGE_SHOW_FILTER,
};

export const chooseCategoryProducts = (category, manufacturers) => ({
    type: CHOOSE_CATEGORY,
    payload: {
        category,
        manufacturers,
    }
});

export const chooseManufacturersProducts = (manufacturers) => ({
    type: CHOOSE_MANUFACTURERS,
    payload: {
        manufacturers
    }
});
