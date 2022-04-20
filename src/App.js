import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoItemList from "./components/TodoItemList";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <Header></Header>
        <TodoForm></TodoForm>
        <TodoItemList></TodoItemList>
      </div>
    </TodoProvider>
  );
}

export default App;
