import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://638c9b17eafd555746aa1e6a.mockapi.io"


export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
        try {
            const { name, number } = contact;
            const response = await axios.post("/contacts", {name, number});
            return response.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
);


export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
        try {

            const response = await axios.delete(`/contacts/${id}`);
            return response.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
);