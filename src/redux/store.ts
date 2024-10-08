import { combineReducers, configureStore } from "@reduxjs/toolkit";
import adminSlice from "./slices/adminSlice";
import authSlice from "./slices/authSlice";
import userSlice from "./slices/userSlice";

const rootReducer = combineReducers({
    adminSlice,
    authSlice,
    userSlice,
});

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
});

export type AppStore = ReturnType<typeof rootReducer>;
export type AppSelector = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
