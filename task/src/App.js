
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
        <p>Hello, how are you?</p>
        <p>Click the button below to add a task:</p>
        <AddTask taskList={taskList} setTaskList={setTaskList} />
      </div>
      <div className="task-container">
        <h3>To-do List:</h3>
        <div className="task-list">
          {taskList
            .slice(0)
            .reverse()
            .map((task, i) => (
              <ToDo
                key={`${task.projectName}-${i}`} 
                task={task}
                index={i}
                taskList={taskList}
                setTaskList={setTaskList}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;

