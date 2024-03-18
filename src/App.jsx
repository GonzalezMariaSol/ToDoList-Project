// import "./App.css"; //no quiero esto
import { useState } from "react";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import RenderTasks from "./components/RenderTasks";
// import Footer from "./assets/components/Footer";


function App() {
  const [lsTasks, setLsTask] = useState(
    JSON.parse(localStorage.getItem("taskCollection")) || []
  ); //VA ACTUALIZANDO AL LOCAL STORAGE LAS TAREAS CARGADAS - TODAS -

  return (
    <div>
      <NavBar />
      <Form lsTask={lsTasks} setLsTask={setLsTask} />
      <RenderTasks lsTasks={lsTasks} setLsTask={setLsTask} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
