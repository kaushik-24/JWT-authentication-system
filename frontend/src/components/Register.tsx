import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import AuthContext

const Register: React.FC = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState<string | null>(null); // Add error state
  const { login } = useAuth(); // Use AuthContext for login
  const navigate = useNavigate(); // Replace window.location.href

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000'; // Use env var

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    try {
      // Register the user
      await axios.post(`${API_URL}/auth/register`, formData, { withCredentials: true });
      // Auto-login after successful registration
      await login(formData.username, formData.password);
      navigate('/dashboard'); // Redirect to dashboard
    } catch (error: any) {
      if (error.response?.status === 409) {
        setError('Username already taken!');
      } else {
        setError('Registration failed. Try again.');
      }
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-md mx-auto p-6 border-l-8 border-b-8 shadow-lg shadow-black rounded-3xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        {error && <p className="text-red-900 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            placeholder="Username"
            className="w-full p-3 border border-black rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#560bad]"
            required
          />
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Password"
            className="w-full p-3 border border-black rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#560bad]"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#560bad] text-white p-3 rounded-3xl shadow-md hover:bg-[#3d076f] transition duration-200"
          >
            Register
          </button>
          <Link to="/login" className="block text-center hover:underline hover:text-[#560bad]">
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
