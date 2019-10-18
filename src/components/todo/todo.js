import React, { useState } from "react";
import {
  IoMdClose,
  IoIosCheckboxOutline,
  IoMdSquareOutline
} from "react-icons/io";
import "./styles.css";
import { connect } from "react-redux";
import { completeTodo, uncompleteTodo, removeTodo } from "./actions";
import PropTypes from "prop-types";

export function Todo(props) {
  const [isCompleted, setIsCompleted] = useState(props.isCompleted);

  const handleChangeIsCompleted = status => () => {
    setIsCompleted(status);
    if (status) props.completeTodo(props.id, props.text);
    else props.uncompleteTodo(props.id, props.text);
  };

  const deleteTodo = () => props.removeTodo(props.id);

  return (
    <div
      className={props.isCompleted ? "todo-wrapper completed" : "todo-wrapper"}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-1 nopadding">
            <button
              className="full-width todo-element-height todo-button"
              onClick={handleChangeIsCompleted(!isCompleted)}
            >
              {props.isCompleted ? (
                <IoIosCheckboxOutline className="todo-button-image" />
              ) : (
                <IoMdSquareOutline className="todo-button-image" />
              )}
            </button>
          </div>
          <div className="col-sm-10 nopadding">
            <p className="full-width todo-element-height todo-p">
              {props.text}
            </p>
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
  removeTodo: PropTypes.func.isRequired
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
