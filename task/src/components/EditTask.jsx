import React from 'react'
import { useState, useEffect } from 'react'

const EditTask = ({task, index, taskList, setTaskList}) => {
    const [editModal, setEditModal] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInput = (e) => {
        let {name, value} = e.target;

        if (name === "projectName"){ 
            setProjectName(value);
            setErrorMessage("");
        }
        if (name === "projectName" && name === ""){
            setErrorMessage("Please enter task name");
        }
        if (name === "taskDescription") setTaskDescription(value);
    }

    useEffect(() => {
        setProjectName(task.projectName);
        setTaskDescription(task.taskDescription);
    }, []);

    const handleUpdate = e => {
        e.preventDefault();
        if(!projectName){
            setErrorMessage("Please enter task name");
        }else {
        let taskIndex = taskList.indexOf(task);
        taskList.splice(taskIndex,1);
        setTaskList([...taskList, { projectName, taskDescription }]);
        setEditModal(false);
        console.log([...taskList, { projectName, taskDescription }]);
        }
    } 

    return (
        <>
            <div>
                <button onClick={() => setEditModal(true)}>Edit</button> 
            </div>
            <div>
            {(editModal) ? (
                    <>
                        <div>
                            <form>
                                <div>
                                <h3>Edit Task</h3>
                                <button onClick={() => {setEditModal(false)}}>X</button>
                                </div>
                                <div>
                                    Task Name: <input type='text' placeholder='a project name' name='projectName' value={projectName} onChange={handleInput} required />
                                    <p>{errorMessage}</p>
                                    Description:  <textarea type='text' name='taskDescription' value={taskDescription} onChange={handleInput} > </textarea>
                                    <button onClick={handleUpdate}>Update Task</button>
                                </div>
                            </form>                           
                        </div>
                    </>
                )
                : null}
            </div>
        </>
    )
}

export default EditTask