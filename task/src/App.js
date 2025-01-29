
// import { useState, useEffect } from 'react';
// import './App.css';
// import AddTask from './components/AddTask';
// import ToDo from './components/ToDo.jsx';
// import {  useDrop } from 'react-dnd';

// function App() {
//   const [taskList, setTaskList] = useState([]);
//   const [completed, setCompleted] = useState([]);

//   useEffect( () => {
//     let array = localStorage.getItem("taskList");

//     if(array) {
//         setTaskList(JSON.parse(array))
//     }
// }, [])

//   const [{isOver}, drop] = useDrop( () => ({
//     accept: "todo",
//     drop: (item) => addToCompleted(item.id, item.projectName, item.taskDescription, item.timestamp, item.duration),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     })
//   }))

//   const addToCompleted = (id, projectName, taskDescription, timestamp, duration) => {
//       const moveTask = taskList.filter((task) => id === task.id);
//       setCompleted((completed) => [...completed, { moveTask, projectName, taskDescription, timestamp, duration}] )
//   }

//   return (
//     <>
//       <div className="App">
//         <h1>Task Tracker</h1>
//         <p>Hello, how are you?</p>
//         <p>Click the button below to add a task:</p>
//         <AddTask taskList={taskList} setTaskList={setTaskList} />
//       </div>
//       <div>
//       <div className="task-container">
//         <h3>To-do List:</h3>
//         <div className="task-list">
//           {taskList
//             .map((task, i) => (
//               <ToDo
//                 key={i} 
//                 task={task}
//                 index={i}
//                 taskList={taskList}
//                 setTaskList={setTaskList}
//               />
//             ))}
//         </div>
//         <div ref={drop}>
//           <h3>Completed Tasks:</h3>
//           {completed
//             .map((task, i) => (
//               <ToDo
//                 key={i} 
//                 task={task}
//                 index={i}
//                 taskList={taskList}
//                 setTaskList={setTaskList}
//               />
//             ))}
//         </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import { useState, useEffect } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import ToDo from './components/ToDo.jsx';
import { useDrop } from 'react-dnd';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("taskList");
    if (storedTasks) {
      setTaskList(JSON.parse(storedTasks));
    }
  }, []);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "todo",
    drop: (item) => addToCompleted(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addToCompleted = (task) => {
    setCompleted((prevCompleted) => [...prevCompleted, task]);
    setTaskList((prevTaskList) => prevTaskList.filter((t) => t.id !== task.id));
  };

  return (
    <div className="app-container">
      <header>
        <h1>Task Tracker</h1>
        <p>Manage your tasks effectively</p>
      </header>
      <main>
        <AddTask taskList={taskList} setTaskList={setTaskList} />
        <div className="task-container">
          <section className="todo-section">
            <h3>To-do List</h3>
            <div className="task-list">
              {taskList.map((task, i) => (
                <ToDo key={i} task={task} taskList={taskList} setTaskList={setTaskList} />
              ))}
            </div>
          </section>
          <section className="completed-section" ref={drop}>
            <h3>Completed Tasks</h3>
            <div className={`task-list ${isOver ? "highlight" : ""}`}>
              {completed.map((task, i) => (
                <ToDo key={i} task={task} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
