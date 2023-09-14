import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'

import authReducer from "./reducers/index";

const rootReducer = combineReducers({
    auth: authReducer
    // Add other reducers here if needed
});

const store = configureStore({
    reducer: rootReducer,
  });
  
export default store;
