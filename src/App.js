import React, { useEffect } from "react";
import TodoList from "./components/todoList/todoList";
import TodoInput from "./components/todoInput/todoInput";
import TodoFilter from "./components/todoFilter/todoFilter";

function App() {
  return (
    <div className="App">
      <h1
        style={{
          fontSize: "155px",
          color: "#EBD7D8",
          fontFamily: "Open Sans Condensed",
          fontWeight: 100,
          textAlign: "center"
        }}
      >
        todos
      </h1>
      <TodoInput />
      <TodoList />
      <TodoFilter />
    </div>
  );
}

export default App;
