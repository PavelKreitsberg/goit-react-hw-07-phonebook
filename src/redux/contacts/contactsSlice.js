import { createSlice } from "@reduxjs/toolkit";
import { addContact, fetchContacts, deleteContact} from "redux/operations";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
      items: [],
      isLoading: false,
      error: null,
},
    extraReducers: {
    [fetchContacts.pending](state) {
        return {...state, isLoading: true}
    },
    [fetchContacts.fulfilled](state, action) {
      return {...state, isLoading: false, error: null, items: action.payload}
    },
    [fetchContacts.rejected](state, action) {
      return {...state, isLoading: false, error: action.payload}
      },
    
    
    [addContact.pending](state) {
        return {...state, isLoading: true}
    },
      [addContact.fulfilled](state, action) {

      return { isLoading: false, error: null, items: [...state.items, action.payload]}
    },
    [addContact.rejected](state, action) {
      return {...state, isLoading: false, error: action.payload}
      },
    
    
    [deleteContact.pending](state) {
        return {...state, isLoading: true}
    },
    [deleteContact.fulfilled](state, action) {
      return {isLoading: false, error: null, items: state.items.filter(contact => contact.id !== action.payload.id)}
    },
    [deleteContact.rejected](state, action) {
      return {...state, isLoading: false, error: action.payload}
      },
    
    
  },
})

export const { contactAdded, contactDeleted } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;