import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api_url = "http://test.ecoforest.green/api/v1/";

export const todosApi: any = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: api_url }),
  tagTypes: ["todos"],
  endpoints: (builder) => ({
    getMyTodos: builder.query({
      query: (jwt) => ({
        url: "/todo/get-todos",
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }),
      providesTags: ["todos"],
    }),
    updateMyTodo: builder.mutation({
      query: (args) => {
        const { jwt, id } = args;
        return {
          url: `/todo/${id}/completed/true`,
          method: "PUT",
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        };
      },
      invalidatesTags: ["todos"],
    }),
    addTodo: builder.mutation({
      query: (args) => {
        const { jwt, body } = args;
        return {
          url: `/todo/add-todo`,
          method: "POST",
          body: { ...body },
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        };
      },
      invalidatesTags: ["todos"],
    }),
    login: builder.mutation({
      query: (body) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: { ...body },
        };
      },
    }),
    register: builder.mutation({
      query: (body) => {
        return {
          url: "/auth/create-account",
          method: "POST",
          body: { ...body },
        };
      },
    }),
  }),
});

export const {
  useGetMyTodosQuery,
  useUpdateMyTodoMutation,
  useAddTodoMutation,
  useLoginMutation,
  useRegisterMutation,
} = todosApi;
