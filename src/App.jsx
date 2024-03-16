// import "./App.css"; //no quiero esto
import { useState } from "react";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import RenderTasks from "./components/RenderTasks";
// import Footer from "./assets/components/Footer";



//!MODIFIQUE APP CSS AGREGANDOLE EL BACKGROUND





function App() {

  const [lsTask, setLsTask] = useState(JSON.parse(localStorage.getItem("taskName")) || []); //VA ACTUALIZANDO AL LOCAL STORAGE


  return (
    <>
      <NavBar />
      <Form lsTask={lsTask} setLsTask={setLsTask}/>
      <RenderTasks lsTasks={lsTask} />
      {/* <Footer /> */}
    </>
  );
}

export default App;
