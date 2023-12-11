import {
    CHOOSE_MANUFACTURERS,
    CHOOSE_QUANTITATIVE_STOCK
} from "./action";
import { products } from "../../productsData";

// Все товары из каталога "Фермеру в помощь"
const farmerHelpProducts = products.filter((item) => item.catalog === "farmerhelp");

const initialState = {
    filterProducts: farmerHelpProducts,
}

export const catalogFarmerHelpReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHOOSE_MANUFACTURERS: {
            if (action.payload.manufacturers.length > 0) {
                let chooseManufacturers = action.payload.manufacturers.map((selectedManufacturer) => {
                    let manufacturerItems = farmerHelpProducts.filter((item) => item.manufacturer === selectedManufacturer);
                    return manufacturerItems;
                });
                return {
                    ...state,
                    filterProducts: chooseManufacturers.flat().filter((j) => j.quantitativeStock >= action.payload.quantitativeStock)
                }
            } else {
                return {
                    ...state,
                    filterProducts: farmerHelpProducts.filter((j) => j.quantitativeStock >= action.payload.quantitativeStock)
                }
            }
        }
        case CHOOSE_QUANTITATIVE_STOCK: {

            return {
                ...state,
                filterProducts: farmerHelpProducts.filter((j) => j.quantitativeStock >= action.payload.quantitativeStock)
            }
        }
        default:
            return state;
    }
}