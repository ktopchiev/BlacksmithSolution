import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginModel } from "../../models/user/LoginModel";
import { UserResponse } from "../../models/user/UserResponse";
import { getJwtTokenFromLocalStorage } from "../../util/utility";
import UserRegisterModel from "../../models/user/UserRegisterModel";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_APP_API_URL,
        credentials: 'include',
    }),
    tagTypes: ['User'],
    endpoints: (build) => {
        return {
            login: build.mutation<UserResponse, LoginModel | null>({
                query: (credentials) => (
                    {
                        url: "user/login",
                        method: "POST",
                        body: credentials
                    }
                ),
                invalidatesTags: ['User']
            }),
            refresh: build.mutation<UserResponse, void>({
                query: () => ({
                    url: "user/refresh",
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${getJwtTokenFromLocalStorage()}`
                    }
                })
            }),
            registerUser: build.mutation<string, UserRegisterModel>({
                query: (credentials) => ({
                    url: "user/register",
                    method: "POST",
                    body: credentials
                }),
                invalidatesTags: ['User']
            }),
        }
    }
})

export const { useLoginMutation, useRefreshMutation, useRegisterUserMutation } = userApi;