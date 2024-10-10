import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        isLoading: false,
        users: [],
    },
    reducers: {
        loading: (state, action) => {
            state.isLoading = action.payload;
        },
        getAllUsersSuccess: (state, action) => {
            state.isLoading = true;
            state.users = action.payload.response;
        },
    },
});

export const { loading, getAllUsersSuccess } = adminSlice.actions;

export const getAllUsers = () => {
    return async (dispatch: any) => {
        try {
            dispatch(loading(true));
            const url = `http://localhost:3000/api/admin/users`;
            const res = await axios.get(url);
            dispatch(getAllUsersSuccess(res.data));
            dispatch(loading(false));
        } catch (error) {
            console.log(error);
            dispatch(loading(false));
        }
    };
};

export default adminSlice.reducer;
