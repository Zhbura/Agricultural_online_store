import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { catalogReducer } from './catalog/reducer';
import { menuReducer } from './menu/reducer';
import { cartReducer } from './cart/reducer';
import { wishListReducer } from './wishList/reducer';
import { registrationReducer } from './registration/reducer';
import { guestReducer } from './guest/reducer';
import { orderReducer } from './order/reducer';
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { orderProductsReducer } from './orderProducts/reducer';
import thunk from 'redux-thunk';
import { searchReducer } from './search/reducer';
import { catalogSeedsReducer } from './catalogSeeds/reducer';

const rootReducer = combineReducers({
    catalog: catalogReducer,
    catalogSeeds: catalogSeedsReducer,
    menu: menuReducer,
    cart: cartReducer,
    wishList: wishListReducer,
    registration: registrationReducer,
    guest: guestReducer,
    order: orderReducer,
    orderProducts: orderProductsReducer,
    search: searchReducer,
});

const persistConfig = {
    key: "agriculturalStore",
    storage,
    blacklist: ['catalog']['catalogSeeds']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);