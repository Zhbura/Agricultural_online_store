import { CHANGE_SHOW_FILTER, CHOOSE_CATEGORY } from "./action";
import { products } from "../../productsData";

let newProducts = [
    ...products[0].slice(0, 4),
    ...products[1].slice(0, 4),
    ...products[2].slice(0, 4),
    ...products[3].slice(0, 4),
    ...products[4].slice(0, 4),
    ...products[5].slice(0, 4),
    ...products[6].slice(0, 4),
    ...products[7].slice(0, 3)
];

// Все товары из каталога "Средства защиты растений"
const plantProtectionProducts = newProducts.filter((item) => item.catalog === "PPP");

// Товары разных категорий из каталога "Средства защиты растений"
const fungicides = newProducts.filter((item) => item?.category === "fungicides");
const herbicides = newProducts.filter((item) => item?.category === "herbicides");
const insecticides = newProducts.filter((item) => item?.category === "insecticides");
const desiccants = newProducts.filter((item) => item?.category === "desiccants");
const adjuvants = newProducts.filter((item) => item?.category === "adjuvants");
const rodenticides = newProducts.filter((item) => item?.category === "rodenticides");
const retardants = newProducts.filter((item) => item?.category === "retardants");
const protectants = newProducts.filter((item) => item?.category === "protectants");

const initialState = {
    showFilter: false,
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
            console.log(state.showFilter)
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
        default:
            return state;
    }
}
