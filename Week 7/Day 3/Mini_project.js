const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'tasks.json');

app.use(express.json()); // For parsing application/json

// Helper function to read tasks from file
async function readTasks() {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading tasks:', err);
        throw err;
    }
}

// Helper function to write tasks to file
async function writeTasks(tasks) {
    try {
        await fs.writeFile(DATA_FILE, JSON.stringify(tasks, null, 2));
    } catch (err) {
        console.error('Error writing tasks:', err);
        throw err;
    }
}

// Create router
const router = express.Router();

// GET /tasks - Retrieve all tasks
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await readTasks();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to read tasks' });
    }
});

// GET /tasks/:id - Retrieve task by ID
router.get('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const tasks = await readTasks();
        const task = tasks.find(t => t.id === id);
        if (task) {
            res.json(task);
        } else {
            res.status(404).json({ error: 'Task not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to read tasks' });
    }
});

// POST /tasks - Create a new task
router.post('/tasks', async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }
    try {
        const tasks = await readTasks();
        const newTask = {
            id: Date.now().toString(),
            title,
            description,
            completed: false
        };
        tasks.push(newTask);
        await writeTasks(tasks);
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create task' });
    }
});

// PUT /tasks/:id - Update a task
router.put('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    try {
        const tasks = await readTasks();
        const taskIndex = tasks.findIndex(t => t.id === id);
        if (taskIndex === -1) {
            return res.status(404).json({ error: 'Task not found' });
        }
        const task = tasks[taskIndex];
        // Update fields if provided
        if (title !== undefined) task.title = title;
        if (description !== undefined) task.description = description;
        if (completed !== undefined) task.completed = completed;
        tasks[taskIndex] = task;
        await writeTasks(tasks);
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update task' });
    }
});

// DELETE /tasks/:id - Delete a task
router.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const tasks = await readTasks();
        const newTasks = tasks.filter(t => t.id !== id);
        if (newTasks.length === tasks.length) {
            return res.status(404).json({ error: 'Task not found' });
        }
        await writeTasks(newTasks);
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete task' });
    }
});

// Use the router
app.use('/', router);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});