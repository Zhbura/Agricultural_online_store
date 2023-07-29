import { createStore, compose, combineReducers } from 'redux';
import { catalogReducer } from './catalog/reducer';
import { menuReducer } from './menu/reducer';
import { cartReducer } from './cart/reducer';

const rootReducer = combineReducers({
    catalog: catalogReducer,
    menu: menuReducer,
    cart: cartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());