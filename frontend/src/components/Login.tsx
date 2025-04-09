import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState<string | null>(null); // Add error state
  const { login } = useAuth(); // Use AuthContext
  const navigate = useNavigate(); // Replace window.location.href

  const API_URL = process.env.REACT_APP_API_URL || 'https://task-manager-g9gi.onrender.com';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await login(formData.username, formData.password); // Use AuthContext login
      navigate('/dashboard'); // Navigate client-side
    } catch (error: any) {
      setError('Incorrect username or password');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="max-w-md mx-auto p-6 border-l-8 border-b-8 shadow-lg shadow-black rounded-3xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            placeholder="Username"
            className="w-full p-3 border border-black rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#560bad]"
            required
          />
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Password"
            className="w-full p-3 border border-black rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#560bad]"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#560bad] text-white p-3 rounded-3xl shadow-md hover:bg-[#3d076f] transition duration-200"
          >
            Login
          </button>
          <Link to="/register" className="block text-center hover:underline hover:text-[#560bad]">
            Not registered?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
