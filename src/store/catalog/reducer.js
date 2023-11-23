import { CHANGE_SHOW_FILTER, CHOOSE_CATEGORY, CHOOSE_MANUFACTURERS } from "./action";
import { products } from "../../productsData";

// Все товары из каталога "Средства защиты растений"
const plantProtectionProducts = products.filter((item) => item.catalog === "PPP");

// Товары разных категорий из каталога "Средства защиты растений"
const fungicides = products.filter((item) => item?.category === "fungicides");
const herbicides = products.filter((item) => item?.category === "herbicides");
const insecticides = products.filter((item) => item?.category === "insecticides");
const desiccants = products.filter((item) => item?.category === "desiccants");
const adjuvants = products.filter((item) => item?.category === "adjuvants");
const rodenticides = products.filter((item) => item?.category === "rodenticides");
const retardants = products.filter((item) => item?.category === "retardants");
const protectants = products.filter((item) => item?.category === "protectants");

const initialState = {
    showFilter: false,
    manufacturerProducts: [],
    filterProducts: plantProtectionProducts,
    countAllPpp: plantProtectionProducts.length,
    countFungicides: fungicides.length,
    countHerbicides: herbicides.length,
    countInsecticides: insecticides.length,
    countDesiccants: desiccants.length,
    countAdjuvants: adjuvants.length,
    countRodenticides: rodenticides.length,
    countRetardants: retardants.length,
    countProtectants: protectants.length,
}

export const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SHOW_FILTER: {
            return {
                ...state,
                showFilter: !state.showFilter,
            };
        }
        case CHOOSE_CATEGORY: {
            if (action.payload.category === "allPpp") {
                return {
                    ...state,
                    filterProducts: plantProtectionProducts
                }
            } else {
                return {
                    ...state,
                    filterProducts: plantProtectionProducts.filter((item) => item.category === action.payload.category)
                }
            }
        }
        case CHOOSE_MANUFACTURERS: {
            if (action.payload.manufacturers.length > 0) {
                let chooseManufacturers = action.payload.manufacturers.map((selectedManufacturer) => {
                    let manufacturerItems = plantProtectionProducts.filter((item) => item.manufacturer === selectedManufacturer);
                    return manufacturerItems;
                });
                return {
                    ...state,
                    filterProducts: chooseManufacturers.flat()
                }
            } else {
                return {
                    ...state,
                    filterProducts: plantProtectionProducts
                }
            }
        }

        default:
            return state;
    }
}
