import React, { useContext, useEffect, useState } from "react";
import TodoContext from "../context/TodoContext";
import { v4 as idv4 } from "uuid";

const TodoForm = () => {
  const [text, setText] = useState("");
  const [messValidate, setmessValidate] = useState("");
  const [btnDisable, setBtnDisable] = useState(true);
  const { addOrEdit } = useContext(TodoContext);
  const { addTodo, editStatus, updateTodo, handleButton } =
    useContext(TodoContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (editStatus.edit === true) {
      setText(editStatus.item.content);
      setBtnDisable(false);
    }
  }, [editStatus]);

  useEffect(() => {
    if (text === "") {
      setmessValidate(null);
      setBtnDisable(true);
    } else if (text !== "" && text.trim().length < 6) {
      setBtnDisable(true);
      setmessValidate("Please input least 6 character!");
    } else {
      setBtnDisable(false);
      setmessValidate(null);
    }
  }, [text]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      content: text,
    };
    newTodo.id = idv4();
    if (editStatus.edit === true) {
      //update todo
      let newUpdate = {
        content: text,
        id: editStatus.item.id,
      };
      updateTodo(newUpdate.id, newUpdate);
      handleButton("Add");
    } else {
      addTodo(newTodo);
    }
    setText("");
  };

  return (
    <div className="container mb-5">
      <form className="todo-form" onSubmit={handleSubmit}>
        <h4>Todo: </h4>
        <div className="input-form">
          <input
            type="text"
            value={text}
            placeholder="Write message here"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={btnDisable}
          >
            {addOrEdit}
          </button>
        </div>
        {messValidate && <div className="mess-validate">{messValidate}</div>}
      </form>
    </div>
  );
};

export default TodoForm;
