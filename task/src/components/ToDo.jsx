import React from 'react'
import EditTask from './EditTask';
import './CSS/ToDo.css';

const ToDo = ({task, index, taskList, setTaskList}) => {

    const handleDelete = ItemID => {
        let removeIndex = taskList.indexOf(task);
        taskList.splice(removeIndex ,1);
        setTaskList((currentTasks => currentTasks.filter(todo => todo.id !== ItemID)))
    }

return (
    <div className="todo-item">
        <p className="task-name">{task.projectName}</p>
            <div className="todo-buttons">
                <EditTask task={task} index={index} taskList={taskList} setTaskList={setTaskList}/>
                <p>{task.taskDescription}</p>
                <button className="delete-button" onClick={handleDelete}>Delete</button>
            </div>
    </div>
)
}

export default ToDo;