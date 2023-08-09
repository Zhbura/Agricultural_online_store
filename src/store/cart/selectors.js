export const selectCart = (state) => state.cart;
export const countCart = (state) => state.cart.reduce((prev, current) => (prev + current.count), 0);
export const costCart = (state) => state.cart.reduce((prev, current) => (prev + current.totalPrice), 0);
