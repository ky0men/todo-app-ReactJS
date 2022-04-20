import React, { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

const TodoItem = (props) => {
  const { deleteTodo, editTodo, handleButton } = useContext(TodoContext);
  const [check, setCheck] = useState(false);

  const handleDelete = () => {
    deleteTodo(props.id);
  };

  const handleEdit = () => {
    let item = {
      id: props.id,
      content: props.content,
    };
    editTodo(item);
    handleButton("Edit");
  };

  const handleCheck = (e) => {
    // console.log(e.target.checked);
    // console.log(props.id);
    if (e.target.checked) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };
  return (
    <div className="container">
      <div className="todo-item">
        <input
          type="checkbox"
          name="todo-item"
          id={props.id}
          onChange={handleCheck}
        />
        <p className={`content ${check ? "checked" : ""}`}>{props.content}</p>
        <div className="button-group">
          <button className="btn-edit" onClick={handleEdit}>
            <i className="fas fa-edit"></i>
          </button>
          <button className="btn-delete" onClick={handleDelete}>
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
