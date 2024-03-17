import { useState } from "react";

import TaskTypeSelector from "./TaskTypeSelector";

import Box from "@mui/material/Box"; //le da estilos a mi tag box
import TextField from "@mui/material/TextField";

const Form = ({ lsTask, setLsTask }) => {
  const [loadedTask, setLoadedTask] = useState(""); //VA ENVIANDO Y TRAYENDO LO QUE ESTUVO ESCRIBIENDO EN EL INPUT ?????

  const getTaskAdded = (e) => {
    setLoadedTask(e.target.value);
  }; //SOLO CAPTURA LO QUE ESCRIBE EL USUARIO EN EL INPUT

  const manageClick = (e) => {
    if (e.key === "Enter") {
      //permite cargar el task sin tener que hacer click en cargar
      e.preventDefault(); //evita que se auto refresque antes de lo debido
      handleAddTask(loadedTask); //inicializamos handleaddtask con el valor que se escribio en el text field
      // COMO PUEDO LIMPIAR EL TEXTFIELD LUEGO DEL ENTER?
    }
  };

  const handleAddTask = (loadedTask) => {
    //LE LLEGA LO QUE SE PUSO EN EL INPUT
    const valor = { id: crypto.randomUUID(), task: loadedTask }; //SE GUARDA EN VALOR LO QUE SE ESCRIBIO EN EL INPUT Y SE LE DA UN ID
    setLsTask([...lsTask, valor]); //SE AGREGA EL NUEVO OBJETO CREADO
    localStorage.setItem("taskName", JSON.stringify([...lsTask, valor])); //SE AGREGA AL LS EL NUEVO OBJETO CREADO
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: "5vw",
        width: "60%",
        backgroundColor: "red",
      }}
      noValidate
      autoComplete="off"
      // onSubmit={(e) => manejarClick(e)} //SI QUISIERA HACER FUNCIONAR EL BUTON CARGAR
    >
      <TextField
        id="outlined-basic"
        label="Task"
        variant="outlined"
        onChange={getTaskAdded}
        onKeyDown={(e) => manageClick(e)}
      />
      <TaskTypeSelector />
      {/* <button type="submit" >Cargar</button> */}
    </Box>
  );
};
export default Form;

/*

*/
