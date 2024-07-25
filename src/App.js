// src/App.js
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import DetailsUser from "./components/DetailsUser";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListUser from "./components/ListUser";
import "./styles/custom.css";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  const handleAddUser = (user) => {
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <Router>
      <div id="root">
        <Header />
        <div className="main-content container-custom">
          <Routes>
            <Route
              path="/"
              element={<ListUser users={users} onDelete={handleDeleteUser} />}
            />
            <Route path="/add" element={<AddUser onAdd={handleAddUser} />} />
            <Route
              path="/details/:id"
              element={<DetailsUser users={users} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
