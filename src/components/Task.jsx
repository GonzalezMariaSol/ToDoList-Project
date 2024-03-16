//ACA DEBE HABER LA FUNCION PARA ELIMINAR Y PARA TACHAR
import { useState } from "react";
import { MdCheck, MdDelete } from "react-icons/md"; // Importa los iconos de React Icons
import { ListItem, ListItemText, IconButton } from "@mui/material";

const Task = ({ lsTask, lsTaskId, lsTaskName }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const funcionCheck = (idClikleado) => {
    lsTask.map((task) => {task.id === idClikleado ? setIsCompleted(!isCompleted) : task})
  };

  const funcionDelete = () => {
    console.log();
  };

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
          style={{ textDecoration: isCompleted ? "line-through" : "none" }}
        />
        <IconButton
          onClick={() => funcionCheck(lsTaskId)}
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
