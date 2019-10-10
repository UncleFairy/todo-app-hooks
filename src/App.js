import React from "react";
import Todo from "./components/todo/todo";
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
      <Todo />
    </div>
  );
}

export default App;
