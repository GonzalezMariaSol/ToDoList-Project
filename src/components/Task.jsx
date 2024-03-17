import { MdCheck, MdDelete} from "react-icons/md"; // Importa los iconos de React Icons
import { ListItem, ListItemText, IconButton } from "@mui/material";

const Task = ({ lsTasks, setLsTask, lsTaskId, lsTaskName }) => {

  const getCheckedTask = (idClikleado) => {//le llega un id del boton clickleado
    const taskClicked = lsTasks.find((task) => task.id === idClikleado);//guardamos solo aquel task que coincida con el id del que se le dio click
    
    if (taskClicked) { //si se encontro uno que coincida con el id
      const newCheckedTasks = { ...taskClicked, status: true }; //guardamos una copia de ese task, pero le agregamos un status true ya que se dio al check

      const updatedTasks = lsTasks.map((task) => { //tenemos q actualizar la lista de task, hacemos un mapeo por todos los task que ya tenemos cargados
        if (task.id == idClikleado) { //si de los que tenemos cargados, coincide nuevamente con el id del que le dimos click
          return newCheckedTasks; //al poner return newCheckedTasks dentro del map, estás reemplazando el objeto de la tarea original
        } else {
          return task; //sino que nos devuelva el task sin el status agregado
        }
      });
      saveCheckedTasksInLS(updatedTasks); //hay que actualizar el localstorage con el objeto que tiene la nueva key
    }
  };
  const saveCheckedTasksInLS = (checkedTasks) => { //recibe un objeto con el status nuevo dentro
    setLsTask(checkedTasks); //este es opcional porque cambia al LS de app pero no dependemos de el
    localStorage.setItem("taskName", JSON.stringify(checkedTasks)); //actualizamos el local storage agregandole el nuevo obj
  };

  return (
    <div
      key={crypto.randomUUID()}
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
          style={{
            textDecoration: lsTasks.find(
              (task) => task.id === lsTaskId && task.status) ? "line-through" : "none",
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
        >
          <MdDelete />
        </IconButton>
      </ListItem>
    </div>
  );
};
export default Task;
