//SE ENCARGA DE TRAER LO DEL LOCAL Y RENDERIZARLO 
import React from "react";
import { MdCheck, MdDelete } from "react-icons/md"; // Importa los iconos de React Icons
import {
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";

const RenderTasks = ({ lsTasks, idBtn }) => {
  console.log(typeof(idBtn)); //devuelve que es una funcion


  return (
    <div>
      {lsTasks ? (
        lsTasks.map((lsTask) => (
          <div style={{backgroundColor:"pink", width:"50%", display: "flex",
          alignItems: "center",}}>
          <ListItem
            key={lsTask.id}
            divider
            sx={{
              marginBottom: "1vw",
              border: "1px solid black",
              borderRadius: "5px",
            }}
            >
            <ListItemText id={lsTask.id} primary={lsTask.task} sx={{ marginRight: "2vw" }} />
            <IconButton 
              // onClick={() => console.log(lsTask.id)} //funciona el click
              // onClick={() => idBtn(lsTask.id)} //!ya NO funciona y me dice que idBtn no es una funcion
              onClick={() => idBtn("hola")}

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
        ))
      ) : (
        <p>Sorry, no se mostraron tareas</p>
      )}
    </div>
  );
};
export default RenderTasks;
