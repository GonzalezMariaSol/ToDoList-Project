import { useState } from "react";

import TaskTypeSelector from "./TaskTypeSelector";

import { Box, TextField } from '@mui/material';

const Form = ({ lsTask, setLsTask }) => {
  const [loadedTask, setLoadedTask] = useState(""); //VA ENVIANDO Y TRAYENDO LO QUE ESTUVO ESCRIBIENDO EN EL INPUT ?????

  const getTaskAdded = (e) => {
    setLoadedTask(e.target.value);
  }; //SOLO CAPTURA LO QUE ESCRIBE EL USUARIO EN EL INPUT

  const manageClick = (e) => {
    if (e.key === "Enter") {//permite cargar el task sin tener que hacer click en cargar
      e.preventDefault(); //evita que se auto refresque antes de lo debido
      saveAddedTask(loadedTask); //inicializamos saveAddedTask con el valor que se escribio en el text field
      //! COMO PUEDO LIMPIAR EL TEXTFIELD LUEGO DEL ENTER?
    }
  };

  const saveAddedTask = (loadedTask) => {//LE LLEGA LO QUE SE PUSO EN EL INPUT
    const createdTask = { id: crypto.randomUUID(), task: loadedTask, status: false}; //SE GUARDA EN createdTask LO QUE SE ESCRIBIO EN EL INPUT Y SE LE DA UN ID
    setLsTask([...lsTask, createdTask]); //SE AGREGA EL NUEVO OBJETO CREADO
    localStorage.setItem("taskCollection", JSON.stringify([...lsTask, createdTask])); //SE AGREGA AL LS EL NUEVO OBJETO CREADO
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "4vw",
        marginLeft:"23vw",
        marginRight:"23vw",
      }}
      noValidate
      autoComplete="off"
      // onSubmit={(e) => manejarClick(e)} //SI QUISIERA HACER FUNCIONAR EL BUTON CARGAR
    >
      <TextField    
        label="Task"
        InputLabelProps={{ style: { color: 'white', fontWeight: 'bold' } }}
        InputProps={{
          style: { color: 'white', border: "1px solid black", width:"30vw"},
        }}
        onChange={getTaskAdded}
        onKeyDown={(e) => manageClick(e)}
      />
      <TaskTypeSelector lsTask={lsTask} setLsTask={setLsTask}/>
      {/* <button type="submit" >Cargar</button> */}
    </Box>
  );
};
export default Form;