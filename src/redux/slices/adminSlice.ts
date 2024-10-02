import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
            const url = `http://localhost:3000/api/users/login`
            const res = await axios.post(url, data)
            console.log(res.data)
            dispatch(getAllUsersSuccess())
        } catch (error) {
            console.log(error);
        }
    };
};

export default adminSlice.reducer