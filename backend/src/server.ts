import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth';
import taskRoutes from './routes/tasks';
import path from 'path';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: 'https://task-manager-ruddy-rho.vercel.app' }));

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);
app.use(express.static(path.join(__dirname, '../../frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
});
app.listen(5000, () => console.log('Server running on port 5000'));
