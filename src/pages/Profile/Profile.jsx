import React, { useState } from 'react';

function Profile() {
  // Initial state for user profile data
  const [userData, setUserData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    role: 'Student',
    profilePicture: 'https://via.placeholder.com/150',
  });

  // State for editing mode
  const [isEditing, setIsEditing] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Handle form submit (for simplicity, we just log the data here)
  const handleSubmit = (e) => {
    e.preventDefault();
    // You would send the updated data to your backend here
    console.log('Updated Data:', userData);
    toggleEdit();
  };

  return (
    <div className="w-4/5 mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold">
          {isEditing ? 'Edit Profile' : 'Profile'}
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="w-36 h-36 rounded-full overflow-hidden mb-6">
            <img
              src={userData.profilePicture}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {isEditing ? (
            <form onSubmit={handleSubmit} className="w-full">
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={userData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={userData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                  Role:
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={userData.role}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex gap-4">
                <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md">
                  Save Changes
                </button>
                <button type="button" onClick={toggleEdit} className="w-full py-2 bg-gray-500 text-white rounded-md">
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center w-full">
              <p className="text-lg font-medium mb-2">
                <strong>Name:</strong> {userData.firstName} {userData.lastName}
              </p>
              <p className="text-lg font-medium mb-2">
                <strong>Email:</strong> {userData.email}
              </p>
              <p className="text-lg font-medium mb-4">
                <strong>Role:</strong> {userData.role}
              </p>
              <button
                onClick={toggleEdit}
                className="py-2 px-6 bg-blue-600 text-white rounded-md"
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
