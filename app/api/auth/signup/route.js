import User from '../../../../models/user'; // Adjust the path accordingly
import { NextResponse } from 'next/server';

app.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = await User.create({ username, email, password });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
