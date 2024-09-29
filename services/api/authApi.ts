import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "../slices/authSlice";
import { LoginRequest, TokenPayload } from "../../types";
import { jwtDecode } from "jwt-decode";
import { API_BASE_URL } from "../enviroment";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body: LoginRequest) => {
        return {
          url: "users/loginUser",
          method: "POST",
          body,
        };
      },
      // async onQueryStarted(_, { dispatch, queryFulfilled }) {
      //   try {
      //     const response = await queryFulfilled;
      //     const decoded = jwtDecode<TokenPayload>(response.data.accessToken);
      //     const userResponse = {
      //       id: response.data.currentUser._id,
      //       username: response.data.currentUser.username,
      //       employeeId: response.data.currentUser.employeeId,
      //       firstName: response.data.currentUser.firstName,
      //       lastName: response.data.currentUser.lastName,
      //       avatar: response.data.currentUser.avatar,
      //       token: response.data.accessToken,
      //       admin: decoded.isAdmin,
      //     };
      //     dispatch(setUser(userResponse));
      //   } catch (error) {
      //     dispatch(
      //       setUser({
      //         id: null,
      //         username: null,
      //         employeeId: null,
      //         firstName: null,
      //         lastName: null,
      //         avatar: null,
      //         token: null,
      //         admin: false,
      //       })
      //     );
      //   }
      // },
    }),
  }),
});

export const { useLoginMutation } = authApi;

export default authApi.reducer;
