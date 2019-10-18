import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import Todo from "../todo/todo";
import TodoFilter from "../todoFilter/todoFilter";
import Wrapper from "../../comon/components/wrapper";
import PropTypes from "prop-types";
import { Droppable, DragDropContext } from "react-beautiful-dnd";

import { filterByIsCompletedStatus } from "./selectors/todo-selectors";
import { FILTERS } from "./types";

function TodoList({ todos, filter, filterByIsCompletedStatus }) {
  const [todoFilter, setTodoFilter] = useState("");

  useEffect(() => {
    todos.length ? setTodoFilter(<TodoFilter />) : setTodoFilter("");
  }, [todos]);

  const allTodo = todos.map((todo, index) => (
    <Todo
      id={todo.id}
      key={todo.id}
      text={todo.text}
      isCompleted={todo.isCompleted}
      index={index}
    />
  ));
  const onDragEnd = result => "cucu";

  const wrapper = elements => (
    <DragDropContext onDragEnd={onDragEnd}>
      {elements.map(element => (
        <div>{element}</div>
      ))}
      ;
    </DragDropContext>
  );

  const addDroppable = element => (
    <Droppable droppbleId={"drop1"}>
      {provided => (
        <Wrapper innerRef={provided.innerRef} {...provided.droppableProps}>
          {element}
        </Wrapper>
      )}
    </Droppable>
  );

  switch (filter) {
    case FILTERS.ACTIVE:
      return wrapper([
        addDroppable(filterByIsCompletedStatus(false)),
        todoFilter
      ]);
      break;
    case FILTERS.COMPLETED:
      return wrapper([
        addDroppable(filterByIsCompletedStatus(true)),
        todoFilter
      ]);
      break;
    default:
      return wrapper([addDroppable(allTodo), todoFilter]);
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
