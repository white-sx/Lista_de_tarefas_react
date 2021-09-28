import React from "react";
import Task from "./task";
const Tasks = ({tasks, handleTaskClick, handleTaskDelition}) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
        key={task.id}
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskDelition={handleTaskDelition}
        />
      ))}
    </>
  );
};

export default Tasks;
