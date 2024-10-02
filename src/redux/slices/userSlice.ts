import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoading: false,
        userDetail: {},
    },
    reducers: {
        loginSuccess: () => {
            
        }
    }
})