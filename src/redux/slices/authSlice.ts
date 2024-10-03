import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoading: false,
        userDetail: {}
    },
    reducers: {
        loading: (state, {payload}) => {
            console.log(payload)
            state.isLoading = payload;
        },
        loginSuccess: (state, action) => {},
    },
});

export const { loading, loginSuccess } = authSlice.actions;

export const login = (payload: any) => {
    return async (dispatch: any) => {
        try {
            dispatch(loading(true));
            const url = `http://localhost:3000/api/users/login`;
            const res: any = await axios.post(url, payload);
            console.log(res?.data);
            dispatch(loginSuccess(res.data));
            dispatch(loading(false));
        } catch (error) {
            console.log(error);
            dispatch(loading(false));
        }
    };
};

export default authSlice.reducer;
