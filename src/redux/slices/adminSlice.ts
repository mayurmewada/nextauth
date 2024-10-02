import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from 'js-cookie';

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        isLoading: false,
        users: [],
    },
    reducers: {
        getAllUsersSuccess: (state, action) => {
            state.isLoading = true
            console.log(action);
            Cookies.set("nextAuth", action.payload.token)
        },
    },
});

export const {getAllUsersSuccess} = adminSlice.actions

export const getAllUsers = (data:any) => {
    return async (dispatch:any) => {
        try {
            const url = `http://localhost:3000/api/users/login`
            const res = await axios.post(url, data);
            dispatch(getAllUsersSuccess(res.data))
        } catch (error) {
            console.log(error);
        }
    };
};

export default adminSlice.reducer