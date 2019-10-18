import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "./actions";
import "./styles.css";

function TodoInput(props) {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");

  const handleValueChange = e => {
    setInputError("");
    setInputValue(e.target.value);
  };

  const setNewTodo = e => {
    e.preventDefault();
    if (!isNaN(parseInt(inputValue))) {
      setInputError("Your task should not begin with number or be a number");
    } else if (!(inputValue.length > 5)) {
      setInputError("Your task is too short :(");
    } else {
      props.addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <div>
      <div className="todoInput-wrapper">
        <form onSubmit={setNewTodo}>
          <input
            type="text"
            placeholder="What needs to be done?"
            className="todoInput-input"
            onChange={handleValueChange}
            value={inputValue}
          />
        </form>
      </div>
      <div className="todoInput-error">
        {inputError ? <p>{inputError}</p> : ""}
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  addTodo
};

export default connect(
  null,
  mapDispatchToProps
)(TodoInput);
