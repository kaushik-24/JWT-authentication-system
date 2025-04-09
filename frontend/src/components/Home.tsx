import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-md mx-auto p-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Task Manager</h1>
        <p className="text-gray-600 mb-6">
          Organize your tasks easily. Sign up or log in to get started!
        </p>
        <div className="space-y-4">
          <button>
          <Link
            to="/login"
          >
            Login
          </Link>
          </button>
          <button>
          <Link
            to="/register"
          >
            Register
          </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
