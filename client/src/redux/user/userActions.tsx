import { createAsyncThunk } from "@reduxjs/toolkit";
import { commonReduxRequest } from "../../common/api";
import { handleError } from "../../common/functions";
import { UserTypes } from "../../constants/Types";

// Login
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials: UserTypes, { rejectWithValue }) => {
    try {
      const res = await commonReduxRequest(
        "POST",
        "/auth/login",
        userCredentials,
        rejectWithValue
      );

      return res;
    } catch (error) {
      return handleError(error, rejectWithValue);
    }
  }
);
