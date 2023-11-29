export const selectFeedGroupProducts = (state) => state.catalogFeedGroup.filterProducts;
export const selectCountFeedGroupProducts = (state) => state.catalogFeedGroup.filterProducts.length;
export const selectCountAllFeedGroup = (state) => state.catalogFeedGroup.countAllFeedGroup;
export const selectCountForCats = (state) => state.catalogFeedGroup.countForCats;
export const selectCountForDogs = (state) => state.catalogFeedGroup.countForDogs;
export const selectCountForsx = (state) => state.catalogFeedGroup.countForsx;

