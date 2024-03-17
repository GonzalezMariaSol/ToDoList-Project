//SE ENCARGA DE TRAER LO DEL LOCAL Y RENDERIZARLO 
import React from "react";
import Task from "./Task";


const RenderTasks = ({ lsTasks, setLsTask}) => {
  return (
    <div>
      {lsTasks.length ? (
        lsTasks.map((lsTask) => (
          <Task key={crypto.randomUUID()} lsTasks={lsTasks} setLsTask={setLsTask} lsTaskId={lsTask.id} lsTaskName={lsTask.task} />
        ))
      ) : (
        <p>Sorry, no se mostraron tareas</p>
      )}
    </div>
  );
};
export default RenderTasks;
