import React, { useState } from "react";
import { IoMdClose, IoMdCheckmark } from "react-icons/io";
import "./styles.css";
import { connect } from "react-redux";
import { completeTodo, uncompleteTodo } from "./actions";
import PropTypes from "prop-types";

function Todo(props) {
  const [isCompleted, setIsCompleted] = useState(props.isCompleted);

  const handleChangeIsCompleted = status => () => {
    setIsCompleted(status);
    if (status) props.completed(props.id, props.text);
    else props.uncompleted(props.id, props.text);
  };

  return (
    <div className="todo-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-1 nopadding">
            <button
              className="full-width todo-element-height todo-button"
              onClick={handleChangeIsCompleted(true)}
            >
              <IoMdCheckmark className="todo-button-image" />
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
              onClick={handleChangeIsCompleted(false)}
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
  id: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.func.isRequired,
  uncompleted: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    completed: (id, text) => dispatch(completeTodo(id, text)),
    uncompleted: (id, text) => dispatch(uncompleteTodo(id, text))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Todo);
