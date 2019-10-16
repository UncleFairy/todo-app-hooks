import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import Todo from "../todo/todo";
import TodoFilter from "../todoFilter/todoFilter";
import PropTypes from "prop-types";

function TodoList({ todos, filter }) {
  const [todoFilter, setTodoFilter] = useState("");
  useEffect(() => {
    todos.length ? setTodoFilter(<TodoFilter />) : setTodoFilter("");
  }, [todos]);

  const filterByIsCompletedStatus = status =>
    todos
      .filter(todo => todo.isCompleted === status)
      .map(todo => (
        <Todo id={todo.id} text={todo.text} isCompleted={todo.isCompleted} />
      ));

  const allTodo = todos.map(todo => (
    <Todo id={todo.id} text={todo.text} isCompleted={todo.isCompleted} />
  ));

  const wrapper = elements => (
    <Fragment>
      {elements.map(element => (
        <div>{element}</div>
      ))}
    </Fragment>
  );

  switch (filter) {
    case "active":
      return wrapper([filterByIsCompletedStatus(false), todoFilter]);
      break;
    case "completed":
      return wrapper([filterByIsCompletedStatus(true), todoFilter]);
      break;

    default:
      return wrapper([allTodo, todoFilter]);
  }
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  filter: PropTypes.string
};

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filter
});

export default connect(mapStateToProps)(TodoList);
