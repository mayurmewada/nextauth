import { combineReducers, configureStore } from "@reduxjs/toolkit";
import adminSlice from "./slices/adminSlice"; // Import your slice

// Combine all reducers into a single rootReducer
const rootReducer = combineReducers({
    admin: adminSlice, // Use a meaningful key for the reducer
});

// Create and configure the Redux store
const store = configureStore({
    reducer: rootReducer,
    // Redux Toolkit automatically includes `redux-thunk`
    devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = ReturnType<typeof rootReducer>;
export type AppSelector = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;