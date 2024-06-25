import React, { useState } from "react";
import "./TodoList.css";
import TodoInput from "./TodoInput";

const TodoList = ({ initialList }) => {
  const [todos, setTodos] = useState(initialList);

  const changeCompleted = (item) => {
    setTodos(
      todos.map((el) => {
        if (el.id === item) {
          return { ...el, completed: !el.completed };
        }
        return el;
      })
    );
  };

  const deleteItem = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  return (
    <div className="page">
      <div className="block">
        <h2 className="title">
          <em>Todo list</em>
        </h2>
        <TodoInput todos={todos} setTodos={setTodos} />
        <div className="checkboxCase">
          {todos.map((el, i) => (
            <div
              key={i}
              className={`checkboxList ${el.completed ? "checkedItem" : ""}`}
            >
              <input
                type="checkbox"
                id="checkbox"
                onClick={() => changeCompleted(el.id)}
              />
              <label className="listItem" htmlFor="checkbox">
                {el.name}
              </label>
              <button className="button" onClick={() => deleteItem(el.id)}>
                Удалить
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
