import React, { useState } from "react";
import { connect } from "react-redux";
import { addFilter } from "./actions";
import { clearCompleted } from "../todo/actions";
import "./styles.css";
import { getCounter, getTodoCount } from "./selectors/todo-selectors";
import PropTypes from "prop-types";
import { STYLES } from "../types";
import classnames from "classnames";
import { FILTERS } from "./types";

function TodoFilter({ addFilter, clearCompleted, counter, isDisplayFilter }) {
  const [activeButtonClassname, setClassName] = useState("");

  const handleChangeFilter = ({ target: { value } }) => {
    setClassName(value);
    addFilter(value);
  };

  const clearCompletedTodo = () => clearCompleted();

  return (
    <div
      className={classnames({
        [STYLES.CLASSES.DISPLAY_NONE]: !isDisplayFilter
      })}
    >
      <div className="todoInput-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <p>{counter} items left</p>
            </div>
            <div className="col-sm-5 types">
              <button
                className={classnames({
                  [STYLES.CLASSES.FILTER]: activeButtonClassname === FILTERS.ALL
                })}
                onClick={handleChangeFilter}
                value={FILTERS.ALL}
              >
                All
              </button>
              <button
                className={classnames({
                  [STYLES.CLASSES.FILTER]:
                    activeButtonClassname === FILTERS.ACTIVE
                })}
                onClick={handleChangeFilter}
                value={FILTERS.ACTIVE}
              >
                Active
              </button>
              <button
                className={classnames({
                  [STYLES.CLASSES.FILTER]:
                    activeButtonClassname === FILTERS.COMPLETED
                })}
                onClick={handleChangeFilter}
                value={FILTERS.COMPLETED}
              >
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
  counter: PropTypes.number.isRequired,
  isDisplayFilter: PropTypes.number.isRequired
};

const matchDispatchToProps = {
  addFilter,
  clearCompleted
};

const mapStateToProps = state => ({
  counter: getCounter(state),
  isDisplayFilter: getTodoCount(state)
});

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(TodoFilter);
