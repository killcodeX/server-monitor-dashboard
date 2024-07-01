import { createSlice } from "@reduxjs/toolkit";
import { AuthSchema } from "schemas/authSchema";

const initialState: AuthSchema = {
  email: "test@test.com",
  password: "123",
  user: "Aaquib",
  isAuthenticated: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin(state) {
      state.isAuthenticated = true;
    },
    setLogout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const { setLogin, setLogout } = AuthSlice.actions;

export default AuthSlice.reducer;
