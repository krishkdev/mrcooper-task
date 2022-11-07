import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    userInfo: {}, // for user object
    userToken: null, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
  }

export const userSlice = createSlice({
  name: "counter",
  initialState: {
    id: 0,
    name:"Fazil Ahmed",
    initialState,
    email: "fazilbhai@gmail.com",
    catogery: "Doctor",
    DOB: "23/06/1999",
    reducers: {},
    extraReducers: {},
  },
});

export default userSlice.reducer;
