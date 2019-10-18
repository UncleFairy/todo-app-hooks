import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import Todo from "../todo/todo";
import PropTypes from "prop-types";
import { filterByIsCompletedStatus } from "./selectors/todo-selectors";

function TodoList({ todos }) {
  const allTodos = todos.map(todo => (
    <Todo
      id={todo.id}
      text={todo.text}
      isCompleted={todo.isCompleted}
      key={todo.id}
    />
  ));

  return allTodos;
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
