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

const initialState = {} as InitialState

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