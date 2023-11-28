import {
    CHOOSE_CATEGORY,
    CHOOSE_MANUFACTURERS,
    CHOOSE_QUANTITATIVE_STOCK
} from "./action";
import { products } from "../../productsData";

// Все товары из каталога "СЕМЕНА"
const seedsProducts = products.filter((item) => item.catalog === "seeds");

// Товары разных категорий из каталога "СЕМЕНА"
const flowers = products.filter((item) => item.category === "flowers");
const vegetables = products.filter((item) => item.category === "vegetables");
const greenery = products.filter((item) => item.category === "greenery");

const initialState = {
    showFilter: false,
    manufacturerProducts: [],
    filterProducts: seedsProducts,
    countAllSeeds: seedsProducts.length,
    countFlowers: flowers.length,
    countVegetables: vegetables.length,
    countGreenery: greenery.length,
}

export const catalogSeedsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHOOSE_CATEGORY: {
            if (action.payload.category === "allSeeds") {
                if (action.payload.manufacturers.length === 0) {
                    return {
                        ...state,
                        filterProducts: seedsProducts.filter((j) => j.quantitativeStock >= action.payload.quantitativeStock)
                    }
                } else {
                    let chooseManufacturers = action.payload.manufacturers.map((selectedManufacturer) => {
                        let manufacturerItems = seedsProducts.filter((item) => item.manufacturer === selectedManufacturer);
                        return manufacturerItems;
                    });

                    return {
                        ...state,
                        filterProducts: chooseManufacturers.flat().filter((j) => j.quantitativeStock >= action.payload.quantitativeStock)
                    }
                }

            } else {
                const categoryProduct = seedsProducts.filter((item) => item.category === action.payload.category)
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
                    let manufacturerItems = seedsProducts.filter((item) => item.manufacturer === selectedManufacturer);
                    return manufacturerItems;
                });
                return {
                    ...state,
                    filterProducts: chooseManufacturers.flat().filter((j) => j.quantitativeStock >= action.payload.quantitativeStock)
                }
            } else {
                return {
                    ...state,
                    filterProducts: seedsProducts.filter((j) => j.quantitativeStock >= action.payload.quantitativeStock)
                }
            }
        }
        case CHOOSE_QUANTITATIVE_STOCK: {

            return {
                ...state,
                filterProducts: seedsProducts.filter((j) => j.quantitativeStock >= action.payload.quantitativeStock)
            }
        }
        default:
            return state;
    }
}