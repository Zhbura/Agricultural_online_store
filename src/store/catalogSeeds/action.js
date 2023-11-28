export const CHOOSE_CATEGORY = 'CATALOG_SEEDS::CHOOSE_CATEGORY';
export const CHOOSE_MANUFACTURERS = 'CATALOG_SEEDS::CHOOSE_MANUFACTURERS';
export const CHOOSE_QUANTITATIVE_STOCK = 'CATALOG_SEEDS::QUANTITATIVE_STOCK';

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