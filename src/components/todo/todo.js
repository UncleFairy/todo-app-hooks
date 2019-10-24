import React, { useState, useRef } from "react";
import {
  IoMdClose,
  IoIosCheckboxOutline,
  IoMdSquareOutline
} from "react-icons/io";
import "./styles.css";
import { connect } from "react-redux";
import { completeTodo, uncompleteTodo, removeTodo } from "./actions";
import PropTypes from "prop-types";
import { STYLES } from "../types";
import { useDrag, useDrop } from "react-dnd";
import ItemTypes from "../ItemTypes";

export function Todo({
  id,
  isCompleted,
  text,
  completeTodo,
  uncompleteTodo,
  removeTodo,
  index,
  moveTodo
}) {
  const [isCompletedState, setIsCompletedState] = useState(isCompleted);

  const handleChangeIsCompleted = status => () => {
    setIsCompletedState(status);
    if (status) completeTodo(id, text);
    else uncompleteTodo(id, text);
  };

  const deleteTodo = () => removeTodo(id);

  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: ItemTypes.TODO,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveTodo(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.TODO, id, index },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0 : 1;
  const cursor = isDragging ? '':'move';
  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={
        isCompletedState
          ? STYLES.CLASSES.TODO_WRAPPER_COMPLETED
          : STYLES.CLASSES.TODO_WRAPPER
      }
      style={{ opacity, cursor }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-1 nopadding">
            <button
              className="full-width todo-element-height todo-button"
              onClick={handleChangeIsCompleted(!isCompleted)}
            >
              {isCompleted ? (
                <IoIosCheckboxOutline className="todo-button-image" />
              ) : (
                <IoMdSquareOutline className="todo-button-image" />
              )}
            </button>
          </div>
          <div className="col-sm-10 nopadding">
            <p className="full-width todo-element-height todo-p">{text}</p>
          </div>
          <div className="col-sm-1 nopadding">
            <button
              className="full-width todo-element-height todo-button"
              onClick={deleteTodo}
            >
              <IoMdClose className="todo-button-image" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  completeTodo: PropTypes.func.isRequired,
  uncompleteTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  moveTodo: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  completeTodo,
  uncompleteTodo,
  removeTodo
};

export default connect(
  null,
  mapDispatchToProps
)(Todo);
