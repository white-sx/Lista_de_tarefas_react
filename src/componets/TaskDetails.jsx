import React from "react";
import { useHistory, useParams } from "react-router-dom";


import Button from "./Button";

import "./TaskDetails.css"
const TaskDetails = () => {
  const params = useParams();
const history = useHistory();

const handleClickBack = () => {
  history.goBack();
}
  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleClickBack}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2 >{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
          corporis ab laborum saepe, quaerat aspernatur autem mollitia dolores
          animi soluta placeat, quas quisquam enim vero similique maiores quos
          hic adipisci.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
