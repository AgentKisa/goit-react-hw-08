import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RiLinkedinBoxFill } from "react-icons/ri";

// const axios = axiosLib.create({
//   baseURL: "https://connections-api.goit.global/",
// });

export const fetchContactThunk = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        "https://connections-api.goit.global/contacts"
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  "deleteContacts",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`https://connections-api.goit.global/contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  "contacts/addContact",
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post(
        "https://connections-api.goit.global/contacts",
        body
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
