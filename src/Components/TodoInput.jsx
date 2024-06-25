import React, { useState } from "react";

const TodoInput = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    const newTodo = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      name: inputValue,
      completed: false,
    };
    if (inputValue) setTodos([...todos, newTodo]);
    setInputValue("");
  };

  return (
    <div className="inputCase">
      <input
        type="text"
        className="input"
        placeholder="Введите новое дело"
        maxLength="30"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button className="button" onClick={() => addTodo()}>
        Добавить
      </button>
    </div>
  );
};

export default TodoInput;
