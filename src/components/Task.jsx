import { MdCheck, MdDelete } from "react-icons/md"; // Importa los iconos de React Icons
import { ListItem, ListItemText, IconButton } from "@mui/material";

const Task = ({ lsTasks, setLsTask, lsTaskId, lsTaskName }) => {
  const getCheckedTask = (clickedId) => { //le llega un id del boton clickleado
    const taskClicked = lsTasks.find((task) => task.id === clickedId); //guardamos solo aquel task que coincida con el id del que se le dio click

    if (taskClicked) {//si se encontro uno que coincida con el id
      const updatedTasks = lsTasks.map((task) => {//recorreme tod0 lo que tenemos guardado
        if (task.id == clickedId) {//si hay alguno que coincida el id de los ya guardados con el que se le dio click
          const checkedTask = { ...taskClicked, status: !task.status }; //guardamos una copia de ese task, pero le cambiamos el status a lo opuesto si estaba en true, va a cambiar a false y lo mismo al reves
          return checkedTask; //al poner return checkedTask dentro del map, estás reemplazando el objeto de la tarea original
        } else {
          return task; //sino que nos devuelva el task sin el status agregado
        }
      });
      saveCheckedTasksInLS(updatedTasks); //hay que actualizar el localstorage con el objeto que tiene la nueva key
    }
  };
  const saveCheckedTasksInLS = (checkedTasks) => {//recibe un objeto con el status nuevo dentro
    setLsTask(checkedTasks); //este hay que actualizarlo porque es quien se encarga de MOSTRAR la lista
    localStorage.setItem("taskCollection", JSON.stringify(checkedTasks)); //este hay que actualizarlo porque es quien se encarga de GUARDAR la lista
  };

  const deleteTask = (chosenId) => {
    //GUARDO SOLO LOS OBJETOS QUE TENGAN UN ID DIFERENTE AL QUE SE QUIERE ELIMINAR
    const updatedTasks = lsTasks.filter((task) => task.id !== chosenId);
    //ACTUALIZO MI LS CON EL OBJ SELECCIONADO ELIMINADO
    localStorage.setItem("taskCollection", JSON.stringify(updatedTasks));
    //REFRESCAMOS LA PAGINA ASI SE DEJA DE MOSTRAR AL ELEMENTO ELIMINADO
    window.location.reload();
  };

  return (
    <div
      key={crypto.randomUUID()}
      style={{
        width: "50%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ListItem
        divider
        sx={{
          marginBottom: "1vw",
          backgroundColor: "#a1a1a187",
          border: "2px solid black",
          borderRadius: "5px",
        }}
      >
        <ListItemText
          id={lsTaskId}
          primary={lsTaskName}
          sx={{
             marginRight: "2vw",
             textDecoration: lsTasks.find(
              (task) => task.id === lsTaskId && task.status
            )
              ? "line-through"
              : "none",

          }}
        />
        <IconButton
          onClick={() => getCheckedTask(lsTaskId)}
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
          onClick={() => deleteTask(lsTaskId)}
        >
          <MdDelete />
        </IconButton>
      </ListItem>
    </div>
  );
};
export default Task;
