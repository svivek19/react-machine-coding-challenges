import { createSlice } from "@reduxjs/toolkit";

const employeeCrudSlice = createSlice({
  name: "employee",
  initialState: [],
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload);
    },

    editEmployee: (state, action) => {
      const index = state.findIndex((emp) => emp.id === action.payload.id);

      if (index !== -1) {
        state[index] = action.payload;
      }

      return state;
    },
    deleteEmployee: (state, action) => {
      return state.filter((emp) => emp.id !== action.payload);
    },
  },
});

export const { addEmployee, editEmployee, deleteEmployee } =
  employeeCrudSlice.actions;

export default employeeCrudSlice.reducer;
