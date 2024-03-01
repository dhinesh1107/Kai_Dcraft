import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import reducer from './rootReducer';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
export const storeObj = {};
const persistConfig = {
    key: 'root',
    storage,
    wishlist: ['admin'],
};

export default function setup() {
    const persistedReducer = persistReducer(persistConfig, reducer);

    const logger = createLogger({
        collapsed: true,
    });

    const Store = createStore(
        persistedReducer,
        undefined,
        composeWithDevTools(applyMiddleware(thunk, logger))
    );

    const persistor = persistStore(Store, null, () => {});
    storeObj.store = Store;
    console.log(storeObj);
    return { persistor, Store };
}

