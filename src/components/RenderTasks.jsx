//SE ENCARGA DE TRAER LO DEL LOCAL Y RENDERIZARLO
import React from "react";
import Task from "./Task";

const RenderTasks = ({ lsTasks, setLsTask }) => {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      {lsTasks.length ? ( //la lista de task hay algo?
        lsTasks.map((lsTask) => ( //recorreme esa lista y por cada tarea 
          <Task //creame un task - un rectangulo con informacion
            key={crypto.randomUUID()}
            lsTasks={lsTasks}
            setLsTask={setLsTask}
            lsTaskId={lsTask.id}
            lsTaskName={lsTask.task}
          />
        ))
      ) : (//sino mostrame que no hay tareas para realizar
        <p>You're all caught up</p>
      )}
    </div>
  );
};
export default RenderTasks;
