import React from "react";
import { connect } from "react-redux";
import { addFilter } from "./actions";
import { clearCompleted } from "../todo/actions";
import "./styles.css";
import { getCounter } from "./selectors/todo-selectors";
import PropTypes from "prop-types";

function TodoFilter(props) {
  const handleChangeFilter = e => {
    const prevFilter = document.getElementsByClassName("filter");
    if (prevFilter.length) prevFilter[0].className = "";
    e.target.className = "filter";
    props.addFilter(e.target.value);
  };

  const clearCompletedTodo = () => props.clearCompleted();

  return (
    <div>
      <div className="todoInput-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <p>{props.counter} items left</p>
            </div>
            <div className="col-sm-5 types">
              <button onClick={handleChangeFilter} value="all">
                All
              </button>
              <button onClick={handleChangeFilter} value="active">
                Active
              </button>
              <button onClick={handleChangeFilter} value="completed">
                Completed
              </button>
            </div>
            <div className="col-sm-4">
              <button onClick={clearCompletedTodo}>Clear completed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

TodoFilter.propTypes = {
  addFilter: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

const matchDispatchToProps = {
  addFilter,
  clearCompleted
};

const mapStateToProps = state => ({
  counter: getCounter(state)
});

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(TodoFilter);
