// const justGet = (selector) => document.getElementById(selector);
//ACA DEBE HABER LA FUNCION PARA ELIMINAR Y PARA TACHAR
import { useState } from "react";
import { MdCheck, MdDelete, MdLogin } from "react-icons/md"; // Importa los iconos de React Icons
import { ListItem, ListItemText, IconButton } from "@mui/material";

// TENGO QUE CREAR OTRA KEY PARA LOCAL STORAGE EN LA CUAL SE GUARDEN LAS TAREAS HECHAS!!!!

const Task = ({ lsTasks, lsTaskId, lsTaskName }) => {
  const [checkedTasks, setCheckedTasks] = useState([]);

  const getCheckedTask = (idClikleado) => {
    const taskClicked = lsTasks.find((task) => task.id === idClikleado);
    if (taskClicked) {
      const newCheckedTasks = { ...taskClicked, status: true };
      const updatedTasks = [...checkedTasks, newCheckedTasks];
      setCheckedTasks(updatedTasks);
      saveCheckedTasksInLS(updatedTasks);
    }
  };
  
  const saveCheckedTasksInLS = (checkedTasks) => {
    localStorage.setItem("checkedTasks", JSON.stringify(checkedTasks));
  };
    
  //   const reconstruccion = { ...taskClicked, status: true };
  //   setTaskIsCompleted([...taskIsCompleted, reconstruccion]);
  //   localStorage.setItem("taskCompleted", JSON.stringify([...taskIsCompleted, reconstruccion]));

  return (
    <div
      key={crypto.randomUUID()}
      style={{
        backgroundColor: "pink",
        width: "50%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ListItem
        divider
        sx={{
          marginBottom: "1vw",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <ListItemText
          id={lsTaskId}
          primary={lsTaskName}
          sx={{ marginRight: "2vw" }}
          // style={{
          //   textDecoration: (chequeado = true ? "line-through" : "none"),
          // }}
        />
        <IconButton
          onClick={() =>
            getCheckedTask(lsTaskId)
          }
          aria-label="check"
          sx={{
            backgroundColor: "green",
            borderRadius: "5px",
            marginRight: "1vh",
          }}
        >
          <MdCheck />
        </IconButton>

        <IconButton
          aria-label="delete"
          sx={{ backgroundColor: "red", borderRadius: "5px" }}
        >
          <MdDelete />
        </IconButton>
      </ListItem>
    </div>
  );
};
export default Task;




/*
esto si funciona, pero no creo que se resuelva asi
const Task = ({ lsTask, lsTaskId, lsTaskName }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const funcionCheck = (idClikleado) => {
    lsTask.map((task) => {task.id === idClikleado ? setIsCompleted(!isCompleted) : task})
  };

  <IconButton
          onClick={() =>
            getCheckedTask(lsTaskId)
          }

*/