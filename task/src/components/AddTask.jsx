import React, { useState } from 'react'

const AddTask = ({taskList, setTaskList}) => {

    const [addModal, setAddModal] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const handleInput = (e) => {
        let {name, value} = e.target;

        if (name === "projectName") setProjectName(value);
        if (name === "taskDescription") setTaskDescription(value);
    }

    const handleAdd = e => {
        e.preventDefault();
        setTaskList([...taskList, { projectName, taskDescription }]);
        setProjectName("");
        setTaskDescription("");
        setAddModal(false);
        console.log([...taskList, { projectName, taskDescription }]);
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
                                    Task Name: <input type='text' placeholder='a project name' name='projectName' value={projectName} onChange={handleInput}  />
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