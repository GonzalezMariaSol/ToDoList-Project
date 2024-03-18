import { useState } from "react";

import Box from "@mui/material/Box"; //le da estilos a mi tag box
import FormControl from "@mui/material/FormControl"; //le da estilos a mi form
import InputLabel from "@mui/material/InputLabel"; //le da estilos a mi input select
import Select from "@mui/material/Select"; //le da estilos a mi select
import MenuItem from "@mui/material/MenuItem"; //le da estilos a mi menuItem que serian como los option de mi select

const TaskTypeSelector = () => {
  const [optionChosen, setOptionChosen] = useState(""); //Iniciamos la app con la opcion all ya seleccionada

  const selectOption = (e) => {
    console.log(e.target.value); //devuelve la opcion elegida
    setOptionChosen(e.target.value);
  }; //lo UNICO que hace es actualizar el estado, al nuevo que seria lo q el usuario eligio y se ejecuta cuando le hacen click al select

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={optionChosen} //vale el valor actual que se eligio
          label="filterOptions"
          onChange={selectOption} //cuando se escuche un cambio, capturame que cambio se hizo
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
