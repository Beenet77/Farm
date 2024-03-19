import React, { useState, useEffect } from "react";
import axios from "axios";

export const Setting = () => {
  // State to store user data
  const [userData, setUserData] = useState(null);

  // Effect to fetch user data when component mounts
  useEffect(() => {
    // Function to fetch user data
    const fetchUserData = async () => {
      try {
        // Replace 'userId' with the actual user ID or get it from wherever it's stored
        const userId = "your-user-id";
        // Fetch user data using the API
        const response = await axios.get(`/api/users/${userId}`);
        // Set the user data in state
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    // Call the fetchUserData function
    fetchUserData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      {userData ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">User Information</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Add more user information fields as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
