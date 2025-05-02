import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/user/User";

interface InitialState {
    user: User | null;
    loggedIn: boolean;
}

const init = () => {
    const initialState: InitialState = {
        user: null,
        loggedIn: false
    }

    return initialState;
}

export const userSlice = createSlice({
    name: "user",
    initialState: init(),
    reducers: {
        setCurrentUser: (state, action) => {
            state.user = action.payload;
            state.loggedIn = true;
        },
        setLogOut: (state) => {
            state.user = null;
            state.loggedIn = false;
        }

    },
});

export const { setCurrentUser, setLogOut } = userSlice.actions