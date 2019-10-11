import React from "react";
import { connect } from "react-redux";
import Todo from "../todo/todo";

function TodoList(props) {
  console.log(props);
  return props.todos.map(todo => (
    <Todo id={todo.id} text={todo.text} isCompleted={todo.isCompleted} />
  ));
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(TodoList);
