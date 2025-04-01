import { Navigate } from "react-router-dom";

// Simulating an authentication check (Replace with actual authentication logic)
const isAdmin = () => {
  const user = JSON.parse(localStorage.getItem("user")); // Get user data from localStorage
  return user && user.role === "admin"; // Check if user is admin
};

const AdminRoutes = ({ children }) => {
  return isAdmin() ? children : <Navigate to="/" />; // Redirect if not admin
};

export default AdminRoutes;
