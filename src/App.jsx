// import "./App.css"; //no quiero esto
import { useState } from "react";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import RenderTasks from "./components/RenderTasks";
// import Footer from "./assets/components/Footer";



//!MODIFIQUE APP CSS AGREGANDOLE EL BACKGROUND





function App() {

  const [lsTasks, setLsTask] = useState(JSON.parse(localStorage.getItem("taskName")) || []); //VA ACTUALIZANDO AL LOCAL STORAGE LAS TAREAS CARGADAS - TODAS -
  console.log(lsTasks);

  return (
    <>
      <NavBar />
      <Form lsTask={lsTasks} setLsTask={setLsTask}/>
      <RenderTasks lsTasks={lsTasks} setLsTask={setLsTask} />
      {/* <Footer /> */}
    </>
  );
}

export default App;
