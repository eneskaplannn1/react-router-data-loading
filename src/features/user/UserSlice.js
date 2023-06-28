import { createSlice } from "@reduxjs/toolkit";

const initialState = { username: "" };

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
});

export const userActions = UserSlice.actions;
export default UserSlice.reducer;
