const express = require('express');
const fs = require('fs').promises;
const bcrypt = require('bcrypt');
const path = require('path');

const app = express();
const PORT = 3000;
const USERS_FILE = path.join(__dirname, 'users.json');

app.use(express.json()); // For parsing JSON request bodies
app.use(express.static('public')); // Serve static HTML files

// Helper functions
async function readUsers() {
    try {
        const data = await fs.readFile(USERS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading users:', err);
        throw err;
    }
}

async function writeUsers(users) {
    try {
        await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
    } catch (err) {
        console.error('Error writing users:', err);
        throw err;
    }
}

// Router
const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
    const { firstName, lastName, email, username, password } = req.body;

    if (!firstName || !lastName || !email || !username || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const users = await readUsers();

        // Check if username exists
        const existingUser = users.find(u => u.username === username);
        if (existingUser) {
            return res.json({ message: 'error1' }); // Username exists
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            id: Date.now().toString(),
            firstName,
            lastName,
            email,
            username,
            password: hashedPassword
        };

        users.push(newUser);
        await writeUsers(users);
        res.json({ message: 'register' });
    } catch (err) {
        res.status(500).json({ message: 'Error registering user' });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.json({ message: 'error1' });
    }

    try {
        const users = await readUsers();
        const user = users.find(u => u.username === username);
        if (!user) {
            return res.json({ message: 'error1' }); // User not found
        }

        const match = await bcrypt.compare(password, user.password);
        if (match) {
            res.json({ message: 'login' });
        } else {
            res.json({ message: 'error1' }); // Wrong password
        }
    } catch (err) {
        res.status(500).json({ message: 'Error during login' });
    }
});

// Get all users (for demo)
router.get('/users', async (req, res) => {
    try {
        const users = await readUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

// Get user by ID
router.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const users = await readUsers();
        const user = users.find(u => u.id === id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch user' });
    }
});

// Update user by ID
router.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, username } = req.body;
    try {
        const users = await readUsers();
        const index = users.findIndex(u => u.id === id);
        if (index === -1) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Update fields
        if (firstName !== undefined) users[index].firstName = firstName;
        if (lastName !== undefined) users[index].lastName = lastName;
        if (email !== undefined) users[index].email = email;
        if (username !== undefined) users[index].username = username;

        await writeUsers(users);
        res.json({ message: 'User updated', user: users[index] });
    } catch (err) {
        res.status(500).json({ error: 'Failed to update user' });
    }
});

app.use('/', router);

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});