import './CSS/EditTask.css';
import React, { useState, useEffect } from 'react';

const EditTask = ({ task, index, taskList, setTaskList }) => {
    const [editModal, setEditModal] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInput = (e) => {
        let { name, value } = e.target;

        if (name === "projectName") {
            setProjectName(value);
            setErrorMessage("");
        }
        if (name === "projectName" && name === "") {
            setErrorMessage("Please enter task name");
        }
        if (name === "taskDescription") setTaskDescription(value);
    };

    useEffect(() => {
        setProjectName(task.projectName);
        setTaskDescription(task.taskDescription);
    }, [task]);

    const handleUpdate = (e) => {
        e.preventDefault();
        if (!projectName) {
            setErrorMessage("Please enter task name");
        } else {
            let taskIndex = taskList.indexOf(task);
            taskList.splice(taskIndex, 1, {
                projectName: projectName,
                taskDescription: taskDescription,
                timestamp: task.timestamp,
                duration: task.duration
            });
            localStorage.setItem("taskList", JSON.stringify(taskList));
            window.location.reload();
            setEditModal(false);
        }
    };

    return (
        <>
            <div>
                <button onClick={() => setEditModal(true)} className="edit-button">Edit</button>
            </div>
            <div>
                {editModal ? (
                    <div className="modal-overlay">
                        <div className="modal-container">
                            <form>
                                <div className="modal-header">
                                    <h3>Edit Task</h3>
                                    <button 
                                        onClick={() => {
                                            setEditModal(false);
                                        }} 
                                        className="close-button"
                                    >
                                        X
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <label>Task Name:</label>
                                    <input 
                                        type="text" 
                                        placeholder="Enter project name" 
                                        name="projectName" 
                                        value={projectName} 
                                        onChange={handleInput} 
                                        required 
                                    />
                                    <p className="error-message">{errorMessage}</p>
                                    <label>Description:</label>
                                    <textarea 
                                        type="text" 
                                        name="taskDescription" 
                                        value={taskDescription} 
                                        onChange={handleInput} 
                                    ></textarea>
                                    <button 
                                        onClick={handleUpdate} 
                                        className="update-button"
                                    >
                                        Update Task
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default EditTask;
