import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import Todo from "../todo/todo";
import TodoFilter from "../todoFilter/todoFilter";
import PropTypes from "prop-types";
import { filterByIsCompletedStatus } from "./selectors/todo-selectors";
import { FILTERS } from "./types";

function TodoList({ todos, filter, filterByIsCompletedStatus }) {
  const [todoFilter, setTodoFilter] = useState("");

  useEffect(() => {
    todos.length ? setTodoFilter(<TodoFilter />) : setTodoFilter("");
  }, [todos]);

  const allTodo = todos.map(todo => (
    <Todo
      id={todo.id}
      text={todo.text}
      isCompleted={todo.isCompleted}
      key={todo.id}
    />
  ));

  const wrapper = elements => (
    <Fragment>
      {elements.map((element, index) => (
        <div key={index}>{element}</div>
      ))}
    </Fragment>
  );

  switch (filter) {
    case FILTERS.ACTIVE:
      return wrapper([filterByIsCompletedStatus(false), todoFilter]);
    case FILTERS.COMPLETED:
      return wrapper([filterByIsCompletedStatus(true), todoFilter]);
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
  filter: PropTypes.string,
  filterByIsCompletedStatus: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filter,
  filterByIsCompletedStatus: status => filterByIsCompletedStatus(state, status)
});

export default connect(mapStateToProps)(TodoList);
