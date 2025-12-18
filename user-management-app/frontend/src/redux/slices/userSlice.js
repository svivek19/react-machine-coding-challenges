import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
  name: "user", // ✅ REQUIRED
  initialState: {
    users: [],
    loading: false,
    page: 1,
    error: null,
  },
  reducers: {
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setUsers: (state, action) => {
      // ✅ fixed name
      state.users = action.payload;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setLoading, setUsers, setError, setPage } = userSlice.actions;

/**
 * Async API call
 */
export const fetchUsers =
  (page = 1) =>
  async (dispatch) => {
    try {
      dispatch(setLoading());

      const limit = 3; // ✅ defined properly

      const res = await axios.get(
        `http://localhost:5000/get-all-users?page=${page}&limit=${limit}`
      );

      dispatch(setUsers(res.data.users));
    } catch (err) {
      dispatch(setError(err.message));
    }
  };

export default userSlice.reducer;
