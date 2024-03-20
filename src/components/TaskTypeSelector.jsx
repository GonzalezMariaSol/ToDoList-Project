import { useState } from "react";

import { useTheme } from '@mui/material/styles';//guardamos los breakpoints
import useMediaQuery from '@mui/material/useMediaQuery';///importa useMediaQuery que permite verificar si el codigo coincide con el tamaño de la pantalla actual.
  
  import Box from "@mui/material/Box"; //le da estilos a mi tag box
  import FormControl from "@mui/material/FormControl"; //le da estilos a mi form
  import InputLabel from "@mui/material/InputLabel"; //le da estilos a mi input select
  import Select from "@mui/material/Select"; //le da estilos a mi select
  import MenuItem from "@mui/material/MenuItem"; //le da estilos a mi menuItem que serian como los option de mi select
  
  const TaskTypeSelector = ({ lsTask, setLsTask }) => {

  const theme = useTheme();//guardamos los breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); //Llama a la importacion useMediaQuery con el breakpoint de SMall. Esto da true si el ancho de la pantalla es menor que el breakpoint sm y false en caso contrario. El resultado se guarda en la variable isMobile. Entonces en la linea 43 podemos decirle style: width: isMobile ? 30vw : 15 
  
  const [optionChosen, setOptionChosen] = useState(""); //Iniciamos la app con la opcion all ya seleccionada

  const currentTasksLoaded = JSON.parse(localStorage.getItem("taskCollection")); //nos guardamos lo hay en el localStorage

  const renderTasks = (e) => {
    setOptionChosen(e.target.value); //guarda el valor del option elegido

    if (e.target.value === "completed") {//si lo que eligio es igual a completo
      const showCompleteTask = currentTasksLoaded.filter( //filtrame lo que me traje del LS
        (task) => task.status === true // y guardame unicamente los que tienen como estado true
      );
      setLsTask(showCompleteTask); //renderizame los que tenian true como estado
    } else if (e.target.value === "pending") {//si lo que eligio es igual a pendiente
      const showPendingTask = currentTasksLoaded.filter( //filtrame lo que me traje del LS
        (task) => task.status === false //y guardame unicamente los que tiene com estado false
      );
      setLsTask(showPendingTask); //renderizame los que tenian false como estado
    } else if (e.target.value === "all") {//si lo que eligio es igual a todos
      setLsTask(currentTasksLoaded); //entonces renderizame simplemente lo que ya viene en LS (q eso nunca lo afectamos aca)
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth sx={{border: "1px solid black", borderRadius:"5px", "&:hover": {
      border: "none", // Elimina el borde en el estado de hover
    }, width: isMobile ? '30vw' : "15vw"}}>
      <InputLabel 
          id="demo-simple-select-label"
          sx={{ color: 'white', '&.Mui-focused': { color: 'white' }, fontWeight: 'bold' }}
        >Filter By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={optionChosen}
          label="filterOptions"
          onChange={renderTasks}
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"completed"}>Completed</MenuItem>
          <MenuItem value={"pending"}>Pending</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default TaskTypeSelector;
