import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        isLoading: false,
        users: [],
    },
    reducers: {
        getAllUsersSuccess: (state, action) => {
            state.isLoading = true;
            state.users = action.payload.response;
        },
    },
});

export const { getAllUsersSuccess } = adminSlice.actions;

export const getAllUsers = () => {
    return async (dispatch: any) => {
        try {
            const url = `http://localhost:3000/api/admin/users`;
            const res = await axios.get(url);
            dispatch(getAllUsersSuccess(res.data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default adminSlice.reducer;
