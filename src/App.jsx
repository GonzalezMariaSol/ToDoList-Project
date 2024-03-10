import "./App.css";
import NavBar from "./assets/components/NavBar";
import Form from "./assets/components/Form";
import TaskTypeSelector from "./assets/components/TaskTypeSelector";
import ListOfTask from "./assets/components/ListOfTasks";
import Task from "./assets/components/Task";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Form />
      <TaskTypeSelector />
      <ListOfTask />
      <Task />
      <Footer />
    </>
  );
}

export default App;
