import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import ToDo from './components/ToDo.jsx';

function App() {
  const [taskList, setTaskList] = useState([]);
  return (
    <>
    <div className="App">
      <h1>Task Tracker</h1>
      <p>Hello How are you?</p>
      <p>Click the below button to add a task</p>
      <AddTask taskList={taskList} setTaskList={setTaskList} />
    </div>
    <div>
      <h3>To do list:</h3>
      {taskList.slice(0).reverse().map((task,i) => 
        <>
        <ToDo key={new Date().getTime()} task={task} index={i} taskList={taskList} setTaskList={setTaskList}/>
        </>
      )}
    </div>
    </>
  );
}

export default App;
