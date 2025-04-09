import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { AuthContextType, User, Task } from '../types/interfaces';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userRes = await axios.get('https://task-manager-g9gi.onrender.com/auth/me', { withCredentials: true });
        setUser(userRes.data.user);
        const tasksRes = await axios.get('https://task-manager-g9gi.onrender.com/tasks', { withCredentials: true });
        setTasks(tasksRes.data);
      } catch (error: any) {
        // Handle 401/403 silently (unauthenticated user)
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          setUser(null);
          setTasks([]);
        } else {
          // Log unexpected errors
          console.error('Auth check error:', error);
          setUser(null);
          setTasks([]);
        }
      }
    };
    checkAuth();
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const res = await axios.post(
        'https://task-manager-g9gi.onrender.com/auth/login',
        { username, password },
        { withCredentials: true }
      );
      setUser(res.data.user);
      const tasksRes = await axios.get('https://task-manager-g9gi.onrender.com/tasks', { withCredentials: true });
      setTasks(tasksRes.data);
    } catch (error) {
      throw error; // Let Login.tsx handle this
    }
  };

  const logout = async () => {
    try {
      await axios.post('https://task-manager-g9gi.onrender.com/auth/logout', {}, { withCredentials: true });
      setUser(null);
      setTasks([]);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, tasks, login, logout, setTasks }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

