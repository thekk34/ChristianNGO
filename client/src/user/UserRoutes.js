import { Navigate } from "react-router-dom";

// Simulating an authentication check (Replace with actual authentication logic)
const isAuthenticated = () => {
  const user = JSON.parse(localStorage.getItem("user")); // Get user data from localStorage
  return user !== null; // Check if user is logged in
};

const UserRoutes = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" />; // Redirect if not logged in
};

export default UserRoutes;
