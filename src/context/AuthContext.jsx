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
    setForm({ username: "", email: "", password: "" }); 
  };

  const logout = () => {
    setUserData([]);
  };

  console.log("userData", userData);

  return (
    <authContext.Provider value={{ form, setForm, login, logout, userData }}>
      {children}
    </authContext.Provider>
  );
};
