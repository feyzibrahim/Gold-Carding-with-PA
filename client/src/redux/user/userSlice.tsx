import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./userActions";
import { UserTypes } from "../../constants/Types";

interface UserSliceType {
  loading: boolean;
  error: any;
  user: UserTypes | null;
}

const initialState: UserSliceType = {
  loading: false,
  error: null,
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeErrorOnClose: (state) => {
      return { ...state, error: null };
    },
    logout: (state) => {
      return { ...state, user: null };
    },
  },
  extraReducers: (builder) => {
    // Get all users
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.user = null;
        state.error = payload;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.user = payload;
      });
  },
});

export const { removeErrorOnClose, logout } = userSlice.actions;

export default userSlice.reducer;
