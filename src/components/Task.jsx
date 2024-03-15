//ACA DEBE HABER LA FUNCION PARA ELIMINAR Y PARA TACHAR

import { MdCheck, MdDelete } from "react-icons/md"; // Importa los iconos de React Icons
import { ListItem, ListItemText, IconButton } from "@mui/material";

const Task = ({lsTaskId, lsTaskName, key}) => {
  console.log(key);
  return (
    <div
    key={key}
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
        />
        <IconButton
          onClick={() => console.log(lsTaskId)} //funciona el click

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
