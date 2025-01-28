import React, { useState } from 'react'

const AddTask = ({taskList, setTaskList}) => {

    const [addModal, setAddModal] = useState(false);
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

    const handleAdd = e => {
        e.preventDefault();
        if(!projectName){
            setErrorMessage("Please enter task name");
        }else {
            setTaskList([...taskList, { projectName, taskDescription }]);
        setProjectName("");
        setTaskDescription("");
        setAddModal(false);
        console.log([...taskList, { projectName, taskDescription }]);
        }
    }

    return (
        <>
            <div>
                <button onClick={() => {setAddModal(true)}}>+ New</button>
            </div>
            <div>
                {(addModal) ? (
                    <>
                        <div>
                            <form>
                                <div>
                                <h3>Add a Task</h3>
                                <button onClick={() => {setAddModal(false)}}>X</button>
                                </div>
                                <div>
                                    Task Name: <input type='text' placeholder='a project name' name='projectName' value={projectName} onChange={handleInput} required />
                                    <p>{errorMessage}</p>
                                    Description:  <textarea type='text' name='taskDescription' value={taskDescription} onChange={handleInput} > </textarea>
                                    <button onClick={handleAdd}>Add</button>
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

export default AddTask;