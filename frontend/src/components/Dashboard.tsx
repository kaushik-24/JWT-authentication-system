import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Task } from '../types/interfaces';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { tasks, setTasks, logout, user } = useAuth();
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get('http://localhost:5000/tasks', { withCredentials: true });
        setTasks(res.data);
      } catch (error) {
        console.error('Fetch tasks error:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/tasks', { withCredentials: true });
      setTasks(res.data);
    } catch (error) {
      console.error('Fetch tasks error:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/tasks', newTask, { withCredentials: true });
      setNewTask({ title: '', description: '' });
      fetchTasks();
    } catch (error) {
      console.error('Add task error:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`, { withCredentials: true });
      fetchTasks();
    } catch (error) {
      console.error('Delete task error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loader scale-150"></div>
      </div>
    );
  }
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Task Manager</h2>
      {user && (
        <p className="text-lg  mb-4">
          Welcome, {user.username} 
        </p>
      )}
     
      {/* Task Creation Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          placeholder="Task Title"
          required
          className="w-full p-3 mb-4 border border-black rounded focus:outline-none focus:ring-2 focus:ring-[#560bad]"
        />
        <textarea
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          placeholder="Description"
          className="w-full p-3 mb-4 border border-black rounded focus:outline-none focus:ring-2 focus:ring-[#560bad] min-h-[100px]"
        />
        <button
          type="submit"
          className=""
        >
          Add Task
        </button>
      </form>

      {/* Task List */}
      <h3 className="text-xl font-semibold mb-4">Your Tasks</h3>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet. Add one above!</p>
      ) : (
        <div className="space-y-4">
          {tasks.map((task: Task) => (
            <div
              key={task.id}
              className="border border-gray-200 p-4 rounded-3xl bg-white"
            >
              <h4 className="text-lg font-medium mb-2">{task.title}</h4>
              <p className="text-gray-600 mb-3">{task.description || 'No description'}</p>
              <button
                onClick={() => deleteTask(task.id)}
                className=""
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
       <button
        onClick={handleLogout}
        className=""
      >
        Logout
      </button>

    </div>
  );
};

export default Dashboard;
