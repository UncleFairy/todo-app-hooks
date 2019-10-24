import React, { useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import Todo from "../todo/todo";
import PropTypes from "prop-types";
import { filterByIsCompletedStatus } from "./selectors/todo-selectors";
import update from "immutability-helper";

function TodoList({ todos }) {
  const [todosList, setTodosList] = useState(todos);

  useEffect(() => {
    setTodosList(todos);
  }, [todos]);

  const moveTodo = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = todosList[dragIndex];
      setTodosList(
        update(todosList, {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
        })
      );
    },
    [todosList]
  );

  const renderTodo = (todo, index) => (
    <Todo
      id={todo.id}
      index={index}
      text={todo.text}
      isCompleted={todo.isCompleted}
      key={todo.id}
      moveTodo={moveTodo}
    />
  );

  return todosList.map((todo, index) => renderTodo(todo, index));
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};

const mapStateToProps = state => {
  return {
    todos: filterByIsCompletedStatus(state)
  };
};

export default connect(mapStateToProps)(TodoList);
