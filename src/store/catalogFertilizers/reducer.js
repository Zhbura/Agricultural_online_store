import {
    CHOOSE_CATEGORY,
    CHOOSE_MANUFACTURERS,
    CHOOSE_QUANTITATIVE_STOCK
} from "./action";
import { products } from "../../productsData";

// Все товары из каталога "СЕМЕНА"
const fertilizersProducts = products.filter((item) => item.catalog === "fertilizer");

// Товары разных категорий из каталога "СЕМЕНА"
const universal = products.filter((item) => item.category === "universal");
const forflowers = products.filter((item) => item.category === "forflowers");
const forvegetables = products.filter((item) => item.category === "forvegetables");

const initialState = {
    filterProducts: fertilizersProducts,
    countAllFertilizers: fertilizersProducts.length,
    countUniversal: universal.length,
    countForFlowers: forflowers.length,
    countForVegetables: forvegetables.length,
}

export const catalogFertilizersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHOOSE_CATEGORY: {
            if (action.payload.category === "allFertilizer") {
                if (action.payload.manufacturers.length === 0) {
                    return {
                        ...state,
                        filterProducts: fertilizersProducts.filter((j) => j.quantitativeStock >= action.payload.quantitativeStock)
                    }
                } else {
                    let chooseManufacturers = action.payload.manufacturers.map((selectedManufacturer) => {
                        let manufacturerItems = fertilizersProducts.filter((item) => item.manufacturer === selectedManufacturer);
                        return manufacturerItems;
                    });

                    return {
                        ...state,
                        filterProducts: chooseManufacturers.flat().filter((j) => j.quantitativeStock >= action.payload.quantitativeStock)
                    }
                }

            } else {
                const categoryProduct = fertilizersProducts.filter((item) => item.category === action.payload.category)
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
                    let manufacturerItems = fertilizersProducts.filter((item) => item.manufacturer === selectedManufacturer);
                    return manufacturerItems;
                });
                return {
                    ...state,
                    filterProducts: chooseManufacturers.flat().filter((j) => j.quantitativeStock >= action.payload.quantitativeStock)
                }
            } else {
                return {
                    ...state,
                    filterProducts: fertilizersProducts.filter((j) => j.quantitativeStock >= action.payload.quantitativeStock)
                }
            }
        }
        case CHOOSE_QUANTITATIVE_STOCK: {

            return {
                ...state,
                filterProducts: fertilizersProducts.filter((j) => j.quantitativeStock >= action.payload.quantitativeStock)
            }
        }
        default:
            return state;
    }
}