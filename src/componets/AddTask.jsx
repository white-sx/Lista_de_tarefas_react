import React, { useState } from "react";
import "./AddTask.css";
import Button from "./Button";

const AddTask = ({  handleTaskAddtion }) => {
  const [inputData, setInputData] = useState('');
  const handleInputChange = (e) => {
    setInputData(e.target.value);
  }
  const click = () => {
    handleTaskAddtion(inputData);
    setInputData("");
  }
  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        type="text"
        className="add-task-input"
      />
      <div className="button-add-task-container">
        <Button onClick={click}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
