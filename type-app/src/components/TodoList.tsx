import React from "react";
interface props {
  input: string;
}
const TodoList = ({ input }: props) => {
  return <div>{input}</div>;
};

export default TodoList;
