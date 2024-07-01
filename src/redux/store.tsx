import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import AuthSlice from "./slices/auth";

const rootReducer = combineReducers({
  auth: AuthSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
