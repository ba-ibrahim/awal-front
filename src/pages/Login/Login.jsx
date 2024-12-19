

import axios from 'axios';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try
    {
      await axios.post("http://localhost:3000/api/v1/auth/login", {
        username: username,
        password: password
      })
      alert('logged in successfully');
      navigate(`/profile/${username}`);
    }
    catch(e)
    {
      alert("Invalid username or password");
      console.log(e);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Login</h2>
        
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don&apos;t have an account?{" "}
          <NavLink to="/register" className="text-blue-500 hover:underline">
            Register here
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
