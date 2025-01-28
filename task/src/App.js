import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';

function App() {
  const [taskList, setTaskList] = useState("");
  return (
    <>
    <div className="App">
      <h1>Task Tracker</h1>
      <p>Hello How are you?</p>
      <p>Click the below button to add a task</p>
      <AddTask taskList={taskList} setTaskList={setTaskList} />
    </div>
    </>
  );
}

export default App;
