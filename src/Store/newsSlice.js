import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchallNews = createAsyncThunk(
  "data/fetchallNews",
  async (category) => {
    const response = await axios.get(`news?category=${category}`);
    return response.data;
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    loading: false,
    error: null,
    news: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchallNews.pending, (state) => {
        state.loading = true;
        state.error=null;
        state.news =[]
      })
      .addCase(fetchallNews.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload.data;
        state.error=null;
      })
      .addCase(fetchallNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.news =[]
      });
  },
});

export default newsSlice.reducer;
