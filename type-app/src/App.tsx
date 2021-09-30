import React, { ChangeEvent, FormEvent, useState, FC } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoItem from "./components1/TodoItem";
import TodoForm from "./components1/TodoForm";

const App: FC = () => {
  const [todoItems, setTodoItems] = useState<ITodoItem[]>([
    { text: "Finish homework", id: 1 },
    { text: "Wash dishes", id: 2 },
  ]);

  const [todos, setTodos] = useState<string[]>([
    "Finish homework",
    "Wash dishes",
    "Clean room",
    "Make waffles",
  ]);
  const [input, setInput] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleClick = (e: FormEvent<HTMLButtonElement>): void => {
    addTodo();
  };
  const addTodo = (): void => {
    setTodos([...todos, input]);
    console.log(todos);
  };
  const addAddInput = (addAddInput: string) => {
    setTodoItems([...todoItems, { text: addAddInput, id: Date.now() }]);
  };
  return (
    <div className="App">
      <div todo-1>
        {todos.map((input: string, index: number) => (
          <div>
            <TodoList key={index} input={input} />
          </div>
        ))}
        <div className="todoForm">
          <input
            type="text"
            placeholder="Add todo"
            name="input"
            value={input}
            onChange={handleChange}
          />
          <button onClick={handleClick}>button</button>
        </div>
      </div>
      <br />
      <div className="todo2">
        <TodoItem todoItems={todoItems} />
        <TodoForm addAddInput={addAddInput} />
      </div>
    </div>
  );
};

export default App;
