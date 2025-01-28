import React from 'react'
import EditTask from './EditTask';

const ToDo = ({task, index, taskList, setTaskList}) => {
  return (
    <div>
        <p>{task.projectName}</p>
        <EditTask task={task} index={index} taskList={taskList} setTaskList={setTaskList}/>
        <p>{task.taskDescription}</p>
        <button>Delete</button>
    </div>
  )
}

export default ToDo;