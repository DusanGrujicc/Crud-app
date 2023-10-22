import './App.css'; 
import React, { useState } from 'react'; //import react and useState
import CustomForm from './components/CustomForm'; //custom form component

function App() {
  const [tasks, setTasks] = useState([]); //initialize state for tasks to empty array

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]); //update state with new task
  };  
  return (
    <div className="App">
      <h1>Task List</h1>
      <CustomForm addTask={addTask} />
    </div>
  );
}

export default App;
