import { createContext, useState } from "react";
import todoDatas from "../data/TodoData";

const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
  const [todoData, setTodoData] = useState(todoDatas);
  const [editStatus, setEditStatus] = useState({
    item: {},
    edit: false,
  });

  const [addOrEdit, setAddOrEdit] = useState("Add");

  //Add todo event
  const addTodo = (newTodo) => {
    setTodoData([newTodo, ...todoData]);
  };

  //Delete Event
  const deleteTodo = (id) => {
    if (window.confirm("Are you sure to delete todo?")) {
      setTodoData(todoData.filter((item) => item.id !== id));
    }
  };

  //Edit event
  const editTodo = (item) => {
    setEditStatus({
      item,
      edit: true,
    });
  };

  //Update todo Event
  const updateTodo = (id, newTodo) => {
    setTodoData(
      todoData.map((item) => (item.id === id ? { ...item, ...newTodo } : item))
    );
  };
  //handle button add or edit
  const handleButton = (value) => {
    setAddOrEdit(value);
  };

  return (
    <TodoContext.Provider
      value={{
        todoData,
        editStatus,
        addTodo,
        deleteTodo,
        editTodo,
        updateTodo,
        addOrEdit,
        handleButton,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export default TodoContext;
