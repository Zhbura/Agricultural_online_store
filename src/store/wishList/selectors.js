export const selectWishList = (state) => state.wishList;
export const countWishList = (state) => state.wishList.reduce((prev, current) => (prev + current.count), 0)