import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        isLoading: false,
        user: {},
    },
    reducers: {
        getProfileSuccess: (state, {payload}) => {
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
            console.log(error);
        }
    };
};

export default userSlice.reducer;
