import React, { useState, useEffect } from "react";
import axios from "axios";
import storage from "../../../storage";
import { jwtDecode } from "jwt-decode";

export const Setting = () => {
  const [users, setUsers] = useState();
  const [user, setUser] = useState();

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/accounts/users/");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const token = storage.getToken();

  const decoded = jwtDecode(token);

  const findUser = () => {
    let u = users?.find((u) => u.email === decoded.email);
    setUser(u);
  };

  useEffect(() => {
    fetchUsers();
    findUser();
  }, []);

  console.log(111, decoded);

  // State to store user data
  // const [userData, setUserData] = useState(null);

  // Effect to fetch user data when component mounts
  // useEffect(() => {
  //   // Function to fetch user data
  //   const fetchUserData = async () => {
  //     try {
  //       // Replace 'userId' with the actual user ID or get it from wherever it's stored
  //       const userId = "your-user-id";
  //       // Fetch user data using the API
  //       const response = await axios.get(`/api/users/${userId}`);
  //       // Set the user data in state
  //       setUserData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   // Call the fetchUserData function
  //   fetchUserData();
  // }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      {decoded ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">User Information</h2>
          <p>Name: {decoded?.first_name}</p>
          <p>Email: {decoded?.email}</p>
          <p>Role: {decoded?.role}</p>
          {/* Add more user information fields as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
