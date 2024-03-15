// import "./App.css"; //no quiero esto
import { useState } from "react";
import NavBar from "./assets/components/NavBar";
import Form from "./assets/components/Form";
import Task from "./assets/components/Tasks";
// import ShowTasks from "./assets/components/ShowTasks";
// import Footer from "./assets/components/Footer";



//!MODIFIQUE APP CSS AGREGANDOLE EL BACKGROUND





function App() {

  const [lsTask, setLsTask] = useState(JSON.parse(localStorage.getItem("taskName")) || []); //VA ACTUALIZANDO AL LOCAL STORAGE

  const pruebas = [
    {
        id: crypto.randomUUID(),
        nombre: "task",
    },
    {
        id: crypto.randomUUID(),
        nombre: "adfñlakj",
    },
    {
        id: crypto.randomUUID(),
        nombre: "p",
    }
]

  return (
    <>
      <NavBar />
      <Form lsTask={lsTask} setLsTask={setLsTask}/>
      <Task lsTasks={pruebas}/>
     {/* <ShowTasks /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
