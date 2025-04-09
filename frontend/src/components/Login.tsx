import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const Navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('https://task-manager-g9gi.onrender.com/auth/login', formData, { withCredentials: true });
      Navigate('/dashboard');
    } catch (error) {
      alert('incorrect username or password');
    }
  };

  return (
    <div className='flex h-screen justify-center items-center'>
    <div className='max-w-md mx-auto p-6 border-l-8 border-b-8 shadow-lg shadow-black  rounded-3xl  '>
      <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
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
        <button type="submit">Login</button>
        <Link to="/register" className='hover:underline hover:text-[#560bad] ml-10'>Not registered ?</Link>
      </form>
    </div>
    </div>
  );
};

export default Login;

