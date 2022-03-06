import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type user = {
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    isAuthorized: boolean,
    imported: boolean,
    teamId: string,
    role: string,
    linkedinLink: null,
    isReceivingNotifications: boolean,
    avatarKey: null,
    loggedInAt: string,
    createdAt: string,
    updatedAt: string,
    deletedAt: null
}

type InitialState = {
    accessToken: string,
    user: user
}

const initialState = {
    // accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlYjg5M2IwZS1jZTI4LTQzOTItYTgyNC00YTNmZjljMzZlNzkiLCJhdWQiOiJhdXRoIiwiZW1haWwiOiJ1c2VyQGV4YW1wbGUuY29tIiwiaWF0IjoxNjQ2MzI2MTc5LCJleHAiOjE2NDg5MTgxNzl9.1VYZqA89BV0m5gcYlVvZopRRv6B5IQ5l1WBRurSto8o",
    // user: {
    //     id: "eb893b0e-ce28-4392-a824-4a3ff9c36e79",
    //     email: "user@example.com",
    //     firstName: "Test",
    //     lastName: "Test",
    //     isAuthorized: true,
    //     imported: false,
    //     teamId: "7de2786c-4559-462e-a636-3bec1667fe85",
    //     role: "owner",
    //     linkedinLink: null,
    //     isReceivingNotifications: true,
    //     avatarKey: null,
    //     loggedInAt: "2022-03-03T16:38:13.922Z",
    //     createdAt: "2021-07-23T08:14:15.185Z",
    //     updatedAt: "2022-03-03T16:38:13.941Z",
    //     deletedAt: null
    // }
} as InitialState

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        signIn(state, action: PayloadAction<{ accessToken: string, user: user }>) {
            state.accessToken = action.payload.accessToken
            state.user = action.payload.user
        },
        signUp(state, action: PayloadAction<{ accessToken: string, user: user }>) {
            state.accessToken = action.payload.accessToken
            state.user = action.payload.user
        },
    }
})




export const {signIn, signUp} = loginSlice.actions
export default loginSlice.reducer