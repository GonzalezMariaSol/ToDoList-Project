// import "./App.css"; //no quiero esto
import { useState } from "react";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import RenderTasks from "./components/RenderTasks";
import Footer from "./components/Footer";


function App() {
  const [lsTasks, setLsTask] = useState(
    JSON.parse(localStorage.getItem("taskCollection")) || []
  ); //VA ACTUALIZANDO AL LOCAL STORAGE LAS TAREAS CARGADAS - TODAS -

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <div style={{ flexGrow: 1 }}>
        <Form lsTask={lsTasks} setLsTask={setLsTask} />
        <RenderTasks lsTasks={lsTasks} setLsTask={setLsTask} />
      </div>
      <Footer style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', padding: '10px' }} />
    </div>
  );
};

export default App;
