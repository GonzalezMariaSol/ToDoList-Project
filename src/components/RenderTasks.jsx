//SE ENCARGA DE TRAER LO DEL LOCAL Y RENDERIZARLO 
import React from "react";
import Task from "./Task";


const RenderTasks = ({ lsTasks }) => {

  return (
    <div>
      {lsTasks.length ? (
        lsTasks.map((lsTask) => (
          <Task lsTaskId={lsTask.id} lsTaskName={lsTask.task} key={lsTask.id} />
        ))
      ) : (
        <p>Sorry, no se mostraron tareas</p>
      )}
    </div>
  );
};
export default RenderTasks;
