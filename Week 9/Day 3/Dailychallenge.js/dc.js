// Import necessary libraries
import React, { useState } from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

// 1. Create the slice for task management
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    // tasksByDay: { '2024-04-27': [{ id, text }], ... }
    tasksByDay: {},
  },
  reducers: {
    addTask: (state, action) => {
      const { day, task } = action.payload;
      if (!state.tasksByDay[day]) {
        state.tasksByDay[day] = [];
      }
      state.tasksByDay[day].push({ id: Date.now(), text: task });
    },
    editTask: (state, action) => {
      const { day, taskId, newText } = action.payload;
      const dayTasks = state.tasksByDay[day];
      if (dayTasks) {
        const task = dayTasks.find(t => t.id === taskId);
        if (task) {
          task.text = newText;
        }
      }
    },
    deleteTask: (state, action) => {
      const { day, taskId } = action.payload;
      if (state.tasksByDay[day]) {
        state.tasksByDay[day] = state.tasksByDay[day].filter(t => t.id !== taskId);
      }
    },
  },
});

const { addTask, editTask, deleteTask } = tasksSlice.actions;

// 2. Set up the Redux store
const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});

// 3. Calendar/Date Picker Component
function Calendar({ selectedDay, setSelectedDay }) {
  // For simplicity, generate a few days
  const days = ['2024-04-25', '2024-04-26', '2024-04-27', '2024-04-28'];
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      {days.map(day => (
        <button
          key={day}
          onClick={() => setSelectedDay(day)}
          style={{
            padding: '10px',
            backgroundColor: selectedDay === day ? '#007bff' : '#f0f0f0',
            color: selectedDay === day ? '#fff' : '#000',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {day}
        </button>
      ))}
    </div>
  );
}

// 4. Task List Component
function TaskList({ selectedDay }) {
  const tasks = useSelector((state) => state.tasks.tasksByDay[selectedDay] || []);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Tasks for {selectedDay}:</h3>
      {tasks.length === 0 ? (
        <p>No tasks for this day.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <input
              type="text"
              value={task.text}
              onChange={(e) => {
                dispatch(editTask({ day: selectedDay, taskId: task.id, newText: e.target.value }));
              }}
              style={{ marginRight: '10px', flex: 1 }}
            />
            <button
              onClick={() => dispatch(deleteTask({ day: selectedDay, taskId: task.id }))}
              style={{ marginLeft: '10px' }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

// 5. Add Task Component
function AddTask({ selectedDay }) {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (taskText.trim() !== '') {
      dispatch(addTask({ day: selectedDay, task: taskText }));
      setTaskText('');
    }
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <input
        type="text"
        placeholder="New task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        style={{ padding: '8px', width: '200px', marginRight: '10px' }}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}

// 6. Main App Component
function App() {
  const [selectedDay, setSelectedDay] = useState('2024-04-25');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Daily Planner</h1>
      <Calendar selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <AddTask selectedDay={selectedDay} />
      <TaskList selectedDay={selectedDay} />
    </div>
  );
}

// 7. Render the app within Provider
export default function DailyPlannerApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}