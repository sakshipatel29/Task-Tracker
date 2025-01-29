import React, { useEffect, useState } from 'react'
import EditTask from './EditTask';
import './CSS/ToDo.css';

const ToDo = ({task, index, taskList, setTaskList}) => {

    const [time, setTime] = useState(task.duration);
    const [running, setRunning] = useState(false);

    useEffect( () => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime ) => prevTime + 10) 
            }, 10)
        } else if (!running){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running])

    const handleStop = () => {
        setRunning(false);

        let taskIndex = taskList.indexOf(task);
        taskList.splice(taskIndex, 1, {
            projectName: task.projectName,
            taskDescription: task.taskDescription,
            timestamp: task.timestamp,
            duration: time
        })

        localStorage.setItem("taskList", JSON.stringify(taskList));
        window.location.reload();

    }

    const handleDelete = ItemID => {
        let removeIndex = taskList.indexOf(task);
        taskList.splice(removeIndex ,1);
        localStorage.setItem("taskList", JSON.stringify(taskList));
        window.location.reload();
        // setTaskList((currentTasks => currentTasks.filter(todo => todo.id !== ItemID)))
    }

return (
    <div className="todo-item">
        <p className="task-name">{task.projectName}</p>
            <div className="todo-buttons">
                <EditTask task={task} index={index} taskList={taskList} setTaskList={setTaskList}/>
                <p>{task.taskDescription}</p>
                <div className="todo-item">
                <div>
                    <span>{("0" + Math.floor((time / 3600000) % 24)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
                </div>
                <div>
                    {running ?
                        ( <button onClick={handleStop}>Stop</button> ) : (
                        <button onClick={() => setRunning(true)}>Start</button>
                        )
                    }
                    <button onClick={() => setTime(0)}>Reset</button>
                </div>
                </div>
                <button className="delete-button" onClick={handleDelete}>Delete</button>
            </div>
    </div>
)
}

export default ToDo;