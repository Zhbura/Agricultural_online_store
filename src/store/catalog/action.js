export const CHANGE_SHOW_FILTER = 'CATALOG::CHANGE_SHOW_FILTER';
export const CHOOSE_CATEGORY = 'CATALOG::CHOOSE_CATEGORY';
export const CHOOSE_MANUFACTURERS = 'CATALOG::CHOOSE_MANUFACTURERS';
export const CHOOSE_QUANTITATIVE_STOCK = 'CATALOG::QUANTITATIVE_STOCK';

export const changeShowFilter = {
    type: CHANGE_SHOW_FILTER,
};

export const chooseCategoryProducts = (category, manufacturers, quantitativeStock) => ({
    type: CHOOSE_CATEGORY,
    payload: {
        category,
        manufacturers,
        quantitativeStock
    }
});

export const chooseManufacturersProducts = (manufacturers, quantitativeStock) => ({
    type: CHOOSE_MANUFACTURERS,
    payload: {
        manufacturers,
        quantitativeStock
    }
});

export const chooseQuantitativeStockProducts = (quantitativeStock) => ({
    type: CHOOSE_QUANTITATIVE_STOCK,
    payload: {
        quantitativeStock
    }
});