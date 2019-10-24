import React from "react";
import TodoList from "./components/todoList/todoList";
import TodoInput from "./components/todoInput/todoInput";
import TodoFilter from "./components/todoFilter/todoFilter";
import FactHeader from "./components/modal/modal";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
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
        <FactHeader />
        <TodoInput />
        <TodoList />
        <TodoFilter />
      </div>
    </DndProvider>
  );
}

export default App;
