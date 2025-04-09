import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/auth/register', formData);
      window.location.href = '/login';
    } catch (error) {
      alert('Already registered!');
    }
  };

  return (
    <div className='h-screen flex justify-center items-center '>
    <div className='max-w-md mx-auto p-6 border-l-8 border-b-8 shadow-lg shadow-black  rounded-3xl  '>
      <h2 className='text-2xl font-bold mb-6 text-center'>Register</h2>
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
        <button type="submit">Register</button>
        <Link to='/login' className='ml-8 hover:underline hover:text-[#560bad]'>Already have an account ?</Link>
      </form>
    </div>
    </div>
  );
};

export default Register;

