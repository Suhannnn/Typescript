import React, { ChangeEvent, FormEvent, useState } from "react";

interface props {
  addAddInput: (addInput: string) => void;
}

const TodoForm = ({ addAddInput }: props) => {
  const [addInput, setAddInput] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddInput(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(addInput);
    addAddInput(addInput);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo"
          value={addInput}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default TodoForm;
