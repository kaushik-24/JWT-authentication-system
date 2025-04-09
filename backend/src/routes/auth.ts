import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dbase from '../config/db';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();

//  Register Endpoint
router.post('/register', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await dbase.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Username already exists' });
  }
});

//  Login Endpoint
router.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const [rows] = await dbase.query('SELECT * FROM users WHERE username = ?', [username]);
    const user = (rows as any[])[0];
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    res.cookie('token', token, { 
      httpOnly: true,
      secure: true,//requires htpps
      sameSite: 'none', //allows cross-site requests
      partitioned: true,//enables chips for cross-site isolation
      maxAge: 60 * 60 * 100,
    });
    res.json({ message: 'Logged in successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

//  Logout Endpoint
router.post('/logout', (req: Request, res: Response) => {
  res.clearCookie('token'); // Clears the 'token' cookie
  res.json({ message: 'Logged out successfully' });
});

// Authenticated User Info Endpoint
router.get('/me', authenticateToken, async (req: Request, res: Response) => {
  const userId = (req as any).user.id; // From authenticateToken middleware
  try {
    const [rows] = await dbase.query('SELECT id, username FROM users WHERE id = ?', [userId]);
    const user = (rows as any[])[0];
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ user: { id: user.id, username: user.username } });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
