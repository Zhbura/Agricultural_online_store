export const CHANGE_SHOW_FILTER = 'CATALOG::CHANGE_SHOW_FILTER';
export const CHOOSE_CATEGORY = 'CATALOG::CHOOSE_CATEGORY';
export const CHOOSE_MANUFACTURERS = 'CATALOG::CHOOSE_MANUFACTURERS';
export const CHOOSE_MANUFACTURERS_DELETE = 'CATALOG::CHOOSE_MANUFACTURERS_DELETE';

export const changeShowFilter = {
    type: CHANGE_SHOW_FILTER,
}

export const chooseCategoryProducts = (category) => ({
    type: CHOOSE_CATEGORY,
    payload: {
        category
    }
});

export const chooseManufacturersProducts = (manufacturers) => ({
    type: CHOOSE_MANUFACTURERS,
    payload: {
        manufacturers,
    }
});