import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "inspector";
import toast from "react-hot-toast";

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        isLoading: false,
        user: {},
    },
    reducers: {
        getProfileSuccess: (state, { payload }) => {
            state.user = payload;
        },
    },
});

export const { getProfileSuccess } = userSlice.actions;

export const getProfile = () => {
    return async (dispatch: any) => {
        try {
            const url = `http://localhost:3000/api/users/profile`;
            const res = await axios.post(url);
            dispatch(getProfileSuccess(res.data.userData));
        } catch (error) {
        }
    };
};

export const logoutUser = (router:any) => {
    return async (dispatch: any) => {
        try {
            const url = `http://localhost:3000/api/users/logout`;
            const res = await axios.get(url);
            toast.success(`${res?.data.message}`);
            router.push("/login")
        } catch (error) {
        }
    };
};

export default userSlice.reducer;
