import express, { Request, Response } from 'express';
import dbase from '../config/db';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();

interface AuthRequest extends Request {
  user?: { id: number };
}

router.get('/', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const [rows] = await dbase.query('SELECT * FROM tasks WHERE user_id = ?', [req.user?.id]);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', authenticateToken, async (req: AuthRequest, res: Response) => {
  const { title, description } = req.body;
  try {
    await dbase.query('INSERT INTO tasks (user_id, title, description) VALUES (?, ?, ?)', [
      req.user?.id,
      title,
      description,
    ]);
    res.status(201).json({ message: 'Task created' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:id', authenticateToken, async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  try {
    await dbase.query('DELETE FROM tasks WHERE id = ? AND user_id = ?', [id, req.user?.id]);
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/me', authenticateToken, async (req: Request, res: Response) => {
  const userId = (req as any).user.id; // From authenticateToken middleware
  try {
    const [rows] = await dbase.query('SELECT id, username FROM users WHERE id = ?', [userId]);
    const user = (rows as any[])[0];
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ user: { id: user.id, username: user.username } });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});
export default router;
