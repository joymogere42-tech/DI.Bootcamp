import React, {

  createContext,
  useContext,
  useReducer,
  useState,
  useRef

} from "react";



/* =========================
   CONTEXT
========================= */

const TaskContext = createContext();



/* =========================
   INITIAL STATE
========================= */

const initialState = {

  tasks: [],

  filter: "all"

};



/* =========================
   REDUCER
========================= */

function taskReducer(state, action) {

  switch (action.type) {



    /* ADD TASK */

    case "ADD_TASK":

      return {

        ...state,

        tasks: [

          ...state.tasks,

          {

            id: Date.now(),

            text: action.payload,

            completed: false

          }

        ]

      };



    /* TOGGLE TASK */

    case "TOGGLE_TASK":

      return {

        ...state,

        tasks: state.tasks.map(task =>

          task.id === action.payload

            ? {

                ...task,

                completed: !task.completed

              }

            : task

        )

      };



    /* EDIT TASK */

    case "EDIT_TASK":

      return {

        ...state,

        tasks: state.tasks.map(task =>

          task.id === action.payload.id

            ? {

                ...task,

                text: action.payload.text

              }

            : task

        )

      };



    /* FILTER TASKS */

    case "FILTER_TASKS":

      return {

        ...state,

        filter: action.payload

      };



    default:

      return state;

  }

}



/* =========================
   TASK PROVIDER
========================= */

function TaskProvider({ children }) {

  const [state, dispatch] =
    useReducer(taskReducer, initialState);



  return (

    <TaskContext.Provider
      value={{ state, dispatch }}
    >

      {children}

    </TaskContext.Provider>

  );

}



/* =========================
   TASK INPUT
========================= */

function TaskInput() {

  const [task, setTask] =
    useState("");

  const { dispatch } =
    useContext(TaskContext);



  const handleSubmit = (e) => {

    e.preventDefault();

    if (!task.trim()) return;



    dispatch({

      type: "ADD_TASK",

      payload: task

    });



    setTask("");

  };



  return (

    <form onSubmit={handleSubmit}>

      <input

        type="text"

        placeholder="Add task..."

        value={task}

        onChange={(e) =>
          setTask(e.target.value)
        }

      />



      <button type="submit">

        Add

      </button>

    </form>

  );

}



/* =========================
   FILTER BUTTONS
========================= */

function FilterButtons() {

  const { dispatch } =
    useContext(TaskContext);



  return (

    <div style={{ marginTop: "20px" }}>

      <button
        onClick={() =>
          dispatch({
            type: "FILTER_TASKS",
            payload: "all"
          })
        }
      >
        All
      </button>



      <button
        onClick={() =>
          dispatch({
            type: "FILTER_TASKS",
            payload: "completed"
          })
        }
      >
        Completed
      </button>



      <button
        onClick={() =>
          dispatch({
            type: "FILTER_TASKS",
            payload: "active"
          })
        }
      >
        Active
      </button>

    </div>

  );

}



/* =========================
   TASK LIST
========================= */

function TaskList() {

  const { state, dispatch } =
    useContext(TaskContext);



  const [editingId, setEditingId] =
    useState(null);



  const editRef = useRef();



  /* FILTER LOGIC */

  const filteredTasks =
    state.tasks.filter(task => {

      if (state.filter === "completed") {

        return task.completed;

      }

      if (state.filter === "active") {

        return !task.completed;

      }

      return true;

    });



  /* SAVE EDIT */

  const saveEdit = (id) => {

    dispatch({

      type: "EDIT_TASK",

      payload: {

        id: id,

        text: editRef.current.value

      }

    });



    setEditingId(null);

  };



  return (

    <div style={{ marginTop: "20px" }}>

      {
        filteredTasks.map(task => (

          <div
            key={task.id}

            style={{
              marginBottom: "10px"
            }}
          >

            {/* TASK TEXT */}

            {
              editingId === task.id ? (

                <>

                  <input

                    ref={editRef}

                    defaultValue={task.text}

                  />



                  <button
                    onClick={() =>
                      saveEdit(task.id)
                    }
                  >
                    Save
                  </button>

                </>

              ) : (

                <>
                  <span

                    onClick={() =>
                      dispatch({

                        type: "TOGGLE_TASK",

                        payload: task.id

                      })
                    }

                    style={{

                      textDecoration:
                        task.completed
                          ? "line-through"
                          : "none",

                      cursor: "pointer",

                      marginRight: "10px"

                    }}

                  >

                    {task.text}

                  </span>



                  <button
                    onClick={() =>
                      setEditingId(task.id)
                    }
                  >
                    Edit
                  </button>

                </>

              )
            }

          </div>

        ))
      }

    </div>

  );

}



/* =========================
   APP
========================= */

function App() {

  return (

    <TaskProvider>

      <div style={{ padding: "20px" }}>

        <h1>
          Task Manager
        </h1>



        <TaskInput />



        <FilterButtons />



        <TaskList />

      </div>

    </TaskProvider>

  );

}

export default App;