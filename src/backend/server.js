const express = require('express');
const PouchDB = require('pouchdb');
const app = express();
const port = 3000;

const db = new PouchDB('users');

app.use(express.json());

// API route to handle user signup
app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await db.get(username);
        return res.status(400).json({ error: 'Username already exists.' });
    } catch (err) {
        if (err.status === 404) {
            await db.put({ _id: username, password });
            return res.status(201).json({ message: 'Signup successful!' });
        }
        return res.status(500).json({ error: 'Internal server error.' });
    }
});

// API route to handle user login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await db.get(username);
        if (user.password === password) {
            return res.status(200).json({ message: 'Login successful!' });
        } else {
            return res.status(400).json({ error: 'Invalid username or password.' });
        }
    } catch (err) {
        return res.status(400).json({ error: 'Invalid username or password.' });
    }
});

// API route to handle getting user goals
app.get('/goals/:username', async (req, res) => {
    const { username } = req.params;
    try {
        const user = await db.get(username);
        return res.status(200).json(user.goals || {});
    } catch (err) {
        return res.status(404).json({ error: 'User not found.' });
    }
});

// API route to handle updating user goals
app.put('/goals/:username', async (req, res) => {
    const { username } = req.params;
    const goals = req.body;
    try {
        const user = await db.get(username);
        user.goals = goals;
        await db.put(user);
        return res.status(200).json({ message: 'Goals updated successfully!' });
    } catch (err) {
        return res.status(500).json({ error: 'Failed to update goals.' });
    }
});

// Serve static files for the front-end
app.use(express.static('../frontend'));

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
