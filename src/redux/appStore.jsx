import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import counterReducer from './slices/counterReducer.jsx';

const storageConfig = {
    key: 'root',
    version: 1,
    storage
}

const combinedReducer = combineReducers({
  counter: counterReducer,
});

const persistedReducer = persistReducer(storageConfig, combinedReducer);

const appStore = configureStore({
  reducer: persistedReducer,
});

export const persistedStore = persistStore(appStore);

export default appStore;
