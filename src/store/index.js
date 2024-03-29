import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
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
import { catalogFertilizersReducer } from './catalogFertilizers/reducer';
import { catalogFeedGroupReducer } from './catalogFeedGroup/reducer';
import { catalogFarmerHelpReducer } from './catalogFarmerHelp/reducer';
import { catalogPppReducer } from './catalogPpp/reducer';
import { reviewsReducer } from './reviews/reducer';
import { sliderReducer } from './slider/reducer';

const rootReducer = combineReducers({
    catalogPpp: catalogPppReducer,
    catalogSeeds: catalogSeedsReducer,
    catalogFertilizers: catalogFertilizersReducer,
    catalogFeedGroup: catalogFeedGroupReducer,
    catalogFarmerHelp: catalogFarmerHelpReducer,
    menu: menuReducer,
    cart: cartReducer,
    wishList: wishListReducer,
    registration: registrationReducer,
    guest: guestReducer,
    order: orderReducer,
    orderProducts: orderProductsReducer,
    search: searchReducer,
    reviews: reviewsReducer,
    slider: sliderReducer,
});

const persistConfig = {
    key: "agriculturalStore",
    storage,
    blacklist: ['catalogPpp', 'catalogFertilizers', 'catalogSeeds', 'catalogFarmerHelp', 'slider', 'catalogFeedGroup'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);