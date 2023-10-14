import { createStore, compose, combineReducers } from 'redux';
import { catalogReducer } from './catalog/reducer';
import { menuReducer } from './menu/reducer';
import { cartReducer } from './cart/reducer';
import { wishListReducer } from './wishList/reducer';
import { registrationReducer } from './registration/reducer';
import { guestReducer } from './guest/reducer';
import { orderReducer } from './order/reducer';
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { historyOrderReducer } from './historyOrder/reducer';

const rootReducer = combineReducers({
    catalog: catalogReducer,
    menu: menuReducer,
    cart: cartReducer,
    wishList: wishListReducer,
    registration: registrationReducer,
    guest: guestReducer,
    order: orderReducer,
    historyOrder: historyOrderReducer
});

const persistConfig = {
    key: "agriculturalStore",
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistedReducer, composeEnhancers());

export const persistor = persistStore(store);