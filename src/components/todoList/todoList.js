import React from "react";
import { connect } from "react-redux";
import Todo from "../todo/todo";
import PropTypes from "prop-types";

function TodoList({ todos }) {
  // console.log(props);
  return todos.map(todo => (
    <Todo id={todo.id} text={todo.text} isCompleted={todo.isCompleted} />
  ));
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

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps)(TodoList);
