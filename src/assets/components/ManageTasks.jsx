import RenderTasks from "./RenderTasks";

const ManageTasks = () => {
    
  const ejemplo = (id) => {
    console.log(id); 
  };

  return <RenderTasks idBtn={ejemplo} />;
};
export default ManageTasks;
