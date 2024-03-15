//SE ENCARGA DE TRAER LO DEL LOCAL Y RENDERIZARLO 

import React from "react";
import { MdCheck, MdDelete } from "react-icons/md"; // Importa los iconos de React Icons
import {
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";

const RenderTasks = ({ lsTasks }) => {
    console.log(lsTasks);
  return (
    <div>
      {lsTasks ? (
        lsTasks.map((lsTask) => (
          <ListItem
            key={lsTask.id}
            divider
            sx={{
              width: "90%",
              maxWidth: 300,
              marginBottom: "1vw",
              border: "1px solid black",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ListItemText primary={lsTask.task} sx={{ marginRight: "2vw" }} />
            <IconButton
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
        ))
      ) : (
        <p>Sorry, no se mostraron tareas</p>
      )}
    </div>
  );
};
export default RenderTasks;
