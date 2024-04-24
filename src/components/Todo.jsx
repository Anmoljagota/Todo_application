import React, { useState } from "react";
import TodoElements from "./TodoElements";
import { useDispatch, useSelector } from "react-redux";
import { Task_Success } from "../redux/action";
import TodoItems from "./TodoItems";

const Todo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const Todos = useSelector((todos) => todos.todos);
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
      {Todos.length > 0 &&
        Todos.map((ele) => <TodoItems key={ele.id} {...ele} />)}
    </div>
  );
};

export default Todo;
