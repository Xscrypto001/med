import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/signup/', {
        firstname,
        lastname,
        email,
        password,
      });
      alert('Signup successful');
      navigate('/');
    } catch (error) {
      alert('Signup failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl">
        <h1 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Create Your Account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 text-sm text-gray-200 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 text-sm text-gray-200 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 text-sm text-gray-200 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 text-sm text-gray-200 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-gray-400">
          Already have an account?{' '}
          <a href="/" className="text-purple-400 hover:text-pink-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
