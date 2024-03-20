import { useState } from "react";

import TaskTypeSelector from "./TaskTypeSelector";

import { Box, TextField } from "@mui/material";

import { useTheme } from '@mui/material/styles';// Importa a useTheme de mui
import useMediaQuery from '@mui/material/useMediaQuery'; //importa useMediaQuery que permite verificar si el codigo coincide con el tamaño de la pantalla actual.


const Form = ({ lsTask, setLsTask }) => { 

  const theme = useTheme(); //guardamos los breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); //Llama a la importacion useMediaQuery con el breakpoint de SMall. Esto da true si el ancho de la pantalla es menor que el breakpoint sm y false en caso contrario. El resultado se guarda en la variable isMobile. Entonces en la linea 80 podemos decirle style: marginBottom: isMobile ? '3vw' : 0 

  const [loadedTask, setLoadedTask] = useState([]); //VA ENVIANDO Y TRAYENDO LO QUE ESTUVO ESCRIBIENDO EN EL INPUT ?????
  const [error, setError] = useState(""); //va a estar corroborando que mi form se cumpla con lo pedido

  const getTaskAdded = (e) => {
    setLoadedTask(e.target.value);
  }; //SOLO CAPTURA LO QUE ESCRIBE EL USUARIO EN EL INPUT

  const validateForm = (e) => {
    console.log(lsTask.task);

    if (e.target.value.length < 5) {
      setError("You must write at least 5 characters!");
    } else if (e.target.value.length > 40) {
      setError("¡You must write less than 40 characters!");
    } else if (lsTask.some((task) => task.task === e.target.value)) {
      setError("¡Task already exists!");
    } else {
      setError("");
    }
    if (
      e.key === "Enter" &&
      e.target.value.length > 5 &&
      e.target.value.length <= 40 && 
      !lsTask.some(task => task.task === e.target.value)) {
      //permite cargar el task sin tener que hacer click en cargar
      e.preventDefault(); //evita que se auto refresque antes de lo debido
      saveAddedTask(loadedTask); //inicializamos saveAddedTask con el valor que se escribio en el text field
      e.target.value = ""; //limpio el input luego de haber hecho enter
    }
  };

  const saveAddedTask = (loadedTask) => {
    //LE LLEGA LO QUE SE PUSO EN EL INPUT
    const createdTask = {
      id: crypto.randomUUID(),
      task: loadedTask,
      status: false,
    }; //SE GUARDA EN createdTask LO QUE SE ESCRIBIO EN EL INPUT Y SE LE DA UN ID
    setLsTask([...lsTask, createdTask]); //SE AGREGA EL NUEVO OBJETO CREADO
    localStorage.setItem(
      "taskCollection",
      JSON.stringify([...lsTask, createdTask])
    ); //SE AGREGA AL LS EL NUEVO OBJETO CREADO
  };

  return (
    <Box
  component="form"
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "4vw",
    marginLeft: "23vw",
    marginRight: "23vw",
    flexDirection: isMobile ? 'column' : 'row', // Cambia la dirección de los elementos en función del tamaño de la pantalla
  }}
  noValidate
  autoComplete="off"
>
  <TextField
    label="Task"
    InputLabelProps={{ style: { color: "white", fontWeight: "bold" } }}
    InputProps={{
      style: { color: "white", border: "1px solid black", width: "30vw", marginBottom: isMobile ? '3vw' : 0 ,
    },
    }}
    onChange={getTaskAdded}
    onKeyDown={(e) => validateForm(e)}
    error={!!error}
    helperText={error}
    FormHelperTextProps={{
      style: {
        backgroundColor: "black",
        padding: "0.2vw",
        display: "inline-block",
        textAlign: "center",
        borderRadius: "10px",
      },
    }}
  />
  <TaskTypeSelector lsTask={lsTask} setLsTask={setLsTask} />
  {/* <button type="submit">Cargar</button> */}
</Box>
  );
};
export default Form;
