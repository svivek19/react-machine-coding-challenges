import { configureStore } from "@reduxjs/toolkit";
import empReducer from "./redux/employeeCrudSlice";

const store = configureStore({
  reducer: {
    employee: empReducer,
  },
});

export default store;
