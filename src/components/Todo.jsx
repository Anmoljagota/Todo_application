import React, { useState } from "react";
import TodoElements from "./TodoElements";
import { useDispatch, useSelector } from "react-redux";
import { Task_Success } from "../redux/action";

const Todo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  useSelector((todos) => console.log(todos, "todo"));
  const handleTodo = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = () => {
    const todo = { id: Math.random() * 10 + 0 * 432 - 21, text, status: false };
    dispatch(Task_Success(todo));
  };
  return (
    <div>
      <TodoElements handleTodo={handleTodo} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Todo;
