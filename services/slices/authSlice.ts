import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    name: null,
    email: null,
    role: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.name = null;
      state.email = null;
      state.role = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
