import {
    CHOOSE_CATEGORY,
    CHOOSE_MANUFACTURERS,
    CHOOSE_QUANTITATIVE_STOCK
} from "./action";
import { products } from "../../productsData";

// Все товары из каталога "СЕМЕНА"
const feedGroupProducts = products.filter((item) => item.catalog === "feedgroup");

// Товары разных категорий из каталога "СЕМЕНА"
const forcats = products.filter((item) => item.category === "forcats");
const fordogs = products.filter((item) => item.category === "fordogs");
const forsx = products.filter((item) => item.category === "forsx");

const initialState = {
    showFilter: false,
    manufacturerProducts: [],
    filterProducts: feedGroupProducts,
    countAllFeedGroup: feedGroupProducts.length,
    countForCats: forcats.length,
    countForDogs: fordogs.length,
    countForsx: forsx.length,
}

export const catalogFeedGroupReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHOOSE_CATEGORY: {
            if (action.payload.category === "allFeedGroup") {
                if (action.payload.manufacturers.length === 0) {
                    return {
                        ...state,
                        filterProducts: feedGroupProducts.filter((j) => j.quantitativeStock >= action.payload.quantitativeStock)
                    }
                } else {
                    let chooseManufacturers = action.payload.manufacturers.map((selectedManufacturer) => {
                        let manufacturerItems = feedGroupProducts.filter((item) => item.manufacturer === selectedManufacturer);
                        return manufacturerItems;
                    });

                    return {
                        ...state,
                        filterProducts: chooseManufacturers.flat().filter((j) => j.quantitativeStock >= action.payload.quantitativeStock)
                    }
                }

            } else {
                const categoryProduct = feedGroupProducts.filter((item) => item.category === action.payload.category)
                if (action.payload.manufacturers.length === 0) {
                    return {
                        ...state,
                        filterProducts: categoryProduct.filter((j) => j.quantitativeStock >= action.payload.quantitativeStock)
                    }
                } else {
                    let chooseManufacturers = action.payload.manufacturers.map((selectedManufacturer) => {
                        let manufacturerItems = categoryProduct.filter((item) => item.manufacturer === selectedManufacturer);
                        return manufacturerItems;
                    });

                    return {
                        ...state,
                        filterProducts: chooseManufacturers.flat().filter((j) => j.quantitativeStock >= action.payload.quantitativeStock)
                    }
                }

            }
        }
        case CHOOSE_MANUFACTURERS: {
            if (action.payload.manufacturers.length > 0) {
                let chooseManufacturers = action.payload.manufacturers.map((selectedManufacturer) => {
                    let manufacturerItems = feedGroupProducts.filter((item) => item.manufacturer === selectedManufacturer);
                    return manufacturerItems;
                });
                return {
                    ...state,
                    filterProducts: chooseManufacturers.flat().filter((j) => j.quantitativeStock >= action.payload.quantitativeStock)
                }
            } else {
                return {
                    ...state,
                    filterProducts: feedGroupProducts.filter((j) => j.quantitativeStock >= action.payload.quantitativeStock)
                }
            }
        }
        case CHOOSE_QUANTITATIVE_STOCK: {

            return {
                ...state,
                filterProducts: feedGroupProducts.filter((j) => j.quantitativeStock >= action.payload.quantitativeStock)
            }
        }
        default:
            return state;
    }
}