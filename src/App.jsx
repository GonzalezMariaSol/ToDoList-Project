// import "./App.css"; //no quiero esto
import { useState } from "react";
import NavBar from "./assets/components/NavBar";
import Form from "./assets/components/Form";
// import ListOfTask from "./assets/components/ListOfTasks";
// import Task from "./assets/components/Task";
// import Footer from "./assets/components/Footer";



//!MODIFIQUE APP CSS AGREGANDOLE EL BACKGROUND





function App() {

  const [lsTask, setLsTask] = useState(JSON.parse(localStorage.getItem("taskName")) || []); //VA ACTUALIZANDO AL LOCAL STORAGE

  return (
    <>
      <NavBar />
      <Form lsTask={lsTask} setLsTask={setLsTask}/>
      {/* <ListOfTask />
      <Task /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
