import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoItemList = () => {
  const { todoData } = useContext(TodoContext);
  return (
    <div>
      {todoData.map((item) => (
        <TodoItem key={item.id} id={item.id} content={item.content}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItemList;
