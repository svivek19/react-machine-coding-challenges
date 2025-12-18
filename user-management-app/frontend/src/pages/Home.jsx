import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, setPage } from "../redux/slices/userSlice";
import { useEffect } from "react";
import { ShimmerSectionHeader } from "react-shimmer-effects";

const Home = () => {
  const dispatch = useDispatch();
  const { users, loading, page } = useSelector((state) => state.user);

  // 🔹 Fetch users whenever page changes
  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]); // ✅ page dependency added

  // 🔹 Loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User List</h2>

      {/* 🔹 Render users */}
      {users && users.length > 0 ? (
        users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        ))
      ) : (
        <p>No users found</p>
      )}

      {/* 🔹 Pagination buttons */}
      <div style={{ marginTop: "20px" }}>
        <button
          disabled={page === 1}
          onClick={() => dispatch(setPage(page - 1))}
        >
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>Page: {page}</span>

        <button onClick={() => dispatch(setPage(page + 1))}>Next</button>
      </div>
    </div>
  );
};

export default Home;
