import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoading: false,
        userDetail: {},
    },
    reducers: {
        loading: (state, { payload }) => {
            state.isLoading = payload;
        },
        loginSuccess: (state, action) => {},
    },
});

export const { loading, loginSuccess } = authSlice.actions;

export const login = (payload: any, router: any) => {
    return async (dispatch: any) => {
        try {
            dispatch(loading(true));
            const url = `http://localhost:3000/api/users/login`;
            const res: any = await axios.post(url, payload);
            if (res?.data.status === 404) {
                toast.error(`${res?.data.message}`);
            } else if (res?.data.status === 401) {
                toast.error(`${res?.data.message}`);
            } else if (res?.data.status === 200) {
                toast.success(`${res?.data.message}`);
                router.push("/profile");
            }
            dispatch(loginSuccess(res.data));
            dispatch(loading(false));
        } catch (error) {
            dispatch(loading(false));
        }
    };
};

export const signup = (payload: any, router: any) => {
    return async (dispatch: any) => {
        try {
            dispatch(loading(true));
            const url = `http://localhost:3000/api/users/signup`;
            const res: any = await axios.post(url, payload);
            dispatch(loading(false));
            if (res?.data.status === 404) {
                toast.error(`${res?.data.message}`);
            } else if (res?.data.status === 401) {
                toast.error(`${res?.data.message}`);
            } else if (res?.data.status === 200) {
                toast.success(`${res?.data.message}`);
                router.push("/login");
            }
        } catch (error) {
            dispatch(loading(false));
        }
    };
};

export const verifyEmail = (payload: any) => {
    return async (dispatch: any) => {
        try {
            const url = `http://localhost:3000/api/users/verify`;
            const res: any = await axios.post(url, payload);
        } catch (error) {
        }
    };
};

export default authSlice.reducer;
