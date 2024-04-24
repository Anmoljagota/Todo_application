import React from "react";

const TodoItems = ({ id, text, status }) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default TodoItems;
