import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store"; // Adjust the import path based on your project structure
import { selectAuthToken } from "../slices/authSlice";
import { API_BASE_URL } from "../enviroment";

export const requestsApi = createApi({
  reducerPath: "requestsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = selectAuthToken(state);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Approvals", "Requests"],
  endpoints: (builder) => ({
    getLeaveRequests: builder.query({
      query: (year) => `leaveRequest/${year}`,
    }),
    getTeamLeaveRequests: builder.query({
      query: (year) =>
        `/leaveRequest/allemployeesLeaveDaysFilteredByYear/${year}`,
    }),
    getLeaveRequest: builder.query({
      query: (id) => `leaveRequest/getSingleLeaveRequest/${id}`,
    }),
    createLeaveRequest: builder.mutation({
      query: (body) => ({
        url: "leaveRequest/createLeaveRequest",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Requests"],
    }),
    updateLeaveRequest: builder.mutation({
      query: ({ id, body }) => ({
        url: `leaveRequest/update/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Requests"],
    }),
    deleteLeaveRequest: builder.mutation({
      query: (id) => ({
        url: `leaveRequest/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Requests"],
    }),
  }),
});

export const {
  useGetLeaveRequestsQuery,
  useGetLeaveRequestQuery,
  useCreateLeaveRequestMutation,
  useUpdateLeaveRequestMutation,
  useDeleteLeaveRequestMutation,
} = requestsApi;

export default requestsApi.reducer;
