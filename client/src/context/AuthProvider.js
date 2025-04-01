import { createContext, useState, useEffect } from "react";

// Create Context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Load user from local storage
  const storedUser = JSON.parse(localStorage.getItem("user")) || null;
  const [user, setUser] = useState(storedUser);

  // Login function
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
