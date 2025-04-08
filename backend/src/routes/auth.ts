import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dbase from '../config/db';

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
    res.cookie('token', token, { httpOnly: true });
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

export default router;
