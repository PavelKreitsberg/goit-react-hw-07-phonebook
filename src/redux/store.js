import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filterReducer } from './filter/filterSlice';
import { contactsReducer } from "./contacts/contactsSlice";


const rootReducer = combineReducers({
    filter: filterReducer,
    contacts: contactsReducer,
})
export const store = configureStore({
    reducer: rootReducer,
})