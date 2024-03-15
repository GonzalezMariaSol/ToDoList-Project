// import "./App.css"; //no quiero esto
import { useState } from "react";
import NavBar from "./assets/components/NavBar";
import Form from "./assets/components/Form";
import RenderTasks from "./assets/components/RenderTasks";
// import ManageTasks from "./assets/components/ManageTasks";
// import Footer from "./assets/components/Footer";



//!MODIFIQUE APP CSS AGREGANDOLE EL BACKGROUND





function App() {

  const [lsTask, setLsTask] = useState(JSON.parse(localStorage.getItem("taskName")) || []); //VA ACTUALIZANDO AL LOCAL STORAGE

  return (
    <>
      <NavBar />
      <Form lsTask={lsTask} setLsTask={setLsTask}/>
      <RenderTasks lsTasks={lsTask}/>
     {/* <ManageTasks /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
