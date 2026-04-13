import { createSlice } from "@reduxjs/toolkit";
import { AuthStateType } from "../_types/authSliceType";

const initialState: AuthStateType = {
    isLoggedIn: false,
    user: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setlogin(state, action) {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        setlogout(state) {
            state.isLoggedIn = false;
            state.user = null;
        }
    }

})

export const { setlogin, setlogout } = authSlice.actions;
export default authSlice.reducer;