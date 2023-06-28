import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./features/user/UserSlice";
import CartReducer from "./features/cart/CartSlice";

const store = configureStore({
  reducer: { user: UserReducer, menu: CartReducer },
});

export default store;
