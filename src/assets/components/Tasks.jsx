//QUIERO TRAER LO QUE HAY EN EL LOCAL STORAGE Y PASARLE ESA DATA A MI HIJO SHOWTASk

// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

// const Task = ({ lsTasks }) => {
//     console.log(typeof(lsTasks));

//     return (
//         <div>
//             {lsTasks ? (
//                 lsTasks.map((lsTask) => (
//                     <Box key={lsTask.id} sx={{ width: '100%', maxWidth: 500 }}>
//                         <Typography variant="h3" gutterBottom>
//                             {lsTask.nombre}
//                         </Typography>
//                     </Box>
//                 ))
//             ) : (
//                 <p>Sorry, no se mostraron tareas</p>
//             )}
//         </div>
//     );
// };

// export default Task

// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

import React from "react";
import { MdCheck, MdDelete } from "react-icons/md"; // Importa los iconos de React Icons
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";

const Task = ({ lsTasks }) => {
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
            <ListItemText primary={lsTask.nombre} sx={{ marginRight: "2vw" }} />
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
export default Task;
