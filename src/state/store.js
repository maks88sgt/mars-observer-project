import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import searchReducer from './slices/searchSlice';
import {roverMetaInfoApi} from "./api/roverApi";
import {setupListeners} from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({
    auth: authReducer,
    search: searchReducer,
    [roverMetaInfoApi.reducerPath]: roverMetaInfoApi.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(roverMetaInfoApi.middleware),
});

setupListeners(store.dispatch)
