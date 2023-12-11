export const CHOOSE_MANUFACTURERS = 'CATALOG_FERTILIZERS::CHOOSE_MANUFACTURERS';
export const CHOOSE_QUANTITATIVE_STOCK = 'CATALOG_FERTILIZERS::QUANTITATIVE_STOCK';

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