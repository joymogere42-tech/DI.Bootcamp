import React, {

  createContext,
  useContext,
  useState,
  useRef

} from "react";



/* =========================
   THEME CONTEXT
========================= */

const ThemeContext = createContext();



/* =========================
   THEME PROVIDER
========================= */

function ThemeProvider({ children }) {

  const [theme, setTheme] = useState("light");



  const toggleTheme = () => {

    setTheme(

      theme === "light"
        ? "dark"
        : "light"

    );

  };



  return (

    <ThemeContext.Provider

      value={{
        theme,
        toggleTheme
      }}

    >

      {children}

    </ThemeContext.Provider>

  );

}



/* =========================
   THEME SWITCHER
========================= */

function ThemeSwitcher() {

  const { theme, toggleTheme } =
    useContext(ThemeContext);



  return (

    <button onClick={toggleTheme}>

      Switch Theme

    </button>

  );

}



/* =========================
   THEMED CONTENT
========================= */

function Content() {

  const { theme } =
    useContext(ThemeContext);



  const styles = {

    backgroundColor:
      theme === "light"
        ? "white"
        : "black",

    color:
      theme === "light"
        ? "black"
        : "white",

    padding: "20px",

    marginTop: "20px"

  };



  return (

    <div style={styles}>

      <h1>
        Current Theme:
        {theme}
      </h1>

      <p>
        This content changes theme.
      </p>

    </div>

  );

}



/* =========================
   CHARACTER COUNTER
========================= */

function CharacterCounter() {

  const inputRef = useRef();

  const [count, setCount] = useState(0);



  const handleInput = () => {

    const length =
      inputRef.current.value.length;

    setCount(length);

  };



  return (

    <div style={{ marginTop: "40px" }}>

      <h1>
        Character Counter
      </h1>



      <input

        type="text"

        ref={inputRef}

        onInput={handleInput}

        placeholder="Type something..."

      />



      <p>

        Characters:
        {count}

      </p>

    </div>

  );

}



/* =========================
   APP
========================= */

function App() {

  return (

    <ThemeProvider>

      <div style={{ padding: "20px" }}>

        <h1>
          React Hooks Exercises
        </h1>



        <ThemeSwitcher />



        <Content />



        <CharacterCounter />

      </div>

    </ThemeProvider>

  );

}

export default App;