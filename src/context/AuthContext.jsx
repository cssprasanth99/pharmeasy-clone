import React, { createContext, useState } from "react";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [userData, setUserData] = useState([]);

  const login = (formData) => {
    setUserData([...userData, formData]);
    setForm({ username: "", email: "", password: "" }); // Clear form after login
  };

  const logout = () => {
    // Implement logout logic if needed
    setUserData([]);
  };

  console.log("userData", userData);

  return (
    <authContext.Provider value={{ form, setForm, login, logout, userData }}>
      {children}
    </authContext.Provider>
  );
};
