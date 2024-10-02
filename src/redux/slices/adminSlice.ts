import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        isLoading: false,
        users: [],
    },
    reducers: {
        getAllUsersSuccess: (state) => {
            state.isLoading = true
        },
    },
});

export const {getAllUsersSuccess} = adminSlice.actions

export const getAllUsers = (data:any) => {
    return async (dispatch:any) => {
        try {
            console.log("data", data)
            dispatch(getAllUsersSuccess())
        } catch (error) {
            console.log(error);
        }
    };
};

export default adminSlice.reducer