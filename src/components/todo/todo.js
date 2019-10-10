import React from "react";
import { IoMdClose, IoMdCheckmark } from "react-icons/io";
import "./style.css";

function Todo() {
  return (
    <div className="todo-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-1 nopadding">
            <button
              className="full-width todo-element-height todo-button"
              onClick={null}
            >
              <IoMdCheckmark className="todo-button-image" />
            </button>
          </div>
          <div className="col-sm-10 nopadding">
            <input
              type="text"
              className="full-width todo-element-height todo-input"
            />
          </div>
          <div className="col-sm-1 nopadding">
            <button className="full-width todo-element-height todo-button">
              <IoMdClose className="todo-button-image" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;

// {/*<div style={{height: '50px', width: '600px', border: "1px solid black", margin: '0 auto'}}>*/}
// {/*  <button style={{height: '50px', width: '50px', margin: 0}}><IoMdCheckmark /></button>*/}
// {/*  <input type='text' style={{height: '50px', width: '500px', margin: 0}}/>*/}
// {/*  <button style={{height: '50px', width: '50px', margin: 0}}><IoMdClose /></button>*/}
// {/*</div>*/}
