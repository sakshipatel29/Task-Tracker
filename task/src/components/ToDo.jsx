import React from 'react'
import EditTask from './EditTask';

const ToDo = ({task, index, taskList, setTaskList}) => {

    const handleDelete = ItemID => {
        let removeIndex = taskList.indexOf(task);
        taskList.splice(removeIndex ,1);
        setTaskList((currentTasks => currentTasks.filter(todo => todo.id !== ItemID)))
    }

return (
    <div>
        <p>{task.projectName}</p>
        <EditTask task={task} index={index} taskList={taskList} setTaskList={setTaskList}/>
        <p>{task.taskDescription}</p>
        <button onClick={handleDelete}>Delete</button>
    </div>
)
}

export default ToDo;