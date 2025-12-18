import axios from "axios";

export const getUserDetails = async (req, res) => {
  try {
    const pages = Number(req.query.page || 1);
    const limit = Number(req.query.limit || 5);

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    const users = response.data;

    const startIndex = (pages - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedUsers = users.slice(startIndex, endIndex);

    return res.status(200).json({
      users: paginatedUsers,
      total: users.length,
      pages,
      limit,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
