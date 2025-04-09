// frontend/src/types/interfaces.ts

export interface User {
  id: number;
  username: string;
}

export interface Task {
  id: number;
  title: string;
  description: string;
}

export interface AuthContextType {
  user: User | null;
  tasks: Task[];
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

// For backend middleware (if shared between frontend/backend, could move to a shared types folder)
export interface AuthRequest extends Request {
  user?: { id: number };
}
