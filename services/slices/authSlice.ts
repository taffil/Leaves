import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    id: null,
    username: null,
    employeeId: null,
    firstName: null,
    lastName: null,
    avatar: null,
    token: null,
    admin: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.employeeId = action.payload.employeeId;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.avatar = action.payload.avatar;
      state.token = action.payload.token;
      state.admin = action.payload.admin;
    },
    logout: (state) => {
      state.id = null;
      state.username = null;
      state.employeeId = null;
      state.firstName = null;
      state.lastName = null;
      state.avatar = null;
      state.token = null;
      state.admin = false;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
