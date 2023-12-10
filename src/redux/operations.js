import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://6574c25fb2fbb8f6509ca104.mockapi.io/";

export const fetchAdverts = createAsyncThunk("adverts/fetchAll", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get("/advert");
    return response.data;
  } catch (e) {
    return rejectWithValue(e.message);
  }
});
