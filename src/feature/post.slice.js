import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: null,
  },
  reducers: {},
});

export default postSlice.reducer;
