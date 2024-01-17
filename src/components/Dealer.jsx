import React, { useState } from 'react';

const UserProfile = () => {
  const [formData, setFormData] = useState({
    fullName: 'name',
    email: 'Email@gmail.com',
    mobile: '123-456-7890',
    gender: 'Male',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-3xl mx-auto bg-white p-6 shadow-md rounded-lg">
        <div className="text-center mb-4">
          <img
            src="https://via.placeholder.com/150"
            alt="User Profile"
            className="w-24 h-24 mx-auto rounded-full"
          />
          <h1 className="text-2xl font-semibold mt-2">{formData.fullName}</h1>
        </div>

        <div className="mt-15">
          
        </div>

        <div className="mt-9">
          <h2 className="text-xl font-semibold mb-2"> My profile</h2>
          <div className="grid grid-cols-2 gap-4    ">
            <div>
              <label className="text-gray-600">Full Name:</label>
              <input
                type="text  "
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-gray-600">Email Address:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-gray-600">Mobile:</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-gray-600">Gender:</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
