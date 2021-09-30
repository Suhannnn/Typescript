import React from "react";
import { ITodoItem } from "./Interface";

interface TodoItemProps {
  todoItems: ITodoItem[];
}
const TodoItem = ({ todoItems }: TodoItemProps) => {
  return (
    <div>
      {todoItems.map((todoItem: ITodoItem, key: number) => (
        <div key={todoItem.id}>{todoItem.text}</div>
      ))}
    </div>
  );
};

export default TodoItem;
